import { describe, it, expect, vi } from 'vitest'
import { once } from '../src/once'

describe('once', () => {
  it('应该只执行一次函数', () => {
    const mockFn = vi.fn(() => 'result')
    const onceFn = once(mockFn)

    const result1 = onceFn()
    const result2 = onceFn()
    const result3 = onceFn()

    expect(result1).toBe('result')
    expect(result2).toBe('result')
    expect(result3).toBe('result')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该传递正确的参数', () => {
    const mockFn = vi.fn((a: number, b: number) => a + b)
    const onceFn = once(mockFn)

    expect(onceFn(1, 2)).toBe(3)
    expect(onceFn(3, 4)).toBe(3)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(1, 2)
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
    const onceFn = once(mockFn)

    const result = onceFn.call(obj)
    expect(result).toBe('test')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该缓存第一次调用的返回值', () => {
    let counter = 0
    const mockFn = vi.fn(() => counter++)
    const onceFn = once(mockFn)

    expect(onceFn()).toBe(0)
    expect(onceFn()).toBe(0)
    expect(onceFn()).toBe(0)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回 undefined 的情况', () => {
    const mockFn = vi.fn(() => undefined)
    const onceFn = once(mockFn)

    expect(onceFn()).toBeUndefined()
    expect(onceFn()).toBeUndefined()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回 null 的情况', () => {
    const mockFn = vi.fn(() => null)
    const onceFn = once(mockFn)

    expect(onceFn()).toBeNull()
    expect(onceFn()).toBeNull()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回对象的情况', () => {
    const mockFn = vi.fn(() => ({ value: 42 }))
    const onceFn = once(mockFn)

    const result1 = onceFn()
    const result2 = onceFn()

    expect(result1).toEqual({ value: 42 })
    expect(result2).toEqual({ value: 42 })
    expect(result1).toBe(result2)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理返回数组的情况', () => {
    const mockFn = vi.fn(() => [1, 2, 3])
    const onceFn = once(mockFn)

    const result1 = onceFn()
    const result2 = onceFn()

    expect(result1).toEqual([1, 2, 3])
    expect(result2).toEqual([1, 2, 3])
    expect(result1).toBe(result2)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理抛出错误的情况', () => {
    const mockFn = vi.fn(() => {
      throw new Error('Test error')
    })
    const onceFn = once(mockFn)

    expect(() => onceFn()).toThrow('Test error')
    expect(() => onceFn()).not.toThrow()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理异步函数', () => {
    const mockFn = vi.fn(async () => 'async result')
    const onceFn = once(mockFn)

    const promise1 = onceFn()
    const promise2 = onceFn()

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(promise1).toBe(promise2)
  })
})
