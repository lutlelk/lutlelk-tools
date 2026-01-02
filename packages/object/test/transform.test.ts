import { describe, it, expect } from 'vitest'
import { mapValues, mapKeys, transform, mapValuesDeep, mapKeysDeep } from '../src'

describe('object transformation operations', () => {
  const obj = { a: 1, b: 2, c: 3 }

  it('mapValues', () => {
    expect(mapValues(obj, v => v * 2)).toEqual({ a: 2, b: 4, c: 6 })
    expect(mapValues(obj, (v, k) => k + v)).toEqual({ a: 'a1', b: 'b2', c: 'c3' })
  })

  it('mapKeys', () => {
    expect(mapKeys(obj, k => k.toUpperCase())).toEqual({ A: 1, B: 2, C: 3 })
    expect(mapKeys(obj, (k, v) => k + v)).toEqual({ a1: 1, b2: 2, c3: 3 })
  })

  it('transform', () => {
    const result = transform(obj, (acc, v, k) => {
      acc[k] = v * 2
    }, {} as Record<string, number>)
    expect(result).toEqual({ a: 2, b: 4, c: 6 })
  })

  it('transform with array', () => {
    const result = transform(obj, (acc, v) => {
      acc.push(v)
    }, [] as number[])
    expect(result).toEqual([1, 2, 3])
  })

  it('mapValuesDeep', () => {
    const obj = { a: 1, b: { c: 2 }, d: [3, { e: 4 }] }
    const result = mapValuesDeep(obj, v => (typeof v === 'number' ? v * 2 : v))
    expect(result).toEqual({ a: 2, b: { c: 4 }, d: [6, { e: 8 }] })
  })

  it('mapKeysDeep', () => {
    const obj = { a: 1, b: { c: 2 }, d: [3, { e: 4 }] }
    const result = mapKeysDeep(obj, k => k.toUpperCase())
    expect(result).toEqual({ A: 1, B: { C: 2 }, D: [3, { E: 4 }] })
  })
})
