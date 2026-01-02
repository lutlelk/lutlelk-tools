import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { throttle, throttleImmediate, throttleTrailing } from '../src/throttle'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该正确节流函数调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn()
    expect(mockFn).toHaveBeenCalledTimes(1)

    throttledFn()
    throttledFn()
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn()
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该传递正确的参数', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn('test', 123)
    expect(mockFn).toHaveBeenCalledWith('test', 123)
  })

  it('应该在节流间隔内正确处理多次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn('first')
    vi.advanceTimersByTime(50)
    throttledFn('second')
    vi.advanceTimersByTime(50)
    throttledFn('third')

    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenNthCalledWith(1, 'first')
    expect(mockFn).toHaveBeenNthCalledWith(2, 'third')
  })

  it('应该处理多个独立的节流函数', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()
    const throttledFn1 = throttle(mockFn1, 100)
    const throttledFn2 = throttle(mockFn2, 200)

    throttledFn1()
    throttledFn2()
    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).toHaveBeenCalledTimes(1)

    throttledFn1()
    throttledFn2()
    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn1()
    throttledFn2()
    expect(mockFn1).toHaveBeenCalledTimes(2)
    expect(mockFn2).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn2()
    expect(mockFn2).toHaveBeenCalledTimes(2)
  })
})

describe('throttleImmediate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该立即执行第一次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleImmediate(mockFn, 100)

    throttledFn('first')
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在节流间隔内忽略后续调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleImmediate(mockFn, 100)

    throttledFn('first')
    throttledFn('second')
    throttledFn('third')

    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在节流间隔后允许再次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleImmediate(mockFn, 100)

    throttledFn('first')
    vi.advanceTimersByTime(100)
    throttledFn('second')

    expect(mockFn).toHaveBeenCalledWith('second')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该正确处理连续快速调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleImmediate(mockFn, 100)

    throttledFn('first')
    vi.advanceTimersByTime(50)
    throttledFn('second')
    vi.advanceTimersByTime(50)
    throttledFn('third')

    expect(mockFn).toHaveBeenCalledTimes(2)
    expect(mockFn).toHaveBeenNthCalledWith(1, 'first')
    expect(mockFn).toHaveBeenNthCalledWith(2, 'third')
  })
})

describe('throttleTrailing', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该延迟执行最后一次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleTrailing(mockFn, 100)

    throttledFn('first')
    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该只执行最后一次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleTrailing(mockFn, 100)

    throttledFn('first')
    throttledFn('second')
    throttledFn('third')

    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledWith('third')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该传递正确的参数', () => {
    const mockFn = vi.fn()
    const throttledFn = throttleTrailing(mockFn, 100)

    throttledFn('test', 123)
    vi.advanceTimersByTime(100)

    expect(mockFn).toHaveBeenCalledWith('test', 123)
  })

  it('应该处理多个独立的尾调用节流函数', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()
    const throttledFn1 = throttleTrailing(mockFn1, 100)
    const throttledFn2 = throttleTrailing(mockFn2, 200)

    throttledFn1()
    throttledFn2()
    vi.advanceTimersByTime(100)

    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})