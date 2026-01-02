import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createConcurrencyLimiter, batchRun, retry, sleep, withTimeout } from '../src/concurrency'

describe('createConcurrencyLimiter', () => {
  it('应该限制并发数量', async () => {
    const limiter = createConcurrencyLimiter(2)
    const results: number[] = []
    const promises: Promise<number>[] = []

    for (let i = 0; i < 5; i++) {
      promises.push(limiter.run(async () => {
        results.push(i)
        await sleep(10)
        return i
      }))
    }

    // 立即检查，应该只有前2个任务开始执行
    expect(results.length).toBeLessThanOrEqual(2)

    const allResults = await Promise.all(promises)
    expect(allResults).toEqual([0, 1, 2, 3, 4])
  })

  it('应该正确处理任务错误', async () => {
    const limiter = createConcurrencyLimiter(1)
    
    const errorTask = limiter.run(async () => {
      throw new Error('Test error')
    })

    await expect(errorTask).rejects.toThrow('Test error')

    // 错误不应该影响后续任务
    const successTask = limiter.run(async () => {
      return 'success'
    })

    await expect(successTask).resolves.toBe('success')
  })

  it('应该返回正确的状态信息', async () => {
    const limiter = createConcurrencyLimiter(2)
    
    const status1 = limiter.getStatus()
    expect(status1).toEqual({
      running: 0,
      queued: 0,
      limit: 2
    })

    const tasks = [
      limiter.run(async () => {
        await sleep(50)
        return 1
      }),
      limiter.run(async () => {
        await sleep(50)
        return 2
      }),
      limiter.run(async () => {
        await sleep(50)
        return 3
      })
    ]

    // 立即检查状态
    await sleep(10)
    const status2 = limiter.getStatus()
    expect(status2.running).toBe(2)
    expect(status2.queued).toBe(1)

    await Promise.all(tasks)
    
    const status3 = limiter.getStatus()
    expect(status3.running).toBe(0)
    expect(status3.queued).toBe(0)
  })
})

describe('batchRun', () => {
  it('应该批量执行任务并限制并发', async () => {
    const executionOrder: number[] = []
    const tasks = [
      () => sleep(10).then(() => executionOrder.push(1) && 1),
      () => sleep(10).then(() => executionOrder.push(2) && 2),
      () => sleep(10).then(() => executionOrder.push(3) && 3),
      () => sleep(10).then(() => executionOrder.push(4) && 4),
      () => sleep(10).then(() => executionOrder.push(5) && 5)
    ]

    const results = await batchRun(tasks, 2)
    expect(results).toEqual([1, 2, 3, 4, 5])
  })

  it('应该处理任务中的错误', async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error('Task failed')),
      () => Promise.resolve(3)
    ]

    await expect(batchRun(tasks, 2)).rejects.toThrow('Task failed')
  })
})

describe('retry', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该成功执行不需要重试的任务', async () => {
    const mockFn = vi.fn().mockResolvedValue('success')
    
    const result = await retry(mockFn)
    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在失败后重试指定次数', async () => {
    let callCount = 0
    const mockFn = vi.fn().mockImplementation(() => {
      callCount++
      if (callCount < 3) {
        return Promise.reject(new Error('Temporary failure'))
      }
      return Promise.resolve('success')
    })

    const resultPromise = retry(mockFn, { maxAttempts: 3 })
    
    // 推进时间以完成重试
    await Promise.resolve() // 确保异步任务开始执行
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    
    const result = await resultPromise
    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(3)
  })

  it('应该在达到最大重试次数后抛出错误', async () => {
    const mockFn = vi.fn().mockRejectedValue(new Error('Persistent failure'))

    const resultPromise = retry(mockFn, { maxAttempts: 2 })
    
    await Promise.resolve() // 确保异步任务开始执行
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    
    await expect(resultPromise).rejects.toThrow('Persistent failure')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该支持指数退避', async () => {
    const mockFn = vi.fn().mockRejectedValue(new Error('Failure'))

    const resultPromise = retry(mockFn, { 
      maxAttempts: 3, 
      delay: 1000, 
      backoff: true 
    })

    await Promise.resolve() // 确保异步任务开始执行
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    
    await expect(resultPromise).rejects.toThrow('Failure')
    expect(mockFn).toHaveBeenCalledTimes(3)
  })

  it('应该支持自定义重试条件', async () => {
    const mockFn = vi.fn().mockRejectedValue(new Error('Retryable error'))
    
    const shouldRetry = vi.fn().mockImplementation((error, attempt) => {
      return attempt <= 2 && error.message === 'Retryable error'
    })

    const resultPromise = retry(mockFn, { 
      maxAttempts: 5, 
      shouldRetry 
    })

    await Promise.resolve() // 确保异步任务开始执行
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    await Promise.resolve() // 让下一次重试开始
    vi.runOnlyPendingTimers()
    
    await expect(resultPromise).rejects.toThrow('Retryable error')
    expect(mockFn).toHaveBeenCalledTimes(3) // 初始调用 + 2次重试
    expect(shouldRetry).toHaveBeenCalledTimes(3) // 每次失败后都会调用 shouldRetry
  })
})

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该等待指定时间', async () => {
    const sleepPromise = sleep(1000)
    
    expect(vi.getTimerCount()).toBe(1)
    
    vi.advanceTimersByTime(1000)
    
    await expect(sleepPromise).resolves.toBeUndefined()
  })
})

describe('withTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该在超时前完成的任务返回正确结果', async () => {
    const slowTask = sleep(500).then(() => 'success')
    const resultPromise = withTimeout(slowTask, 1000)

    vi.advanceTimersByTime(500)
    
    await expect(resultPromise).resolves.toBe('success')
  })

  it('应该在任务超时时抛出错误', async () => {
    const slowTask = sleep(2000).then(() => 'success')
    const resultPromise = withTimeout(slowTask, 1000, 'Custom timeout message')

    vi.advanceTimersByTime(1000)
    
    await expect(resultPromise).rejects.toThrow('Custom timeout message')
  })

  it('应该处理立即拒绝的Promise', async () => {
    const failingTask = Promise.reject(new Error('Immediate failure'))
    const resultPromise = withTimeout(failingTask, 1000)

    await expect(resultPromise).rejects.toThrow('Immediate failure')
  })
})