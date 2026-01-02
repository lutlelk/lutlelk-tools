import { describe, it, expect } from 'vitest'
import { filter, map, reduce, forEach, some, every } from '../src'

describe('transform functions', () => {
  describe('filter', () => {
    it('should filter elements by predicate', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(filter(arr, x => x > 3)).toEqual([4, 5])
    })

    it('should return empty array when no element matches', () => {
      const arr = [1, 2, 3]
      expect(filter(arr, x => x > 5)).toEqual([])
    })

    it('should handle empty array', () => {
      expect(filter([], x => x > 0)).toEqual([])
    })

    it('should handle complex predicates', () => {
      const arr = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 20 }
      ]
      expect(filter(arr, person => person.age > 25)).toEqual([{ name: 'Bob', age: 30 }])
    })
  })

  describe('map', () => {
    it('should map elements to new values', () => {
      const arr = [1, 2, 3]
      expect(map(arr, x => x * 2)).toEqual([2, 4, 6])
    })

    it('should handle empty array', () => {
      expect(map([], x => x * 2)).toEqual([])
    })

    it('should transform object properties', () => {
      const arr = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ]
      expect(map(arr, person => person.name)).toEqual(['Alice', 'Bob'])
    })
  })

  describe('reduce', () => {
    it('should reduce array to single value', () => {
      const arr = [1, 2, 3, 4]
      expect(reduce(arr, (sum, x) => sum + x, 0)).toBe(10)
    })

    it('should handle empty array with initial value', () => {
      expect(reduce([], (sum, x) => sum + x, 10)).toBe(10)
    })

    it('should build object from array', () => {
      const arr = ['a', 'b', 'c']
      expect(reduce(arr, (obj, x, i) => ({ ...obj, [x]: i }), {})).toEqual({ a: 0, b: 1, c: 2 })
    })
  })

  describe('forEach', () => {
    it('should iterate over each element', () => {
      const arr = [1, 2, 3]
      const result: number[] = []
      forEach(arr, x => result.push(x * 2))
      expect(result).toEqual([2, 4, 6])
    })

    it('should handle empty array', () => {
      const result: number[] = []
      forEach([], x => result.push(x))
      expect(result).toEqual([])
    })
  })

  describe('some', () => {
    it('should return true when at least one element matches', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(some(arr, x => x > 3)).toBe(true)
    })

    it('should return false when no element matches', () => {
      const arr = [1, 2, 3]
      expect(some(arr, x => x > 5)).toBe(false)
    })

    it('should handle empty array', () => {
      expect(some([], x => x > 0)).toBe(false)
    })
  })

  describe('every', () => {
    it('should return true when all elements match', () => {
      const arr = [2, 4, 6, 8]
      expect(every(arr, x => x % 2 === 0)).toBe(true)
    })

    it('should return false when at least one element does not match', () => {
      const arr = [2, 4, 5, 8]
      expect(every(arr, x => x % 2 === 0)).toBe(false)
    })

    it('should handle empty array', () => {
      expect(every([], x => x > 0)).toBe(true)
    })
  })
})