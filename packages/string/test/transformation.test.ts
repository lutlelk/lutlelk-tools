import { describe, it, expect } from 'vitest'
import {
  slice,
  substring,
  split,
  join,
  reverse,
  insert,
  remove,
  removeAll,
  before,
  after,
  between,
  words,
  chars,
  lines,
  template,
  interpolate,
  format,
  slugify,
  abbreviate,
  initials,
  shuffle,
  ensurePrefix,
  ensureSuffix,
  stripPrefix,
  stripSuffix
} from '../src'

describe('string transformation', () => {
  describe('slice', () => {
    it('should slice string', () => {
      expect(slice('hello', 1, 3)).toBe('el')
      expect(slice('hello', 1)).toBe('ello')
      expect(slice('hello', -3)).toBe('llo')
    })

    it('should handle edge cases', () => {
      expect(slice('hello', 0, 5)).toBe('hello')
      expect(slice('', 0, 5)).toBe('')
    })
  })

  describe('substring', () => {
    it('should get substring', () => {
      expect(substring('hello', 1, 3)).toBe('el')
      expect(substring('hello', 1)).toBe('ello')
    })

    it('should handle edge cases', () => {
      expect(substring('hello', 0, 5)).toBe('hello')
      expect(substring('', 0, 5)).toBe('')
    })
  })

  describe('split', () => {
    it('should split string', () => {
      expect(split('hello world', ' ')).toEqual(['hello', 'world'])
      expect(split('a,b,c', ',')).toEqual(['a', 'b', 'c'])
    })

    it('should support limit parameter', () => {
      expect(split('a,b,c', ',', 2)).toEqual(['a', 'b'])
    })

    it('should support regex separator', () => {
      expect(split('hello  world', /\s+/)).toEqual(['hello', 'world'])
    })
  })

  describe('join', () => {
    it('should join strings', () => {
      expect(join(['hello', 'world'], ' ')).toBe('hello world')
      expect(join(['a', 'b', 'c'], ',')).toBe('a,b,c')
    })

    it('should default to empty separator', () => {
      expect(join(['a', 'b', 'c'])).toBe('abc')
    })
  })

  describe('reverse', () => {
    it('should reverse string', () => {
      expect(reverse('hello')).toBe('olleh')
      expect(reverse('world')).toBe('dlrow')
    })

    it('should handle edge cases', () => {
      expect(reverse('')).toBe('')
      expect(reverse('a')).toBe('a')
    })
  })

  describe('insert', () => {
    it('should insert substring', () => {
      expect(insert('hello', 2, 'xx')).toBe('hexxllo')
      expect(insert('hello', 0, 'xx')).toBe('xxhello')
      expect(insert('hello', 5, 'xx')).toBe('helloxx')
    })
  })

  describe('remove', () => {
    it('should remove first occurrence', () => {
      expect(remove('hello world', 'world')).toBe('hello ')
      expect(remove('hello hello', 'hello')).toBe(' hello')
    })

    it('should support regex', () => {
      expect(remove('hello world', /\s+/)).toBe('helloworld')
    })
  })

  describe('removeAll', () => {
    it('should remove all occurrences', () => {
      expect(removeAll('hello hello', 'hello')).toBe(' ')
      expect(removeAll('a-b-c', '-')).toBe('abc')
    })

    it('should support regex', () => {
      expect(removeAll('hello world', /l/g)).toBe('heo word')
    })
  })

  describe('before', () => {
    it('should get string before search', () => {
      expect(before('hello world', 'world')).toBe('hello ')
      expect(before('hello world', ' ')).toBe('hello')
    })

    it('should return original if not found', () => {
      expect(before('hello world', 'test')).toBe('hello world')
    })
  })

  describe('after', () => {
    it('should get string after search', () => {
      expect(after('hello world', 'hello ')).toBe('world')
      expect(after('hello world', 'hello')).toBe(' world')
    })

    it('should return empty if not found', () => {
      expect(after('hello world', 'test')).toBe('')
    })
  })

  describe('between', () => {
    it('should get string between start and end', () => {
      expect(between('hello [world]', '[', ']')).toBe('world')
      expect(between('start middle end', 'start ', ' end')).toBe('middle')
    })

    it('should return empty if not found', () => {
      expect(between('hello world', '[', ']')).toBe('')
    })
  })

  describe('words', () => {
    it('should extract words', () => {
      expect(words('hello world')).toEqual(['hello', 'world'])
      expect(words('hello world test')).toEqual(['hello', 'world', 'test'])
    })

    it('should support custom pattern', () => {
      expect(words('a1b2c3', /\d+/g)).toEqual(['1', '2', '3'])
    })

    it('should handle edge cases', () => {
      expect(words('')).toEqual([])
      expect(words('123')).toEqual(['123'])
    })
  })

  describe('chars', () => {
    it('should split into characters', () => {
      expect(chars('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
    })

    it('should handle edge cases', () => {
      expect(chars('')).toEqual([])
    })
  })

  describe('lines', () => {
    it('should split into lines', () => {
      expect(lines('hello\nworld')).toEqual(['hello', 'world'])
      expect(lines('hello\r\nworld')).toEqual(['hello', 'world'])
    })

    it('should handle edge cases', () => {
      expect(lines('')).toEqual([''])
    })
  })

  describe('template', () => {
    it('should replace template variables', () => {
      expect(template('Hello {{name}}', { name: 'World' })).toBe('Hello World')
      expect(template('{{greeting}} {{name}}', { greeting: 'Hello', name: 'World' })).toBe('Hello World')
    })

    it('should handle missing variables', () => {
      expect(template('Hello {{name}}', {})).toBe('Hello ')
    })
  })

  describe('interpolate', () => {
    it('should replace interpolated variables', () => {
      expect(interpolate('Hello ${name}', { name: 'World' })).toBe('Hello World')
      expect(interpolate('${greeting} ${name}', { greeting: 'Hello', name: 'World' })).toBe('Hello World')
    })

    it('should handle missing variables', () => {
      expect(interpolate('Hello ${name}', {})).toBe('Hello ')
    })
  })

  describe('format', () => {
    it('should format string with arguments', () => {
      expect(format('Hello {0}', 'World')).toBe('Hello World')
      expect(format('{0} {1}', 'Hello', 'World')).toBe('Hello World')
      expect(format('{0} {1} {0}', 'Hello', 'World')).toBe('Hello World Hello')
    })
  })

  describe('slugify', () => {
    it('should create slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world')
      expect(slugify('Hello   World')).toBe('hello-world')
      expect(slugify('Hello_World')).toBe('hello-world')
    })

    it('should handle edge cases', () => {
      expect(slugify('')).toBe('')
      expect(slugify('hello')).toBe('hello')
    })
  })

  describe('abbreviate', () => {
    it('should abbreviate string', () => {
      expect(abbreviate('hello world', 5)).toBe('hello.')
      expect(abbreviate('hello world', 8)).toBe('hello wo.')
    })

    it('should not shorten if within length', () => {
      expect(abbreviate('hello', 10)).toBe('hello')
    })
  })

  describe('initials', () => {
    it('should get initials', () => {
      expect(initials('hello world')).toBe('HW')
      expect(initials('hello world test')).toBe('HWT')
    })

    it('should handle single word', () => {
      expect(initials('hello')).toBe('H')
    })
  })

  describe('shuffle', () => {
    it('should shuffle string', () => {
      const result = shuffle('hello')
      expect(result.length).toBe(5)
      expect(result).not.toBe('hello')
    })

    it('should handle edge cases', () => {
      expect(shuffle('')).toBe('')
      expect(shuffle('a')).toBe('a')
    })
  })

  describe('ensurePrefix', () => {
    it('should ensure prefix exists', () => {
      expect(ensurePrefix('hello', 'pre-')).toBe('pre-hello')
      expect(ensurePrefix('pre-hello', 'pre-')).toBe('pre-hello')
    })
  })

  describe('ensureSuffix', () => {
    it('should ensure suffix exists', () => {
      expect(ensureSuffix('hello', '-suffix')).toBe('hello-suffix')
      expect(ensureSuffix('hello-suffix', '-suffix')).toBe('hello-suffix')
    })
  })

  describe('stripPrefix', () => {
    it('should strip prefix if exists', () => {
      expect(stripPrefix('pre-hello', 'pre-')).toBe('hello')
      expect(stripPrefix('hello', 'pre-')).toBe('hello')
    })
  })

  describe('stripSuffix', () => {
    it('should strip suffix if exists', () => {
      expect(stripSuffix('hello-suffix', '-suffix')).toBe('hello')
      expect(stripSuffix('hello', '-suffix')).toBe('hello')
    })
  })
})
