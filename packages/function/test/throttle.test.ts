import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { throttle } from '../src/throttle'

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
    throttledFn()
    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该在指定时间间隔后允许再次调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn('first')
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn('second')
    expect(mockFn).toHaveBeenCalledWith('second')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该传递正确的参数', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn('test', 123)
    expect(mockFn).toHaveBeenCalledWith('test', 123)
  })

  it('应该支持 leading 选项', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100, { leading: true, trailing: false })

    throttledFn('first')
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)

    throttledFn('second')
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn('third')
    expect(mockFn).toHaveBeenCalledWith('third')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该支持 trailing 选项', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100, { leading: false, trailing: true })

    throttledFn('first')
    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 cancel 方法', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    throttledFn('test')
    ;(throttledFn as any).cancel()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 flush 方法', () => {
    const mockFn = vi.fn()
    mockFn.mockReturnValue('result')
    const throttledFn = throttle(mockFn, 100)

    throttledFn('test')
    const result = (throttledFn as any).flush()

    expect(mockFn).toHaveBeenCalledWith('test')
    expect(result).toBe('result')
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

    vi.advanceTimersByTime(100)
    throttledFn1()
    expect(mockFn1).toHaveBeenCalledTimes(2)
    expect(mockFn2).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    throttledFn2()
    expect(mockFn2).toHaveBeenCalledTimes(2)
  })

  it('应该正确处理 this 上下文', () => {
    const obj = {
      value: 'test',
      getValue: function () {
        return this.value
      }
    }
    const mockFn = vi.fn(function (this: typeof obj) {
      return this.value
    })
    const throttledFn = throttle(mockFn, 100)

    throttledFn.call(obj)
    expect(mockFn).toHaveBeenCalled()
  })

  it('应该在快速调用时只执行一次', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 100)

    for (let i = 0; i < 10; i++) {
      throttledFn(i)
    }

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(0)
  })
})
