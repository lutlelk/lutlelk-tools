import { describe, it, expect } from 'vitest'
import { isEqual, findKey, findValue, some, every, forEach, reduce } from '../src'

describe('object query operations', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 }

  it('isEqual', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true)
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false)
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true)
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false)
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false)
    expect(isEqual(1, 1)).toBe(true)
    expect(isEqual(1, 2)).toBe(false)
    expect(isEqual(null, null)).toBe(true)
    expect(isEqual(null, undefined)).toBe(false)
  })

  it('findKey', () => {
    expect(findKey(obj, v => v > 2)).toBe('c')
    expect(findKey(obj, v => v > 10)).toBe(undefined)
    expect(findKey(obj, (v, k) => k === 'b')).toBe('b')
  })

  it('findValue', () => {
    expect(findValue(obj, v => v > 2)).toBe(3)
    expect(findValue(obj, v => v > 10)).toBe(undefined)
    expect(findValue(obj, (v, k) => k === 'b')).toBe(2)
  })

  it('some', () => {
    expect(some(obj, v => v > 2)).toBe(true)
    expect(some(obj, v => v > 10)).toBe(false)
    expect(some(obj, (v, k) => k === 'b')).toBe(true)
  })

  it('every', () => {
    expect(every(obj, v => v > 0)).toBe(true)
    expect(every(obj, v => v > 2)).toBe(false)
    expect(every(obj, (v, k) => typeof k === 'string')).toBe(true)
  })

  it('forEach', () => {
    const keys: string[] = []
    const values: number[] = []
    forEach(obj, (v, k) => {
      keys.push(k)
      values.push(v)
    })
    expect(keys).toEqual(['a', 'b', 'c', 'd'])
    expect(values).toEqual([1, 2, 3, 4])
  })

  it('reduce', () => {
    const sum = reduce(obj, (acc, v) => acc + v, 0)
    expect(sum).toBe(10)

    const result = reduce(obj, (acc, v, k) => ({ ...acc, [k]: v * 2 }), {} as Record<string, number>)
    expect(result).toEqual({ a: 2, b: 4, c: 6, d: 8 })
  })
})
