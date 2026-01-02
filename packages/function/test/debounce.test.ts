import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { debounce } from '../src/debounce'

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

  it('应该支持 leading 选项', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100, { leading: true, trailing: false })

    debouncedFn('first')
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)

    debouncedFn('second')
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 trailing 选项', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100, { leading: false, trailing: true })

    debouncedFn('first')
    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(mockFn).toHaveBeenCalledWith('first')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该支持 cancel 方法', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn('test')
    ;(debouncedFn as any).cancel()

    vi.advanceTimersByTime(100)
    expect(mockFn).not.toHaveBeenCalled()
  })

  it('应该支持 flush 方法', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn('test')
    ;(debouncedFn as any).flush()

    expect(mockFn).toHaveBeenCalledWith('test')
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
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn.call(obj)
    vi.advanceTimersByTime(100)

    expect(mockFn).toHaveBeenCalled()
  })
})
