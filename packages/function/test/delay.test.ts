import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { delay, delayWithValue } from '../src/delay'

describe('delay', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该延迟指定的时间', async () => {
    const promise = delay(100)
    let resolved = false

    promise.then(() => {
      resolved = true
    })

    expect(resolved).toBe(false)

    vi.advanceTimersByTime(100)
    await promise

    expect(resolved).toBe(true)
  })

  it('应该返回 void', async () => {
    const promise = delay(100)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBeUndefined()
  })

  it('应该支持 0ms 延迟', async () => {
    const promise = delay(0)
    vi.advanceTimersByTime(0)

    await expect(promise).resolves.toBeUndefined()
  })

  it('应该支持长时间延迟', async () => {
    const promise = delay(5000)
    vi.advanceTimersByTime(5000)

    await expect(promise).resolves.toBeUndefined()
  })

  it('应该正确处理多个延迟', async () => {
    const promise1 = delay(100)
    const promise2 = delay(200)
    const promise3 = delay(300)

    vi.advanceTimersByTime(300)

    await Promise.all([promise1, promise2, promise3])
    expect(true).toBe(true)
  })
})

describe('delayWithValue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该延迟后返回指定的值', async () => {
    const promise = delayWithValue(100, 'test')
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBe('test')
  })

  it('应该支持数字值', async () => {
    const promise = delayWithValue(100, 42)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBe(42)
  })

  it('应该支持对象值', async () => {
    const obj = { value: 42 }
    const promise = delayWithValue(100, obj)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toEqual(obj)
  })

  it('应该支持数组值', async () => {
    const arr = [1, 2, 3]
    const promise = delayWithValue(100, arr)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toEqual(arr)
  })

  it('应该支持 null 值', async () => {
    const promise = delayWithValue(100, null)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBeNull()
  })

  it('应该支持 undefined 值', async () => {
    const promise = delayWithValue(100, undefined)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBeUndefined()
  })

  it('应该支持布尔值', async () => {
    const promise1 = delayWithValue(100, true)
    const promise2 = delayWithValue(100, false)
    vi.advanceTimersByTime(100)

    const result1 = await promise1
    const result2 = await promise2

    expect(result1).toBe(true)
    expect(result2).toBe(false)
  })

  it('应该支持函数值', async () => {
    const fn = () => 'test'
    const promise = delayWithValue(100, fn)
    vi.advanceTimersByTime(100)

    const result = await promise
    expect(result).toBe(fn)
    expect(result()).toBe('test')
  })

  it('应该支持 0ms 延迟', async () => {
    const promise = delayWithValue(0, 'test')
    vi.advanceTimersByTime(0)

    const result = await promise
    expect(result).toBe('test')
  })

  it('应该正确处理多个延迟', async () => {
    const promise1 = delayWithValue(100, 'first')
    const promise2 = delayWithValue(200, 'second')
    const promise3 = delayWithValue(300, 'third')

    vi.advanceTimersByTime(300)

    const results = await Promise.all([promise1, promise2, promise3])
    expect(results).toEqual(['first', 'second', 'third'])
  })
})
