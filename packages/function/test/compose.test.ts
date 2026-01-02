import { describe, it, expect } from 'vitest'
import { compose, pipe } from '../src/compose'

describe('compose', () => {
  it('应该从右向左组合函数', () => {
    const add = (x: number) => x + 1
    const multiply = (x: number) => x * 2
    const composed = compose(add, multiply)

    expect(composed(5)).toBe(11)
  })

  it('应该支持多个函数组合', () => {
    const add = (x: number) => x + 1
    const multiply = (x: number) => x * 2
    const subtract = (x: number) => x - 3
    const composed = compose(add, multiply, subtract)

    expect(composed(5)).toBe(5)
  })

  it('应该支持单个函数', () => {
    const add = (x: number) => x + 1
    const composed = compose(add)

    expect(composed(5)).toBe(6)
  })

  it('应该支持空函数列表', () => {
    const composed = compose()

    expect(composed(5)).toBe(5)
  })

  it('应该处理返回对象的情况', () => {
    const toObj = (x: number) => ({ value: x })
    const add = (obj: { value: number }) => ({ value: obj.value + 1 })
    const composed = compose(add, toObj)

    expect(composed(5)).toEqual({ value: 6 })
  })

  it('应该处理返回数组的情况', () => {
    const toArray = (x: number) => [x]
    const add = (arr: number[]) => arr.map((x) => x + 1)
    const composed = compose(add, toArray)

    expect(composed(5)).toEqual([6])
  })

  it('应该处理返回 undefined 的情况', () => {
    const toUndefined = () => undefined
    const composed = compose(toUndefined)

    expect(composed(5)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const toNull = () => null
    const composed = compose(toNull)

    expect(composed(5)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const throwError = () => {
      throw new Error('Test error')
    }
    const composed = compose(throwError)

    expect(() => composed(5)).toThrow('Test error')
  })

  it('应该正确处理字符串转换', () => {
    const toString = (x: number) => String(x)
    const toUpperCase = (x: string) => x.toUpperCase()
    const composed = compose(toUpperCase, toString)

    expect(composed(5)).toBe('5')
  })

  it('应该正确处理数组操作', () => {
    const double = (arr: number[]) => arr.map((x) => x * 2)
    const filter = (arr: number[]) => arr.filter((x) => x > 5)
    const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
    const composed = compose(sum, filter, double)

    expect(composed([1, 2, 3, 4])).toBe(14)
  })
})

describe('pipe', () => {
  it('应该从左向右组合函数', () => {
    const add = (x: number) => x + 1
    const multiply = (x: number) => x * 2
    const piped = pipe(add, multiply)

    expect(piped(5)).toBe(12)
  })

  it('应该支持多个函数组合', () => {
    const add = (x: number) => x + 1
    const multiply = (x: number) => x * 2
    const subtract = (x: number) => x - 3
    const piped = pipe(add, multiply, subtract)

    expect(piped(5)).toBe(9)
  })

  it('应该支持单个函数', () => {
    const add = (x: number) => x + 1
    const piped = pipe(add)

    expect(piped(5)).toBe(6)
  })

  it('应该支持空函数列表', () => {
    const piped = pipe()

    expect(piped(5)).toBe(5)
  })

  it('应该处理返回对象的情况', () => {
    const toObj = (x: number) => ({ value: x })
    const add = (obj: { value: number }) => ({ value: obj.value + 1 })
    const piped = pipe(toObj, add)

    expect(piped(5)).toEqual({ value: 6 })
  })

  it('应该处理返回数组的情况', () => {
    const toArray = (x: number) => [x]
    const add = (arr: number[]) => arr.map((x) => x + 1)
    const piped = pipe(toArray, add)

    expect(piped(5)).toEqual([6])
  })

  it('应该处理返回 undefined 的情况', () => {
    const toUndefined = () => undefined
    const piped = pipe(toUndefined)

    expect(piped(5)).toBeUndefined()
  })

  it('应该处理返回 null 的情况', () => {
    const toNull = () => null
    const piped = pipe(toNull)

    expect(piped(5)).toBeNull()
  })

  it('应该处理抛出错误的情况', () => {
    const throwError = () => {
      throw new Error('Test error')
    }
    const piped = pipe(throwError)

    expect(() => piped(5)).toThrow('Test error')
  })

  it('应该正确处理字符串转换', () => {
    const toString = (x: number) => String(x)
    const toUpperCase = (x: string) => x.toUpperCase()
    const piped = pipe(toString, toUpperCase)

    expect(piped(5)).toBe('5')
  })

  it('应该正确处理数组操作', () => {
    const double = (arr: number[]) => arr.map((x) => x * 2)
    const filter = (arr: number[]) => arr.filter((x) => x > 5)
    const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
    const piped = pipe(double, filter, sum)

    expect(piped([1, 2, 3, 4])).toBe(14)
  })

  it('compose 和 pipe 应该产生相反的结果', () => {
    const add = (x: number) => x + 1
    const multiply = (x: number) => x * 2

    const composed = compose(add, multiply)
    const piped = pipe(add, multiply)

    expect(composed(5)).toBe(11)
    expect(piped(5)).toBe(12)
  })
})
