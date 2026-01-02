import { describe, it, expect } from 'vitest'
import { sort, sortBy, reverse } from '../src'

describe('sort functions', () => {
  describe('sort', () => {
    it('should sort numbers in ascending order', () => {
      expect(sort([3, 1, 2])).toEqual([1, 2, 3])
    })

    it('should sort numbers with custom compare function', () => {
      expect(sort([3, 1, 2], (a, b) => b - a)).toEqual([3, 2, 1])
    })

    it('should sort strings', () => {
      expect(sort(['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
    })

    it('should handle empty array', () => {
      expect(sort([])).toEqual([])
    })

    it('should handle single element array', () => {
      expect(sort([1])).toEqual([1])
    })

    it('should not mutate original array', () => {
      const original = [3, 1, 2]
      const result = sort(original)
      expect(original).toEqual([3, 1, 2])
      expect(result).toEqual([1, 2, 3])
    })
  })

  describe('sortBy', () => {
    it('should sort objects by string property', () => {
      const arr = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 28 }
      ]
      
      expect(sortBy(arr, 'name')).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 28 },
        { name: 'Charlie', age: 30 }
      ])
    })

    it('should sort objects by number property', () => {
      const arr = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 28 }
      ]
      
      expect(sortBy(arr, 'age')).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 28 },
        { name: 'Charlie', age: 30 }
      ])
    })

    it('should handle empty array', () => {
      expect(sortBy([], 'name')).toEqual([])
    })

    it('should not mutate original array', () => {
      const original = [{ name: 'Charlie' }, { name: 'Alice' }]
      const result = sortBy(original, 'name')
      expect(original).toEqual([{ name: 'Charlie' }, { name: 'Alice' }])
      expect(result).toEqual([{ name: 'Alice' }, { name: 'Charlie' }])
    })
  })

  describe('reverse', () => {
    it('should reverse array', () => {
      expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
    })

    it('should handle empty array', () => {
      expect(reverse([])).toEqual([])
    })

    it('should handle single element array', () => {
      expect(reverse([1])).toEqual([1])
    })

    it('should not mutate original array', () => {
      const original = [1, 2, 3]
      const result = reverse(original)
      expect(original).toEqual([1, 2, 3])
      expect(result).toEqual([3, 2, 1])
    })
  })
})