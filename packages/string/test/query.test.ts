import { describe, it, expect } from 'vitest'
import {
  startsWith,
  endsWith,
  includes,
  contains,
  equals,
  length,
  size,
  charAt,
  charCodeAt,
  indexOf,
  lastIndexOf,
  count,
  countWords,
  countChars,
  first,
  last,
  initial,
  rest,
  nth
} from '../src'

describe('string query', () => {
  describe('startsWith', () => {
    it('should check if string starts with search', () => {
      expect(startsWith('hello world', 'hello')).toBe(true)
      expect(startsWith('hello world', 'world')).toBe(false)
      expect(startsWith('hello world', 'he')).toBe(true)
    })

    it('should support position parameter', () => {
      expect(startsWith('hello world', 'world', 6)).toBe(true)
      expect(startsWith('hello world', 'world', 5)).toBe(false)
    })
  })

  describe('endsWith', () => {
    it('should check if string ends with search', () => {
      expect(endsWith('hello world', 'world')).toBe(true)
      expect(endsWith('hello world', 'hello')).toBe(false)
      expect(endsWith('hello world', 'ld')).toBe(true)
    })

    it('should support length parameter', () => {
      expect(endsWith('hello world', 'hello', 5)).toBe(true)
      expect(endsWith('hello world', 'hello', 6)).toBe(false)
    })
  })

  describe('includes', () => {
    it('should check if string includes search', () => {
      expect(includes('hello world', 'world')).toBe(true)
      expect(includes('hello world', 'hello')).toBe(true)
      expect(includes('hello world', 'test')).toBe(false)
    })

    it('should support position parameter', () => {
      expect(includes('hello world', 'world', 6)).toBe(true)
      expect(includes('hello world', 'world', 7)).toBe(false)
    })
  })

  describe('contains', () => {
    it('should check if string contains search', () => {
      expect(contains('hello world', 'world')).toBe(true)
      expect(contains('hello world', 'hello')).toBe(true)
      expect(contains('hello world', 'test')).toBe(false)
    })
  })

  describe('equals', () => {
    it('should check if strings are equal', () => {
      expect(equals('hello', 'hello')).toBe(true)
      expect(equals('hello', 'world')).toBe(false)
    })

    it('should support ignore case', () => {
      expect(equals('hello', 'HELLO', true)).toBe(true)
      expect(equals('hello', 'HELLO', false)).toBe(false)
    })
  })

  describe('length', () => {
    it('should return string length', () => {
      expect(length('hello')).toBe(5)
      expect(length('hello world')).toBe(11)
      expect(length('')).toBe(0)
    })
  })

  describe('size', () => {
    it('should return string size', () => {
      expect(size('hello')).toBe(5)
      expect(size('hello world')).toBe(11)
      expect(size('')).toBe(0)
    })
  })

  describe('charAt', () => {
    it('should return character at index', () => {
      expect(charAt('hello', 1)).toBe('e')
      expect(charAt('hello', 0)).toBe('h')
      expect(charAt('hello', 4)).toBe('o')
    })

    it('should handle out of range', () => {
      expect(charAt('hello', 10)).toBe('')
    })
  })

  describe('charCodeAt', () => {
    it('should return character code at index', () => {
      expect(charCodeAt('hello', 0)).toBe(104)
      expect(charCodeAt('hello', 1)).toBe(101)
    })

    it('should handle out of range', () => {
      expect(charCodeAt('hello', 10)).toBe(NaN)
    })
  })

  describe('indexOf', () => {
    it('should return index of first occurrence', () => {
      expect(indexOf('hello world', 'world')).toBe(6)
      expect(indexOf('hello world', 'hello')).toBe(0)
      expect(indexOf('hello world', 'l')).toBe(2)
    })

    it('should support fromIndex parameter', () => {
      expect(indexOf('hello hello', 'hello', 1)).toBe(6)
      expect(indexOf('hello hello', 'hello', 0)).toBe(0)
    })

    it('should return -1 if not found', () => {
      expect(indexOf('hello world', 'test')).toBe(-1)
    })
  })

  describe('lastIndexOf', () => {
    it('should return index of last occurrence', () => {
      expect(lastIndexOf('hello hello', 'hello')).toBe(6)
      expect(lastIndexOf('hello world', 'l')).toBe(9)
    })

    it('should support fromIndex parameter', () => {
      expect(lastIndexOf('hello hello', 'hello', 5)).toBe(0)
      expect(lastIndexOf('hello hello', 'hello', 6)).toBe(6)
    })

    it('should return -1 if not found', () => {
      expect(lastIndexOf('hello world', 'test')).toBe(-1)
    })
  })

  describe('count', () => {
    it('should count occurrences', () => {
      expect(count('hello world', 'l')).toBe(3)
      expect(count('hello hello', 'hello')).toBe(2)
      expect(count('hello world', 'x')).toBe(0)
    })
  })

  describe('countWords', () => {
    it('should count words', () => {
      expect(countWords('hello world')).toBe(2)
      expect(countWords('hello world test')).toBe(3)
      expect(countWords('  hello  world  ')).toBe(2)
    })

    it('should handle edge cases', () => {
      expect(countWords('')).toBe(0)
      expect(countWords('   ')).toBe(0)
      expect(countWords('hello')).toBe(1)
    })
  })

  describe('countChars', () => {
    it('should count characters', () => {
      expect(countChars('hello world', 'l')).toBe(3)
      expect(countChars('hello hello', 'hello')).toBe(2)
      expect(countChars('hello world', 'x')).toBe(0)
    })
  })

  describe('first', () => {
    it('should return first n characters', () => {
      expect(first('hello', 2)).toBe('he')
      expect(first('hello', 3)).toBe('hel')
    })

    it('should default to 1', () => {
      expect(first('hello')).toBe('h')
    })

    it('should handle edge cases', () => {
      expect(first('hello', 10)).toBe('hello')
      expect(first('', 5)).toBe('')
    })
  })

  describe('last', () => {
    it('should return last n characters', () => {
      expect(last('hello', 2)).toBe('lo')
      expect(last('hello', 3)).toBe('llo')
    })

    it('should default to 1', () => {
      expect(last('hello')).toBe('o')
    })

    it('should handle edge cases', () => {
      expect(last('hello', 10)).toBe('hello')
      expect(last('', 5)).toBe('')
    })
  })

  describe('initial', () => {
    it('should return all but last n characters', () => {
      expect(initial('hello', 2)).toBe('hel')
      expect(initial('hello', 1)).toBe('hell')
    })

    it('should default to 1', () => {
      expect(initial('hello')).toBe('hell')
    })

    it('should handle edge cases', () => {
      expect(initial('hello', 10)).toBe('')
      expect(initial('', 5)).toBe('')
    })
  })

  describe('rest', () => {
    it('should return all but first n characters', () => {
      expect(rest('hello', 2)).toBe('llo')
      expect(rest('hello', 1)).toBe('ello')
    })

    it('should default to 1', () => {
      expect(rest('hello')).toBe('ello')
    })

    it('should handle edge cases', () => {
      expect(rest('hello', 10)).toBe('')
      expect(rest('', 5)).toBe('')
    })
  })

  describe('nth', () => {
    it('should return character at index', () => {
      expect(nth('hello', 0)).toBe('h')
      expect(nth('hello', 2)).toBe('l')
      expect(nth('hello', 4)).toBe('o')
    })

    it('should handle out of range', () => {
      expect(nth('hello', 10)).toBe('')
    })
  })
})
