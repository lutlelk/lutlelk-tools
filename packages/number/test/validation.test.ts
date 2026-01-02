import { describe, it, expect } from 'vitest'
import { isNumber, isInteger, isFloat, isPositive, isNegative, isZero, isEven, isOdd } from '../src'

describe('number validation', () => {
  describe('isNumber', () => {
    it('should return true for valid numbers', () => {
      expect(isNumber(123)).toBe(true)
      expect(isNumber(-123)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(3.14)).toBe(true)
      expect(isNumber(Number.MAX_VALUE)).toBe(true)
    })

    it('should return false for NaN', () => {
      expect(isNumber(NaN)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isNumber('123')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
      expect(isNumber({})).toBe(false)
      expect(isNumber([])).toBe(false)
      expect(isNumber(true)).toBe(false)
    })
  })

  describe('isInteger', () => {
    it('should return true for integers', () => {
      expect(isInteger(123)).toBe(true)
      expect(isInteger(-123)).toBe(true)
      expect(isInteger(0)).toBe(true)
      expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    })

    it('should return false for floats', () => {
      expect(isInteger(3.14)).toBe(false)
      expect(isInteger(-3.14)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isInteger('123')).toBe(false)
      expect(isInteger(null)).toBe(false)
    })
  })

  describe('isFloat', () => {
    it('should return true for floats', () => {
      expect(isFloat(3.14)).toBe(true)
      expect(isFloat(-3.14)).toBe(true)
      expect(isFloat(0.1)).toBe(true)
    })

    it('should return false for integers', () => {
      expect(isFloat(123)).toBe(false)
      expect(isFloat(-123)).toBe(false)
      expect(isFloat(0)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isFloat('3.14')).toBe(false)
      expect(isFloat(null)).toBe(false)
    })
  })

  describe('isPositive', () => {
    it('should return true for positive numbers', () => {
      expect(isPositive(123)).toBe(true)
      expect(isPositive(0.1)).toBe(true)
      expect(isPositive(Number.MAX_VALUE)).toBe(true)
    })

    it('should return false for zero and negative numbers', () => {
      expect(isPositive(0)).toBe(false)
      expect(isPositive(-123)).toBe(false)
      expect(isPositive(-0.1)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isPositive('123')).toBe(false)
      expect(isPositive(null)).toBe(false)
    })
  })

  describe('isNegative', () => {
    it('should return true for negative numbers', () => {
      expect(isNegative(-123)).toBe(true)
      expect(isNegative(-0.1)).toBe(true)
      expect(isNegative(-Number.MAX_VALUE)).toBe(true)
    })

    it('should return false for zero and positive numbers', () => {
      expect(isNegative(0)).toBe(false)
      expect(isNegative(123)).toBe(false)
      expect(isNegative(0.1)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isNegative('-123')).toBe(false)
      expect(isNegative(null)).toBe(false)
    })
  })

  describe('isZero', () => {
    it('should return true for zero', () => {
      expect(isZero(0)).toBe(true)
      expect(isZero(-0)).toBe(true)
    })

    it('should return false for non-zero numbers', () => {
      expect(isZero(1)).toBe(false)
      expect(isZero(-1)).toBe(false)
      expect(isZero(0.1)).toBe(false)
    })
  })

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(0)).toBe(true)
      expect(isEven(2)).toBe(true)
      expect(isEven(-2)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(99)).toBe(false)
    })
  })

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true)
      expect(isOdd(-1)).toBe(true)
      expect(isOdd(99)).toBe(true)
    })

    it('should return false for even numbers', () => {
      expect(isOdd(0)).toBe(false)
      expect(isOdd(2)).toBe(false)
      expect(isOdd(-2)).toBe(false)
      expect(isOdd(100)).toBe(false)
    })
  })
})
