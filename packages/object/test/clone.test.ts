import { describe, it, expect } from 'vitest'
import { clone, deepClone } from '../src'

describe('object clone operations', () => {
  it('clone', () => {
    const obj = { a: 1, b: { c: 2 } }
    const cloned = clone(obj)
    expect(cloned).toEqual(obj)
    expect(cloned).not.toBe(obj)
    expect(cloned.b).not.toBe(obj.b)
  })

  it('clone with array', () => {
    const arr = [1, 2, { a: 3 }]
    const cloned = clone(arr)
    expect(cloned).toEqual(arr)
    expect(cloned).not.toBe(arr)
    expect(cloned[2]).not.toBe(arr[2])
  })

  it('clone with primitives', () => {
    expect(clone(1)).toBe(1)
    expect(clone('string')).toBe('string')
    expect(clone(null)).toBe(null)
    expect(clone(undefined)).toBe(undefined)
  })

  it('deepClone', () => {
    const obj = { a: 1, b: { c: 2 }, d: [3, 4] }
    const cloned = deepClone(obj)
    expect(cloned).toEqual(obj)
    expect(cloned).not.toBe(obj)
    expect(cloned.b).not.toBe(obj.b)
    expect(cloned.d).not.toBe(obj.d)
  })

  it('deepClone with Date', () => {
    const date = new Date('2024-01-01')
    const cloned = deepClone(date)
    expect(cloned).toEqual(date)
    expect(cloned).not.toBe(date)
    expect(cloned instanceof Date).toBe(true)
  })

  it('deepClone with RegExp', () => {
    const regex = /test/g
    const cloned = deepClone(regex)
    expect(cloned).toEqual(regex)
    expect(cloned).not.toBe(regex)
    expect(cloned instanceof RegExp).toBe(true)
  })

  it('deepClone with Map', () => {
    const map = new Map([['a', 1], ['b', 2]])
    const cloned = deepClone(map)
    expect(cloned).toEqual(map)
    expect(cloned).not.toBe(map)
    expect(cloned instanceof Map).toBe(true)
  })

  it('deepClone with Set', () => {
    const set = new Set([1, 2, 3])
    const cloned = deepClone(set)
    expect(cloned).toEqual(set)
    expect(cloned).not.toBe(set)
    expect(cloned instanceof Set).toBe(true)
  })
})
