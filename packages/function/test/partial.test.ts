import { describe, it, expect, vi } from 'vitest'
import { partial, partialRight } from '../src/partial'

describe('partial', () => {
  it('应该预设左侧参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const partialFn = partial(fn, 1, 2)

    expect(partialFn(3)).toBe(6)
  })

  it('应该支持多个预设参数', () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d
    const partialFn = partial(fn, 1, 2, 3)

    expect(partialFn(4)).toBe(10)
  })

  it('应该支持部分预设参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const partialFn = partial(fn, 1)

    expect(partialFn(2, 3)).toBe(6)
  })

  it('应该正确传递 this 上下文', () => {
    const obj = {
      multiplier: 2,
      multiply: function (a: number, b: number) {
        return (a + b) * this.multiplier
      }
    }

    const partialFn = partial(obj.multiply.bind(obj), 5)
    expect(partialFn(3)).toBe(16)
  })

  it('应该处理无剩余参数的情况', () => {
    const fn = (a: number, b: number) => a + b
    const partialFn = partial(fn, 1, 2)

    expect(partialFn()).toBe(3)
  })

  it('应该处理返回对象的情况', () => {
    const fn = (a: number, b: number) => ({ sum: a + b })
    const partialFn = partial(fn, 1)

    expect(partialFn(2)).toEqual({ sum: 3 })
  })

  it('应该处理返回数组的情况', () => {
    const fn = (a: number, b: number) => [a, b]
    const partialFn = partial(fn, 1)

    expect(partialFn(2)).toEqual([1, 2])
  })

  it('应该处理返回 undefined 的情况', () => {
    const fn = (a: number, b: number) => undefined
    const partialFn = partial(fn, 1)

    expect(partialFn(2)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const fn = (a: number, b: number) => null
    const partialFn = partial(fn, 1)

    expect(partialFn(2)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const fn = (a: number, b: number) => {
      if (a + b > 5) throw new Error('Too large')
      return a + b
    }
    const partialFn = partial(fn, 3)

    expect(() => partialFn(3)).toThrow('Too large')
  })
})

describe('partialRight', () => {
  it('应该预设右侧参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const partialRightFn = partialRight(fn, 3)

    expect(partialRightFn(1, 2)).toBe(6)
  })

  it('应该支持多个预设参数', () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d
    const partialRightFn = partialRight(fn, 2, 3, 4)

    expect(partialRightFn(1)).toBe(10)
  })

  it('应该支持部分预设参数', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const partialRightFn = partialRight(fn, 3)

    expect(partialRightFn(1, 2)).toBe(6)
  })

  it('应该正确传递 this 上下文', () => {
    const obj = {
      multiplier: 2,
      multiply: function (a: number, b: number) {
        return (a + b) * this.multiplier
      }
    }

    const partialRightFn = partialRight(obj.multiply.bind(obj), 3)
    expect(partialRightFn(5)).toBe(16)
  })

  it('应该处理无剩余参数的情况', () => {
    const fn = (a: number, b: number) => a + b
    const partialRightFn = partialRight(fn, 2)

    expect(partialRightFn(1)).toBe(3)
  })

  it('应该处理返回对象的情况', () => {
    const fn = (a: number, b: number) => ({ sum: a + b })
    const partialRightFn = partialRight(fn, 2)

    expect(partialRightFn(1)).toEqual({ sum: 3 })
  })

  it('应该处理返回数组的情况', () => {
    const fn = (a: number, b: number) => [a, b]
    const partialRightFn = partialRight(fn, 2)

    expect(partialRightFn(1)).toEqual([1, 2])
  })

  it('应该处理返回 undefined 的情况', () => {
    const fn = (a: number, b: number) => undefined
    const partialRightFn = partialRight(fn, 2)

    expect(partialRightFn(1)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const fn = (a: number, b: number) => null
    const partialRightFn = partialRight(fn, 2)

    expect(partialRightFn(1)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const fn = (a: number, b: number) => {
      if (a + b > 5) throw new Error('Too large')
      return a + b
    }
    const partialRightFn = partialRight(fn, 3)

    expect(() => partialRightFn(3)).toThrow('Too large')
  })
})
