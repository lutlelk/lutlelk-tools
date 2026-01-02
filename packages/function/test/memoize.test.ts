import { describe, it, expect, vi } from 'vitest'
import { memoize } from '../src/memoize'

describe('memoize', () => {
  it('应该缓存函数结果', () => {
    const mockFn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(mockFn)

    expect(memoizedFn(5)).toBe(10)
    expect(memoizedFn(5)).toBe(10)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该为不同参数分别缓存', () => {
    const mockFn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(mockFn)

    expect(memoizedFn(5)).toBe(10)
    expect(memoizedFn(10)).toBe(20)
    expect(memoizedFn(5)).toBe(10)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该支持自定义 resolver', () => {
    const mockFn = vi.fn((a: number, b: number) => a + b)
    const memoizedFn = memoize(mockFn, {
      resolver: (a, b) => `${a}-${b}`
    })

    expect(memoizedFn(1, 2)).toBe(3)
    expect(memoizedFn(1, 2)).toBe(3)
    expect(mockFn).toHaveBeenCalledTimes(1)

    expect(memoizedFn(2, 1)).toBe(3)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该支持自定义 cache', () => {
    const mockFn = vi.fn((x: number) => x * 2)
    const customCache = new Map()
    const memoizedFn = memoize(mockFn, { cache: customCache })

    memoizedFn(5)
    expect(customCache.has(5)).toBe(true)
    expect(customCache.get(5)).toBe(10)
  })

  it('应该支持 clear 方法清空缓存', () => {
    const mockFn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(mockFn)

    memoizedFn(5)
    memoizedFn(5)
    expect(mockFn).toHaveBeenCalledTimes(1)

    memoizedFn.clear()
    memoizedFn(5)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该正确处理 this 上下文', () => {
    const obj = {
      multiplier: 2,
      multiply: function (x: number) {
        return x * this.multiplier
      }
    }

    const memoizedFn = memoize(obj.multiply.bind(obj))
    expect(memoizedFn(5)).toBe(10)
    expect(memoizedFn(5)).toBe(10)
  })

  it('应该处理复杂对象作为参数', () => {
    const mockFn = vi.fn((obj: { value: number }) => obj.value * 2)
    const memoizedFn = memoize(mockFn)

    const obj1 = { value: 5 }
    const obj2 = { value: 5 }

    memoizedFn(obj1)
    memoizedFn(obj2)
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该正确返回缓存结果', () => {
    const mockFn = vi.fn((x: number) => ({ result: x * 2 }))
    const memoizedFn = memoize(mockFn)

    const result1 = memoizedFn(5)
    const result2 = memoizedFn(5)

    expect(result1).toEqual({ result: 10 })
    expect(result2).toEqual({ result: 10 })
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('应该处理 undefined 和 null 参数', () => {
    const mockFn = vi.fn((x: any) => String(x))
    const memoizedFn = memoize(mockFn)

    expect(memoizedFn(undefined)).toBe('undefined')
    expect(memoizedFn(undefined)).toBe('undefined')
    expect(mockFn).toHaveBeenCalledTimes(1)

    expect(memoizedFn(null)).toBe('null')
    expect(memoizedFn(null)).toBe('null')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('应该访问 cache 属性', () => {
    const mockFn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(mockFn)

    memoizedFn(5)
    expect(memoizedFn.cache.has(5)).toBe(true)
    expect(memoizedFn.cache.get(5)).toBe(10)
  })
})
