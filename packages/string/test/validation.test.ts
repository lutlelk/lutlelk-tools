import { describe, it, expect } from 'vitest'
import {
  isBlank,
  isEmail,
  isUrl,
  isPhone,
  isUUID,
  isHex,
  isBase64,
  isJson,
  isNumeric,
  isAlpha,
  isAlphanumeric,
  isLowercase,
  isUppercase
} from '../src'

describe('string validation', () => {
  describe('isBlank', () => {
    it('should return true for blank strings', () => {
      expect(isBlank('')).toBe(true)
      expect(isBlank('   ')).toBe(true)
      expect(isBlank('\t\n')).toBe(true)
      expect(isBlank(null)).toBe(true)
      expect(isBlank(undefined)).toBe(true)
    })

    it('should return false for non-blank strings', () => {
      expect(isBlank('hello')).toBe(false)
      expect(isBlank('  hello  ')).toBe(false)
    })
  })

  describe('isEmail', () => {
    it('should return true for valid emails', () => {
      expect(isEmail('test@example.com')).toBe(true)
      expect(isEmail('user.name+tag@domain.co.uk')).toBe(true)
    })

    it('should return false for invalid emails', () => {
      expect(isEmail('invalid')).toBe(false)
      expect(isEmail('invalid@')).toBe(false)
      expect(isEmail('@example.com')).toBe(false)
      expect(isEmail('test example.com')).toBe(false)
    })
  })

  describe('isUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isUrl('https://example.com')).toBe(true)
      expect(isUrl('http://example.com')).toBe(true)
      expect(isUrl('ftp://example.com')).toBe(true)
      expect(isUrl('https://example.com/path?query=value')).toBe(true)
    })

    it('should return false for invalid URLs', () => {
      expect(isUrl('not a url')).toBe(false)
      expect(isUrl('example.com')).toBe(false)
      expect(isUrl('')).toBe(false)
    })
  })

  describe('isPhone', () => {
    it('should return true for valid phone numbers', () => {
      expect(isPhone('13812345678')).toBe(true)
      expect(isPhone('15987654321')).toBe(true)
    })

    it('should return false for invalid phone numbers', () => {
      expect(isPhone('12345678901')).toBe(false)
      expect(isPhone('1234567890')).toBe(false)
      expect(isPhone('abcdefghijk')).toBe(false)
    })

    it('should work with custom pattern', () => {
      expect(isPhone('123-456-7890', /^\d{3}-\d{3}-\d{4}$/)).toBe(true)
      expect(isPhone('1234567890', /^\d{3}-\d{3}-\d{4}$/)).toBe(false)
    })
  })

  describe('isUUID', () => {
    it('should return true for valid UUIDs', () => {
      expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true)
      expect(isUUID('00000000-0000-0000-0000-000000000000')).toBe(true)
    })

    it('should return false for invalid UUIDs', () => {
      expect(isUUID('not-a-uuid')).toBe(false)
      expect(isUUID('550e8400-e29b-41d4-a716')).toBe(false)
      expect(isUUID('')).toBe(false)
    })
  })

  describe('isHex', () => {
    it('should return true for valid hex strings', () => {
      expect(isHex('1a2b3c')).toBe(true)
      expect(isHex('ABCDEF')).toBe(true)
      expect(isHex('123456')).toBe(true)
    })

    it('should return false for invalid hex strings', () => {
      expect(isHex('ghijkl')).toBe(false)
      expect(isHex('1a2b3g')).toBe(false)
      expect(isHex('')).toBe(false)
    })
  })

  describe('isBase64', () => {
    it('should return true for valid base64 strings', () => {
      expect(isBase64('SGVsbG8=')).toBe(true)
      expect(isBase64('SGVsbG8gV29ybGQ=')).toBe(true)
      expect(isBase64('YW55IGNhcm5hbCBwbGVhc3VyZQ==')).toBe(true)
    })

    it('should return false for invalid base64 strings', () => {
      expect(isBase64('Hello!')).toBe(false)
      expect(isBase64('SGVsbG8')).toBe(false)
      expect(isBase64('')).toBe(false)
    })
  })

  describe('isJson', () => {
    it('should return true for valid JSON strings', () => {
      expect(isJson('{"key":"value"}')).toBe(true)
      expect(isJson('["a","b","c"]')).toBe(true)
      expect(isJson('123')).toBe(true)
      expect(isJson('true')).toBe(true)
      expect(isJson('null')).toBe(true)
    })

    it('should return false for invalid JSON strings', () => {
      expect(isJson('{key:"value"}')).toBe(false)
      expect(isJson('not json')).toBe(false)
      expect(isJson('')).toBe(false)
    })
  })

  describe('isNumeric', () => {
    it('should return true for numeric strings', () => {
      expect(isNumeric('123')).toBe(true)
      expect(isNumeric('-123')).toBe(true)
      expect(isNumeric('123.45')).toBe(true)
      expect(isNumeric('-123.45')).toBe(true)
      expect(isNumeric('.5')).toBe(true)
    })

    it('should return false for non-numeric strings', () => {
      expect(isNumeric('abc')).toBe(false)
      expect(isNumeric('12a3')).toBe(false)
      expect(isNumeric('')).toBe(false)
    })
  })

  describe('isAlpha', () => {
    it('should return true for alphabetic strings', () => {
      expect(isAlpha('abc')).toBe(true)
      expect(isAlpha('ABC')).toBe(true)
      expect(isAlpha('abcABC')).toBe(true)
    })

    it('should return false for non-alphabetic strings', () => {
      expect(isAlpha('abc123')).toBe(false)
      expect(isAlpha('abc def')).toBe(false)
      expect(isAlpha('')).toBe(false)
    })
  })

  describe('isAlphanumeric', () => {
    it('should return true for alphanumeric strings', () => {
      expect(isAlphanumeric('abc123')).toBe(true)
      expect(isAlphanumeric('ABC123')).toBe(true)
      expect(isAlphanumeric('abcABC123')).toBe(true)
    })

    it('should return false for non-alphanumeric strings', () => {
      expect(isAlphanumeric('abc 123')).toBe(false)
      expect(isAlphanumeric('abc-123')).toBe(false)
      expect(isAlphanumeric('')).toBe(false)
    })
  })

  describe('isLowercase', () => {
    it('should return true for lowercase strings', () => {
      expect(isLowercase('hello')).toBe(true)
      expect(isLowercase('hello world')).toBe(true)
    })

    it('should return false for non-lowercase strings', () => {
      expect(isLowercase('Hello')).toBe(false)
      expect(isLowercase('HELLO')).toBe(false)
      expect(isLowercase('123')).toBe(false)
    })
  })

  describe('isUppercase', () => {
    it('should return true for uppercase strings', () => {
      expect(isUppercase('HELLO')).toBe(true)
      expect(isUppercase('HELLO WORLD')).toBe(true)
    })

    it('should return false for non-uppercase strings', () => {
      expect(isUppercase('Hello')).toBe(false)
      expect(isUppercase('hello')).toBe(false)
      expect(isUppercase('123')).toBe(false)
    })
  })
})
