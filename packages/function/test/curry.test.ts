import { describe, it, expect, vi } from 'vitest'
import { curry, curryRight } from '../src/curry'

describe('curry', () => {
  it('应该柯里化函数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)(3)).toBe(6)
  })

  it('应该支持一次性传入所有参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedFn = curry(fn)

    expect(curriedFn(1, 2, 3)).toBe(6)
  })

  it('应该支持部分传入参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedFn = curry(fn)

    expect(curriedFn(1, 2)(3)).toBe(6)
    expect(curriedFn(1)(2, 3)).toBe(6)
  })

  it('应该支持指定 arity', () => {
    const fn = (...args: number[]) => args.reduce((a, b) => a + b, 0)
    const curriedFn = curry(fn, 3)

    expect(curriedFn(1)(2)(3)).toBe(6)
  })

  it('应该正确处理 this 上下文', () => {
    const obj = {
      multiplier: 2,
      multiply: function (a: number, b: number) {
        return (a + b) * this.multiplier
      }
    }

    const curriedFn = curry(obj.multiply.bind(obj))
    expect(curriedFn(1)(2)).toBe(6)
  })

  it('应该处理返回对象的情况', () => {
    const fn = (a: number, b: number) => ({ sum: a + b })
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)).toEqual({ sum: 3 })
  })

  it('应该处理返回数组的情况', () => {
    const fn = (a: number, b: number) => [a, b]
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)).toEqual([1, 2])
  })

  it('应该处理返回 undefined 的情况', () => {
    const fn = (a: number, b: number) => undefined
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const fn = (a: number, b: number) => null
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const fn = (a: number, b: number) => {
      if (a + b > 5) throw new Error('Too large')
      return a + b
    }
    const curriedFn = curry(fn)

    expect(() => curriedFn(3)(3)).toThrow('Too large')
  })

  it('应该支持多参数函数', () => {
    const fn = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e
    const curriedFn = curry(fn)

    expect(curriedFn(1)(2)(3)(4)(5)).toBe(15)
    expect(curriedFn(1, 2)(3, 4)(5)).toBe(15)
    expect(curriedFn(1)(2, 3, 4, 5)).toBe(15)
  })

  it('应该支持单参数函数', () => {
    const fn = (a: number) => a * 2
    const curriedFn = curry(fn)

    expect(curriedFn(5)).toBe(10)
  })
})

describe('curryRight', () => {
  it('应该从右向左柯里化函数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)(3)).toBe(6)
  })

  it('应该支持一次性传入所有参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1, 2, 3)).toBe(6)
  })

  it('应该支持部分传入参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1, 2)(3)).toBe(6)
    expect(curriedRightFn(1)(2, 3)).toBe(6)
  })

  it('应该支持指定 arity', () => {
    const fn = (...args: number[]) => args.reduce((a, b) => a + b, 0)
    const curriedRightFn = curryRight(fn, 3)

    expect(curriedRightFn(1)(2)(3)).toBe(6)
  })

  it('应该正确处理 this 上下文', () => {
    const obj = {
      multiplier: 2,
      multiply: function (a: number, b: number) {
        return (a + b) * this.multiplier
      }
    }

    const curriedRightFn = curryRight(obj.multiply.bind(obj))
    expect(curriedRightFn(1)(2)).toBe(6)
  })

  it('应该处理返回对象的情况', () => {
    const fn = (a: number, b: number) => ({ sum: a + b })
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)).toEqual({ sum: 3 })
  })

  it('应该处理返回数组的情况', () => {
    const fn = (a: number, b: number) => [a, b]
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)).toEqual([2, 1])
  })

  it('应该处理返回 undefined 的情况', () => {
    const fn = (a: number, b: number) => undefined
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const fn = (a: number, b: number) => null
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const fn = (a: number, b: number) => {
      if (a + b > 5) throw new Error('Too large')
      return a + b
    }
    const curriedRightFn = curryRight(fn)

    expect(() => curriedRightFn(3)(3)).toThrow('Too large')
  })

  it('应该支持多参数函数', () => {
    const fn = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(1)(2)(3)(4)(5)).toBe(15)
    expect(curriedRightFn(1, 2)(3, 4)(5)).toBe(15)
    expect(curriedRightFn(1)(2, 3, 4, 5)).toBe(15)
  })

  it('应该支持单参数函数', () => {
    const fn = (a: number) => a * 2
    const curriedRightFn = curryRight(fn)

    expect(curriedRightFn(5)).toBe(10)
  })
})
