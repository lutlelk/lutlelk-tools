import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { debounce, debounceImmediate } from '../src/debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该正确防抖函数调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该传递正确的参数', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn('test', 123)
    vi.advanceTimersByTime(100)

    expect(mockFn).toHaveBeenCalledWith('test', 123)
  })

  it('应该在延迟时间内取消之前的调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn('first')
    vi.advanceTimersByTime(50)
    debouncedFn('second')
    vi.advanceTimersByTime(100)

    expect(mockFn).toHaveBeenCalledWith('second')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理多个独立的防抖函数', () => {
    const mockFn1 = vi.fn()
    const mockFn2 = vi.fn()
    const debouncedFn1 = debounce(mockFn1, 100)
    const debouncedFn2 = debounce(mockFn2, 200)

    debouncedFn1()
    debouncedFn2()
    vi.advanceTimersByTime(100)

    expect(mockFn1).toHaveBeenCalledTimes(1)
    expect(mockFn2).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn2).toHaveBeenCalledTimes(1)
  })
})

describe('debounceImmediate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该立即执行第一次调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounceImmediate(mockFn, 100)

    debouncedFn('first')
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在延迟时间内忽略后续调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounceImmediate(mockFn, 100)

    debouncedFn('first')
    debouncedFn('second')
    debouncedFn('third')

    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该在延迟时间后重置状态', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounceImmediate(mockFn, 100)

    debouncedFn('first')
    vi.advanceTimersByTime(100)
    debouncedFn('second')

    expect(mockFn).toHaveBeenCalledWith('second')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该正确处理连续快速调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounceImmediate(mockFn, 100)

    debouncedFn('first')
    vi.advanceTimersByTime(50)
    debouncedFn('second')
    vi.advanceTimersByTime(50)
    debouncedFn('third')

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith('first')

    vi.advanceTimersByTime(100)
    debouncedFn('fourth')
    expect(mockFn).toHaveBeenCalledWith('fourth')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})