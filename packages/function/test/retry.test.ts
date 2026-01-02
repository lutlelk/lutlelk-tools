import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { retry } from '../src/retry'

describe('retry', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该在第一次成功时返回结果', async () => {
    const mockFn = vi.fn(async () => 'success')
    const result = await retry(mockFn)

    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在失败后重试', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 3) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const result = await retry(mockFn, { retries: 3 })

    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(3)
  })

  it('应该在达到最大重试次数后抛出错误', async () => {
    const mockFn = vi.fn(async () => {
      throw new Error('Failed')
    })

    await expect(retry(mockFn, { retries: 3 })).rejects.toThrow('Failed')
    expect(mockFn).toHaveBeenCalledTimes(4)
  })

  it('应该支持自定义重试次数', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 5) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const result = await retry(mockFn, { retries: 5 })

    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(5)
  })

  it('应该支持重试延迟', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 2) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const promise = retry(mockFn, { retries: 3, delay: 100 })

    expect(mockFn).toHaveBeenCalledTimes(1)

    await vi.runOnlyPendingTimersAsync()
    expect(mockFn).toHaveBeenCalledTimes(2)

    await promise
  })

  it('应该支持 shouldRetry 选项', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts === 1) {
        throw new Error('Retryable error')
      }
      if (attempts === 2) {
        throw new Error('Non-retryable error')
      }
      return 'success'
    })

    const shouldRetry = (error: Error) => error.message === 'Retryable error'

    await expect(retry(mockFn, { retries: 3, shouldRetry })).rejects.toThrow('Non-retryable error')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该支持 onRetry 回调', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 3) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const onRetry = vi.fn()
    const result = await retry(mockFn, { retries: 3, onRetry })

    expect(result).toBe('success')
    expect(onRetry).toHaveBeenCalledTimes(2)
    expect(onRetry).toHaveBeenNthCalledWith(1, expect.any(Error), 1)
    expect(onRetry).toHaveBeenNthCalledWith(2, expect.any(Error), 2)
  })

  it('应该在重试延迟期间等待', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 3) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const promise = retry(mockFn, { retries: 3, delay: 100 })

    await vi.runAllTimersAsync()

    await promise
    expect(mockFn).toHaveBeenCalledTimes(3)
  })

  it('应该处理返回 undefined 的情况', async () => {
    const mockFn = vi.fn(async () => undefined)
    const result = await retry(mockFn)

    expect(result).toBeUndefined()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回 null 的情况', async () => {
    const mockFn = vi.fn(async () => null)
    const result = await retry(mockFn)

    expect(result).toBeNull()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回对象的情况', async () => {
    const obj = { value: 42 }
    const mockFn = vi.fn(async () => obj)
    const result = await retry(mockFn)

    expect(result).toEqual(obj)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回数组的情况', async () => {
    const arr = [1, 2, 3]
    const mockFn = vi.fn(async () => arr)
    const result = await retry(mockFn)

    expect(result).toEqual(arr)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在 shouldRetry 返回 false 时停止重试', async () => {
    const mockFn = vi.fn(async () => {
      throw new Error('Stop retry')
    })

    const shouldRetry = () => false

    await expect(retry(mockFn, { retries: 3, shouldRetry })).rejects.toThrow('Stop retry')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 0 次重试', async () => {
    const mockFn = vi.fn(async () => {
      throw new Error('Failed')
    })

    await expect(retry(mockFn, { retries: 0 })).rejects.toThrow('Failed')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 0ms 延迟', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      if (attempts < 2) {
        throw new Error('Failed')
      }
      return 'success'
    })

    const result = await retry(mockFn, { retries: 3, delay: 0 })

    expect(result).toBe('success')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该在最后一次失败后抛出错误', async () => {
    let attempts = 0
    const mockFn = vi.fn(async () => {
      attempts++
      throw new Error(`Attempt ${attempts}`)
    })

    await expect(retry(mockFn, { retries: 2 })).rejects.toThrow('Attempt 3')
    expect(mockFn).toHaveBeenCalledTimes(3)
  })
})
