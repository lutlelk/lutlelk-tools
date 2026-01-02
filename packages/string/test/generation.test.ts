import { describe, it, expect } from 'vitest'
import {
  hashCode,
  generateUUID,
  random,
  randomNumeric,
  randomAlpha,
  randomAlphaNumeric,
  randomHex,
  mask,
  maskEmail,
  maskPhone
} from '../src'

describe('string generation', () => {
  describe('hashCode', () => {
    it('should generate hash code', () => {
      expect(hashCode('hello')).toBe(99162322)
      expect(hashCode('world')).toBe(113318802)
    })

    it('should generate consistent hashes', () => {
      const hash1 = hashCode('test')
      const hash2 = hashCode('test')
      expect(hash1).toBe(hash2)
    })

    it('should generate different hashes for different strings', () => {
      expect(hashCode('hello')).not.toBe(hashCode('world'))
    })
  })

  describe('generateUUID', () => {
    it('should generate valid UUID', () => {
      const uuid = generateUUID()
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    })

    it('should generate unique UUIDs', () => {
      const uuid1 = generateUUID()
      const uuid2 = generateUUID()
      expect(uuid1).not.toBe(uuid2)
    })
  })

  describe('random', () => {
    it('should generate random string of specified length', () => {
      const result = random(10)
      expect(result.length).toBe(10)
      expect(result).toMatch(/^[A-Za-z0-9]+$/)
    })

    it('should generate different strings', () => {
      const str1 = random(10)
      const str2 = random(10)
      expect(str1).not.toBe(str2)
    })

    it('should use default length', () => {
      const result = random()
      expect(result.length).toBe(16)
    })
  })

  describe('randomNumeric', () => {
    it('should generate random numeric string of specified length', () => {
      const result = randomNumeric(10)
      expect(result.length).toBe(10)
      expect(result).toMatch(/^\d+$/)
    })

    it('should generate different strings', () => {
      const str1 = randomNumeric(10)
      const str2 = randomNumeric(10)
      expect(str1).not.toBe(str2)
    })

    it('should use default length', () => {
      const result = randomNumeric()
      expect(result.length).toBe(16)
    })
  })

  describe('randomAlpha', () => {
    it('should generate random alphabetic string of specified length', () => {
      const result = randomAlpha(10)
      expect(result.length).toBe(10)
      expect(result).toMatch(/^[A-Za-z]+$/)
    })

    it('should generate different strings', () => {
      const str1 = randomAlpha(10)
      const str2 = randomAlpha(10)
      expect(str1).not.toBe(str2)
    })

    it('should use default length', () => {
      const result = randomAlpha()
      expect(result.length).toBe(16)
    })
  })

  describe('randomAlphaNumeric', () => {
    it('should generate random alphanumeric string of specified length', () => {
      const result = randomAlphaNumeric(10)
      expect(result.length).toBe(10)
      expect(result).toMatch(/^[A-Za-z0-9]+$/)
    })

    it('should generate different strings', () => {
      const str1 = randomAlphaNumeric(10)
      const str2 = randomAlphaNumeric(10)
      expect(str1).not.toBe(str2)
    })

    it('should use default length', () => {
      const result = randomAlphaNumeric()
      expect(result.length).toBe(16)
    })
  })

  describe('randomHex', () => {
    it('should generate random hex string of specified length', () => {
      const result = randomHex(10)
      expect(result.length).toBe(10)
      expect(result).toMatch(/^[0-9a-f]+$/)
    })

    it('should generate different strings', () => {
      const str1 = randomHex(10)
      const str2 = randomHex(10)
      expect(str1).not.toBe(str2)
    })

    it('should use default length', () => {
      const result = randomHex()
      expect(result.length).toBe(16)
    })
  })

  describe('mask', () => {
    it('should mask string with default visible chars', () => {
      expect(mask('1234567890')).toBe('******7890')
      expect(mask('hello')).toBe('*ello')
    })

    it('should mask string with custom visible chars', () => {
      expect(mask('1234567890', 2)).toBe('********90')
      expect(mask('1234567890', 6)).toBe('****567890')
    })

    it('should mask with custom mask char', () => {
      expect(mask('1234567890', 4, '#')).toBe('######7890')
    })

    it('should not mask if string is shorter than visible chars', () => {
      expect(mask('123', 4)).toBe('123')
    })
  })

  describe('maskEmail', () => {
    it('should mask email', () => {
      expect(maskEmail('test@example.com')).toBe('te**@example.com')
      expect(maskEmail('a@b.com')).toBe('a@b.com')
      expect(maskEmail('ab@b.com')).toBe('ab@b.com')
      expect(maskEmail('abc@b.com')).toBe('ab*@b.com')
    })

    it('should mask with custom mask char', () => {
      expect(maskEmail('test@example.com', '#')).toBe('te##@example.com')
    })

    it('should handle invalid email', () => {
      expect(maskEmail('invalid')).toBe('invalid')
    })
  })

  describe('maskPhone', () => {
    it('should mask phone', () => {
      expect(maskPhone('13812345678')).toBe('138****5678')
      expect(maskPhone('12345678901')).toBe('123****8901')
    })

    it('should mask with custom mask char', () => {
      expect(maskPhone('13812345678', '#')).toBe('138####5678')
    })

    it('should handle short phone numbers', () => {
      expect(maskPhone('12345')).toBe('12345')
    })
  })
})
