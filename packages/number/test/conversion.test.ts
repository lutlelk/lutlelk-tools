import { describe, it, expect } from 'vitest'
import { toCurrency, toBytes, fromBytes, toOrdinal, toHex, fromHex, toBinary, fromBinary, toOctal, fromOctal, pad } from '../src'

describe('conversion functions', () => {
  describe('toCurrency', () => {
    it('should format as USD by default', () => {
      expect(toCurrency(1234.56)).toBe('$1,234.56')
      expect(toCurrency(0)).toBe('$0.00')
    })

    it('should format with custom currency', () => {
      expect(toCurrency(1234.56, { currency: 'EUR' })).toBe('€1,234.56')
      expect(toCurrency(1234.56, { currency: 'GBP' })).toBe('£1,234.56')
      expect(toCurrency(1234.56, { currency: 'JPY', decimals: 0 })).toBe('¥1,235')
    })

    it('should format with custom locale', () => {
      expect(toCurrency(1234.56, { currency: 'CNY', locale: 'zh-CN' })).toBe('¥1,234.56')
      expect(toCurrency(1234.56, { currency: 'EUR', locale: 'de-DE' })).toMatch(/1\.234,56.*€/)
    })

    it('should format with custom decimals', () => {
      expect(toCurrency(1234.567, { decimals: 0 })).toBe('$1,235')
      expect(toCurrency(1234.567, { decimals: 3 })).toBe('$1,234.567')
    })

    it('should handle negative values', () => {
      expect(toCurrency(-1234.56)).toBe('-$1,234.56')
    })

    it('should handle large numbers', () => {
      expect(toCurrency(1234567890.12)).toBe('$1,234,567,890.12')
    })
  })

  describe('toBytes', () => {
    it('should convert bytes to human readable format', () => {
      expect(toBytes(0)).toBe('0.00 B')
      expect(toBytes(512)).toBe('512.00 B')
      expect(toBytes(1024)).toBe('1.00 KB')
      expect(toBytes(1536)).toBe('1.50 KB')
      expect(toBytes(1024 * 1024)).toBe('1.00 MB')
      expect(toBytes(1024 * 1024 * 1024)).toBe('1.00 GB')
      expect(toBytes(1024 * 1024 * 1024 * 1024)).toBe('1.00 TB')
    })

    it('should handle custom decimals', () => {
      expect(toBytes(1536, 0)).toBe('2 KB')
      expect(toBytes(1536, 3)).toBe('1.500 KB')
    })

    it('should handle large values', () => {
      expect(toBytes(1024 * 1024 * 1024 * 1024 * 1024)).toBe('1.00 PB')
    })
  })

  describe('fromBytes', () => {
    it('should convert human readable format to bytes', () => {
      expect(fromBytes('512 B')).toBe(512)
      expect(fromBytes('1 KB')).toBe(1024)
      expect(fromBytes('1.5 KB')).toBe(1536)
      expect(fromBytes('1 MB')).toBe(1048576)
      expect(fromBytes('1 GB')).toBe(1073741824)
    })

    it('should handle case insensitive units', () => {
      expect(fromBytes('1 kb')).toBe(1024)
      expect(fromBytes('1 Kb')).toBe(1024)
      expect(fromBytes('1 KB')).toBe(1024)
    })

    it('should handle decimals', () => {
      expect(fromBytes('1.5 MB')).toBe(1572864)
    })

    it('should return 0 for invalid format', () => {
      expect(fromBytes('invalid')).toBe(0)
      expect(fromBytes('1 XB')).toBe(0)
    })
  })

  describe('toOrdinal', () => {
    it('should convert numbers to ordinal strings', () => {
      expect(toOrdinal(1)).toBe('1st')
      expect(toOrdinal(2)).toBe('2nd')
      expect(toOrdinal(3)).toBe('3rd')
      expect(toOrdinal(4)).toBe('4th')
      expect(toOrdinal(11)).toBe('11th')
      expect(toOrdinal(12)).toBe('12th')
      expect(toOrdinal(13)).toBe('13th')
      expect(toOrdinal(21)).toBe('21st')
      expect(toOrdinal(22)).toBe('22nd')
      expect(toOrdinal(23)).toBe('23rd')
      expect(toOrdinal(101)).toBe('101st')
    })

    it('should handle zero', () => {
      expect(toOrdinal(0)).toBe('0th')
    })

    it('should handle negative numbers', () => {
      expect(toOrdinal(-1)).toBe('-1st')
      expect(toOrdinal(-2)).toBe('-2nd')
    })
  })

  describe('toHex', () => {
    it('should convert numbers to hex with prefix by default', () => {
      expect(toHex(255)).toBe('0xff')
      expect(toHex(16)).toBe('0x10')
      expect(toHex(0)).toBe('0x0')
    })

    it('should convert numbers to hex without prefix', () => {
      expect(toHex(255, false)).toBe('ff')
      expect(toHex(16, false)).toBe('10')
    })

    it('should handle negative numbers', () => {
      expect(toHex(-1)).toBe('-0x1')
    })
  })

  describe('fromHex', () => {
    it('should convert hex strings to numbers', () => {
      expect(fromHex('ff')).toBe(255)
      expect(fromHex('FF')).toBe(255)
      expect(fromHex('10')).toBe(16)
      expect(fromHex('0')).toBe(0)
    })

    it('should handle hex with prefix', () => {
      expect(fromHex('0xff')).toBe(255)
      expect(fromHex('0xFF')).toBe(255)
      expect(fromHex('0x10')).toBe(16)
    })

    it('should handle negative hex', () => {
      expect(fromHex('-ff')).toBe(-255)
    })
  })

  describe('toBinary', () => {
    it('should convert numbers to binary with prefix by default', () => {
      expect(toBinary(10)).toBe('0b1010')
      expect(toBinary(255)).toBe('0b11111111')
      expect(toBinary(0)).toBe('0b0')
    })

    it('should convert numbers to binary without prefix', () => {
      expect(toBinary(10, false)).toBe('1010')
      expect(toBinary(255, false)).toBe('11111111')
    })

    it('should handle negative numbers', () => {
      expect(toBinary(-1)).toBe('-0b1')
    })
  })

  describe('fromBinary', () => {
    it('should convert binary strings to numbers', () => {
      expect(fromBinary('1010')).toBe(10)
      expect(fromBinary('11111111')).toBe(255)
      expect(fromBinary('0')).toBe(0)
    })

    it('should handle binary with prefix', () => {
      expect(fromBinary('0b1010')).toBe(10)
      expect(fromBinary('0B1010')).toBe(10)
    })

    it('should handle negative binary', () => {
      expect(fromBinary('-1010')).toBe(-10)
    })
  })

  describe('toOctal', () => {
    it('should convert numbers to octal with prefix by default', () => {
      expect(toOctal(8)).toBe('0o10')
      expect(toOctal(64)).toBe('0o100')
      expect(toOctal(0)).toBe('0o0')
    })

    it('should convert numbers to octal without prefix', () => {
      expect(toOctal(8, false)).toBe('10')
      expect(toOctal(64, false)).toBe('100')
    })

    it('should handle negative numbers', () => {
      expect(toOctal(-8)).toBe('-0o10')
    })
  })

  describe('fromOctal', () => {
    it('should convert octal strings to numbers', () => {
      expect(fromOctal('10')).toBe(8)
      expect(fromOctal('100')).toBe(64)
      expect(fromOctal('0')).toBe(0)
    })

    it('should handle octal with prefix', () => {
      expect(fromOctal('0o10')).toBe(8)
      expect(fromOctal('0O10')).toBe(8)
    })

    it('should handle negative octal', () => {
      expect(fromOctal('-10')).toBe(-8)
    })
  })

  describe('pad', () => {
    it('should pad numbers with zeros by default', () => {
      expect(pad(5)).toBe('05')
      expect(pad(12)).toBe('12')
      expect(pad(123)).toBe('123')
    })

    it('should pad to specified length', () => {
      expect(pad(5, 4)).toBe('0005')
      expect(pad(12, 4)).toBe('0012')
      expect(pad(123, 4)).toBe('0123')
    })

    it('should pad with custom character', () => {
      expect(pad(5, 4, ' ')).toBe('   5')
      expect(pad(5, 4, '*')).toBe('***5')
    })

    it('should handle numbers longer than length', () => {
      expect(pad(12345, 4)).toBe('12345')
    })

    it('should handle zero', () => {
      expect(pad(0)).toBe('00')
    })

    it('should handle negative numbers', () => {
      expect(pad(-5, 4)).toBe('-005')
    })
  })
})
