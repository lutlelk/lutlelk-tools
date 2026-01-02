import { describe, it, expect } from 'vitest'
import { clamp, random, randomInt, range } from '../src'

describe('range and random functions', () => {
  describe('clamp', () => {
    it('should clamp value within range', () => {
      expect(clamp(5, 0, 10)).toBe(5)
      expect(clamp(-5, 0, 10)).toBe(0)
      expect(clamp(15, 0, 10)).toBe(10)
    })

    it('should handle edge cases', () => {
      expect(clamp(0, 0, 10)).toBe(0)
      expect(clamp(10, 0, 10)).toBe(10)
      expect(clamp(5, 5, 5)).toBe(5)
    })

    it('should handle negative ranges', () => {
      expect(clamp(-5, -10, 0)).toBe(-5)
      expect(clamp(-15, -10, 0)).toBe(-10)
      expect(clamp(5, -10, 0)).toBe(0)
    })
  })

  describe('random', () => {
    it('should generate random number in range [0, 1] by default', () => {
      const num = random()
      expect(num).toBeGreaterThanOrEqual(0)
      expect(num).toBeLessThanOrEqual(1)
    })

    it('should generate random number in specified range', () => {
      const num = random(10, 20)
      expect(num).toBeGreaterThanOrEqual(10)
      expect(num).toBeLessThanOrEqual(20)
    })

    it('should generate random number with negative range', () => {
      const num = random(-10, 10)
      expect(num).toBeGreaterThanOrEqual(-10)
      expect(num).toBeLessThanOrEqual(10)
    })

    it('should generate random numbers that are not always the same', () => {
      const nums = new Set()
      for (let i = 0; i < 10; i++) {
        nums.add(random(0, 100))
      }
      expect(nums.size).toBeGreaterThan(1)
    })
  })

  describe('randomInt', () => {
    it('should generate random integer in range', () => {
      const num = randomInt(0, 10)
      expect(num).toBeGreaterThanOrEqual(0)
      expect(num).toBeLessThanOrEqual(10)
      expect(Number.isInteger(num)).toBe(true)
    })

    it('should generate random integer with negative range', () => {
      const num = randomInt(-5, 5)
      expect(num).toBeGreaterThanOrEqual(-5)
      expect(num).toBeLessThanOrEqual(5)
      expect(Number.isInteger(num)).toBe(true)
    })

    it('should generate integers that are not always the same', () => {
      const nums = new Set()
      for (let i = 0; i < 20; i++) {
        nums.add(randomInt(0, 5))
      }
      expect(nums.size).toBeGreaterThan(1)
    })
  })

  describe('range', () => {
    it('should generate range with default step', () => {
      expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5])
      expect(range(1, 3)).toEqual([1, 2, 3])
    })

    it('should generate range with custom step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10])
      expect(range(0, 5, 0.5)).toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5])
    })

    it('should generate descending range', () => {
      expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1, 0])
      expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2, 0])
    })

    it('should handle single element range', () => {
      expect(range(5, 5)).toEqual([5])
    })

    it('should handle negative numbers', () => {
      expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
      expect(range(-10, -5)).toEqual([-10, -9, -8, -7, -6, -5])
    })
  })
})
