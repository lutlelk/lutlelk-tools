import { describe, it, expect } from 'vitest'
import { keys, values, entries, fromEntries, size } from '../src'

describe('object basic operations', () => {
  const obj = { a: 1, b: 2, c: 3 }

  it('keys', () => {
    expect(keys(obj)).toEqual(['a', 'b', 'c'])
    expect(keys({})).toEqual([])
  })

  it('values', () => {
    expect(values(obj)).toEqual([1, 2, 3])
    expect(values({})).toEqual([])
  })

  it('entries', () => {
    expect(entries(obj)).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
    expect(entries({})).toEqual([])
  })

  it('fromEntries', () => {
    const pairs = [
      ['a', 1],
      ['b', 2]
    ] as const
    expect(fromEntries(pairs)).toEqual({ a: 1, b: 2 })
  })

  it('size', () => {
    expect(size(obj)).toBe(3)
    expect(size({})).toBe(0)
  })
})
