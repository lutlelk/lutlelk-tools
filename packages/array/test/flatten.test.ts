import { describe, it, expect } from 'vitest'
import { flatten } from '../src'

describe('flatten', () => {
  it('should flatten a nested array', () => {
    expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle empty arrays', () => {
    expect(flatten([])).toEqual([])
    expect(flatten([[], []])).toEqual([])
  })

  it('should handle arrays with mixed depths', () => {
    expect(flatten([[1], [2, 3], [4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle single element arrays', () => {
    expect(flatten([[1]])).toEqual([1])
  })

  it('should handle arrays with different types', () => {
    expect(flatten([['a', 'b'], ['c']])).toEqual(['a', 'b', 'c'])
    expect(flatten([[true, false], [true]])).toEqual([true, false, true])
  })
})