import { describe, it, expect } from 'vitest'
import { round, ceil, floor, toFixed, toPrecision, format } from '../src'

describe('rounding and formatting functions', () => {
  describe('round', () => {
    it('should round to nearest integer by default', () => {
      expect(round(3.14)).toBe(3)
      expect(round(3.5)).toBe(4)
      expect(round(3.9)).toBe(4)
      expect(round(-3.14)).toBe(-3)
      expect(round(-3.9)).toBe(-4)
    })

    it('should round to specified precision', () => {
      expect(round(3.14159, 2)).toBe(3.14)
      expect(round(3.14159, 3)).toBe(3.142)
      expect(round(3.14159, 4)).toBe(3.1416)
      expect(round(1234.5678, -2)).toBe(1200)
    })

    it('should handle edge cases', () => {
      expect(round(0)).toBe(0)
      expect(round(0.5)).toBe(1)
      expect(round(-0.5)).toBe(-0)
    })
  })

  describe('ceil', () => {
    it('should ceil to nearest integer by default', () => {
      expect(ceil(3.14)).toBe(4)
      expect(ceil(3.9)).toBe(4)
      expect(ceil(-3.14)).toBe(-3)
      expect(ceil(-3.9)).toBe(-3)
    })

    it('should ceil to specified precision', () => {
      expect(ceil(3.141, 2)).toBe(3.15)
      expect(ceil(3.141, 3)).toBe(3.141)
      expect(ceil(1234.5678, -2)).toBe(1300)
    })

    it('should handle edge cases', () => {
      expect(ceil(0)).toBe(0)
      expect(ceil(1)).toBe(1)
      expect(ceil(-1)).toBe(-1)
    })
  })

  describe('floor', () => {
    it('should floor to nearest integer by default', () => {
      expect(floor(3.14)).toBe(3)
      expect(floor(3.9)).toBe(3)
      expect(floor(-3.14)).toBe(-4)
      expect(floor(-3.9)).toBe(-4)
    })

    it('should floor to specified precision', () => {
      expect(floor(3.149, 2)).toBe(3.14)
      expect(floor(3.149, 3)).toBe(3.149)
      expect(floor(1234.5678, -2)).toBe(1200)
    })

    it('should handle edge cases', () => {
      expect(floor(0)).toBe(0)
      expect(floor(1)).toBe(1)
      expect(floor(-1)).toBe(-1)
    })
  })

  describe('toFixed', () => {
    it('should format number to fixed decimal places', () => {
      expect(toFixed(3.14159, 2)).toBe('3.14')
      expect(toFixed(3.14159, 3)).toBe('3.142')
      expect(toFixed(3, 2)).toBe('3.00')
    })

    it('should handle negative numbers', () => {
      expect(toFixed(-3.14159, 2)).toBe('-3.14')
    })

    it('should handle zero precision', () => {
      expect(toFixed(3.9, 0)).toBe('4')
    })
  })

  describe('toPrecision', () => {
    it('should format number to specified precision', () => {
      expect(toPrecision(3.14159, 4)).toBe('3.142')
      expect(toPrecision(1234.567, 4)).toBe('1235')
      expect(toPrecision(0.0012345, 4)).toBe('0.001234')
    })

    it('should handle edge cases', () => {
      expect(toPrecision(0, 2)).toBe('0.0')
      expect(toPrecision(1, 1)).toBe('1')
    })
  })

  describe('format', () => {
    it('should format number with default options', () => {
      expect(format(1234.567)).toBe('1,234.57')
      expect(format(1234)).toBe('1,234.00')
    })

    it('should format with custom decimals', () => {
      expect(format(1234.567, { decimals: 0 })).toBe('1,235')
      expect(format(1234.567, { decimals: 3 })).toBe('1,234.567')
    })

    it('should format with custom thousands separator', () => {
      expect(format(1234567.89, { decimals: 2, thousandsSeparator: ' ' })).toBe('1 234 567.89')
      expect(format(1234567.89, { decimals: 2, thousandsSeparator: '_' })).toBe('1_234_567.89')
    })

    it('should format with custom decimal separator', () => {
      expect(format(1234.567, { decimals: 2, decimalSeparator: ',' })).toBe('1,234,57')
    })

    it('should format with prefix and suffix', () => {
      expect(format(1234.567, { prefix: '$' })).toBe('$1,234.57')
      expect(format(1234.567, { suffix: ' USD' })).toBe('1,234.57 USD')
      expect(format(1234.567, { prefix: '¥', suffix: ' CNY' })).toBe('¥1,234.57 CNY')
    })

    it('should handle negative numbers', () => {
      expect(format(-1234.567)).toBe('-1,234.57')
      expect(format(-1234.567, { prefix: '$' })).toBe('$-1,234.57')
    })

    it('should handle zero', () => {
      expect(format(0)).toBe('0.00')
    })

    it('should handle large numbers', () => {
      expect(format(1234567890.123)).toBe('1,234,567,890.12')
    })
  })
})
