import { describe, it, expect } from 'vitest'
import { chunk, uniq } from '../src'

describe('array utils', () => {
  it('chunk basic', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]])
  })

  it('uniq basic', () => {
    expect(uniq([1,2,2,3,1])).toEqual([1,2,3])
  })
})
