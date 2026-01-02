import { describe, it, expect } from 'vitest'
import { sum, average, max, min, median, percent, toPercent, fromPercent } from '../src'

describe('statistics functions', () => {
  describe('sum', () => {
    it('should sum numbers', () => {
      expect(sum(1, 2, 3, 4, 5)).toBe(15)
      expect(sum(10, 20, 30)).toBe(60)
    })

    it('should handle negative numbers', () => {
      expect(sum(1, -2, 3, -4, 5)).toBe(3)
      expect(sum(-1, -2, -3)).toBe(-6)
    })

    it('should handle floats', () => {
      expect(sum(1.5, 2.5, 3.0)).toBe(7.0)
    })

    it('should return 0 for no arguments', () => {
      expect(sum()).toBe(0)
    })

    it('should handle single argument', () => {
      expect(sum(5)).toBe(5)
    })
  })

  describe('average', () => {
    it('should calculate average', () => {
      expect(average(1, 2, 3, 4, 5)).toBe(3)
      expect(average(10, 20, 30)).toBe(20)
    })

    it('should handle negative numbers', () => {
      expect(average(-1, 1)).toBe(0)
      expect(average(-10, -20, -30)).toBe(-20)
    })

    it('should handle floats', () => {
      expect(average(1.5, 2.5, 3.0)).toBe(2.3333333333333335)
    })

    it('should return 0 for no arguments', () => {
      expect(average()).toBe(0)
    })

    it('should handle single argument', () => {
      expect(average(5)).toBe(5)
    })
  })

  describe('max', () => {
    it('should return maximum value', () => {
      expect(max(1, 2, 3, 4, 5)).toBe(5)
      expect(max(10, 5, 20, 15)).toBe(20)
    })

    it('should handle negative numbers', () => {
      expect(max(-1, -2, -3)).toBe(-1)
      expect(max(-10, 5, -20)).toBe(5)
    })

    it('should handle floats', () => {
      expect(max(1.5, 2.5, 3.0)).toBe(3.0)
    })

    it('should handle single argument', () => {
      expect(max(5)).toBe(5)
    })

    it('should handle equal values', () => {
      expect(max(5, 5, 5)).toBe(5)
    })
  })

  describe('min', () => {
    it('should return minimum value', () => {
      expect(min(1, 2, 3, 4, 5)).toBe(1)
      expect(min(10, 5, 20, 15)).toBe(5)
    })

    it('should handle negative numbers', () => {
      expect(min(-1, -2, -3)).toBe(-3)
      expect(min(-10, 5, -20)).toBe(-20)
    })

    it('should handle floats', () => {
      expect(min(1.5, 2.5, 3.0)).toBe(1.5)
    })

    it('should handle single argument', () => {
      expect(min(5)).toBe(5)
    })

    it('should handle equal values', () => {
      expect(min(5, 5, 5)).toBe(5)
    })
  })

  describe('median', () => {
    it('should return median for odd number of values', () => {
      expect(median(1, 2, 3, 4, 5)).toBe(3)
      expect(median(10, 20, 30)).toBe(20)
    })

    it('should return median for even number of values', () => {
      expect(median(1, 2, 3, 4)).toBe(2.5)
      expect(median(10, 20, 30, 40)).toBe(25)
    })

    it('should handle unsorted values', () => {
      expect(median(5, 1, 3, 2, 4)).toBe(3)
      expect(median(40, 10, 30, 20)).toBe(25)
    })

    it('should handle negative numbers', () => {
      expect(median(-1, 0, 1)).toBe(0)
      expect(median(-5, -1, -3, -2, -4)).toBe(-3)
    })

    it('should return 0 for no arguments', () => {
      expect(median()).toBe(0)
    })

    it('should handle single argument', () => {
      expect(median(5)).toBe(5)
    })
  })

  describe('percent', () => {
    it('should calculate percentage', () => {
      expect(percent(25, 100)).toBe(25)
      expect(percent(50, 200)).toBe(25)
      expect(percent(1, 4)).toBe(25)
    })

    it('should handle decimals', () => {
      expect(percent(1, 3, 2)).toBe(33.33)
      expect(percent(1, 3, 4)).toBe(33.3333)
    })

    it('should handle zero total', () => {
      expect(percent(25, 0)).toBe(0)
    })

    it('should handle zero value', () => {
      expect(percent(0, 100)).toBe(0)
    })

    it('should handle negative values', () => {
      expect(percent(-25, 100)).toBe(-25)
    })
  })

  describe('toPercent', () => {
    it('should convert decimal to percentage string', () => {
      expect(toPercent(0.25)).toBe('25%')
      expect(toPercent(0.5)).toBe('50%')
      expect(toPercent(1)).toBe('100%')
    })

    it('should handle decimals', () => {
      expect(toPercent(0.3333, 2)).toBe('33.33%')
      expect(toPercent(0.3333, 4)).toBe('33.33%')
    })

    it('should handle values greater than 1', () => {
      expect(toPercent(1.5)).toBe('150%')
      expect(toPercent(2)).toBe('200%')
    })

    it('should handle negative values', () => {
      expect(toPercent(-0.25)).toBe('-25%')
    })

    it('should handle zero', () => {
      expect(toPercent(0)).toBe('0%')
    })
  })

  describe('fromPercent', () => {
    it('should convert percentage string to decimal', () => {
      expect(fromPercent('25%')).toBe(0.25)
      expect(fromPercent('50%')).toBe(0.5)
      expect(fromPercent('100%')).toBe(1)
    })

    it('should handle decimals', () => {
      expect(fromPercent('33.33%')).toBe(0.3333)
      expect(fromPercent('12.5%')).toBe(0.125)
    })

    it('should handle values greater than 100', () => {
      expect(fromPercent('150%')).toBe(1.5)
      expect(fromPercent('200%')).toBe(2)
    })

    it('should handle negative values', () => {
      expect(fromPercent('-25%')).toBe(-0.25)
    })

    it('should handle zero', () => {
      expect(fromPercent('0%')).toBe(0)
    })

    it('should handle values without % symbol', () => {
      expect(fromPercent('25')).toBe(0.25)
    })
  })
})
