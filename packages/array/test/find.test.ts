import { describe, it, expect } from 'vitest'
import { find, findIndex, findLast, findLastIndex, includes, indexOf, lastIndexOf } from '../src'

describe('find functions', () => {
  describe('find', () => {
    it('should find element by predicate', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(find(arr, x => x > 3)).toBe(4)
    })

    it('should return undefined when no element found', () => {
      const arr = [1, 2, 3]
      expect(find(arr, x => x > 5)).toBeUndefined()
    })

    it('should handle empty array', () => {
      expect(find([], x => x > 0)).toBeUndefined()
    })
  })

  describe('findIndex', () => {
    it('should find index by predicate', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(findIndex(arr, x => x > 3)).toBe(3)
    })

    it('should return -1 when no element found', () => {
      const arr = [1, 2, 3]
      expect(findIndex(arr, x => x > 5)).toBe(-1)
    })

    it('should handle empty array', () => {
      expect(findIndex([], x => x > 0)).toBe(-1)
    })
  })

  describe('findLast', () => {
    it('should find last element by predicate', () => {
      const arr = [1, 2, 3, 4, 5, 1]
      expect(findLast(arr, x => x === 1)).toBe(1)
    })

    it('should return undefined when no element found', () => {
      const arr = [1, 2, 3]
      expect(findLast(arr, x => x > 5)).toBeUndefined()
    })

    it('should handle empty array', () => {
      expect(findLast([], x => x > 0)).toBeUndefined()
    })
  })

  describe('findLastIndex', () => {
    it('should find last index by predicate', () => {
      const arr = [1, 2, 3, 4, 5, 1]
      expect(findLastIndex(arr, x => x === 1)).toBe(5)
    })

    it('should return -1 when no element found', () => {
      const arr = [1, 2, 3]
      expect(findLastIndex(arr, x => x > 5)).toBe(-1)
    })

    it('should handle empty array', () => {
      expect(findLastIndex([], x => x > 0)).toBe(-1)
    })
  })

  describe('includes', () => {
    it('should return true when element exists', () => {
      expect(includes([1, 2, 3], 2)).toBe(true)
    })

    it('should return false when element does not exist', () => {
      expect(includes([1, 2, 3], 4)).toBe(false)
    })

    it('should handle empty array', () => {
      expect(includes([], 1)).toBe(false)
    })
  })

  describe('indexOf', () => {
    it('should find index of element', () => {
      expect(indexOf([1, 2, 3, 2], 2)).toBe(1)
    })

    it('should find index from specific position', () => {
      expect(indexOf([1, 2, 3, 2], 2, 2)).toBe(3)
    })

    it('should return -1 when element not found', () => {
      expect(indexOf([1, 2, 3], 4)).toBe(-1)
    })
  })

  describe('lastIndexOf', () => {
    it('should find last index of element', () => {
      expect(lastIndexOf([1, 2, 3, 2], 2)).toBe(3)
    })

    it('should find last index from specific position', () => {
      expect(lastIndexOf([1, 2, 3, 2], 2, 2)).toBe(1)
    })

    it('should return -1 when element not found', () => {
      expect(lastIndexOf([1, 2, 3], 4)).toBe(-1)
    })
  })
})