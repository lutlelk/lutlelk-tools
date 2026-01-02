import { describe, it, expect } from 'vitest'
import { pick, omit, invert } from '../src'

describe('object selection operations', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 }

  it('pick', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    expect(pick(obj, ['a', 'x'])).toEqual({ a: 1 })
    expect(pick(obj, [])).toEqual({})
  })

  it('omit', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2, d: 4 })
    expect(omit(obj, ['a', 'x'])).toEqual({ b: 2, c: 3, d: 4 })
    expect(omit(obj, [])).toEqual(obj)
  })

  it('invert', () => {
    expect(invert({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' })
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' })
  })
})
