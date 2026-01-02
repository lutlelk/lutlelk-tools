import { describe, it, expect } from 'vitest'
import { merge, deepMerge, assign, defaults } from '../src'

describe('object merge operations', () => {
  it('merge', () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    expect(merge({ a: { x: 1 } }, { a: { y: 2 } })).toEqual({ a: { y: 2 } })
  })

  it('deepMerge', () => {
    expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    expect(deepMerge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    expect(deepMerge({ a: { x: 1 } }, { a: { y: 2 } })).toEqual({ a: { x: 1, y: 2 } })
    expect(deepMerge({ a: { x: { y: 1 } } }, { a: { x: { z: 2 } } })).toEqual({
      a: { x: { y: 1, z: 2 } }
    })
  })

  it('assign', () => {
    const target = { a: 1 }
    const result = assign(target, { b: 2 })
    expect(result).toEqual({ a: 1, b: 2 })
    expect(target).toBe(result)
  })

  it('defaults', () => {
    expect(defaults({ a: 1 }, { a: 0, b: 2 })).toEqual({ a: 1, b: 2 })
    expect(defaults({}, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
    expect(defaults({ a: undefined }, { a: 1, b: 2 })).toEqual({ b: 2 })
  })
})
