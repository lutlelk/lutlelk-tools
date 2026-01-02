import { describe, it, expect } from 'vitest'
import {
  trim,
  trimStart,
  trimEnd,
  truncate,
  pad,
  padStart,
  padEnd,
  repeat,
  replace,
  replaceAll,
  dedent,
  indent,
  wrap
} from '../src'

describe('string formatting', () => {
  describe('trim', () => {
    it('should trim whitespace', () => {
      expect(trim('  hello  ')).toBe('hello')
      expect(trim('  hello')).toBe('hello')
      expect(trim('hello  ')).toBe('hello')
    })

    it('should trim custom characters', () => {
      expect(trim('---hello---', '-')).toBe('hello')
      expect(trim('***hello***', '*')).toBe('hello')
      expect(trim('xxxhelloxxx', 'x')).toBe('hello')
    })

    it('should handle edge cases', () => {
      expect(trim('')).toBe('')
      expect(trim('hello')).toBe('hello')
    })
  })

  describe('trimStart', () => {
    it('should trim start whitespace', () => {
      expect(trimStart('  hello  ')).toBe('hello  ')
      expect(trimStart('  hello')).toBe('hello')
    })

    it('should trim start custom characters', () => {
      expect(trimStart('---hello---', '-')).toBe('hello---')
      expect(trimStart('***hello', '*')).toBe('hello')
    })
  })

  describe('trimEnd', () => {
    it('should trim end whitespace', () => {
      expect(trimEnd('  hello  ')).toBe('  hello')
      expect(trimEnd('hello  ')).toBe('hello')
    })

    it('should trim end custom characters', () => {
      expect(trimEnd('---hello---', '-')).toBe('---hello')
      expect(trimEnd('hello***', '*')).toBe('hello')
    })
  })

  describe('truncate', () => {
    it('should truncate string', () => {
      expect(truncate('hello world', 5)).toBe('he...')
      expect(truncate('hello world', 8)).toBe('hello...')
      expect(truncate('hello world', 11)).toBe('hello world')
    })

    it('should use custom omission', () => {
      expect(truncate('hello world', 8, '***')).toBe('hello***')
      expect(truncate('hello world', 5, '..')).toBe('hel..')
    })

    it('should handle edge cases', () => {
      expect(truncate('hello', 10)).toBe('hello')
      expect(truncate('', 5)).toBe('')
    })
  })

  describe('pad', () => {
    it('should pad string', () => {
      expect(pad('hello', 10)).toBe('  hello   ')
      expect(pad('hello', 6)).toBe('hello ')
    })

    it('should pad with custom character', () => {
      expect(pad('hello', 10, '*')).toBe('**hello***')
      expect(pad('hello', 6, '-')).toBe('hello-')
    })
  })

  describe('padStart', () => {
    it('should pad start', () => {
      expect(padStart('hello', 10)).toBe('     hello')
      expect(padStart('hello', 6)).toBe(' hello')
    })

    it('should pad start with custom character', () => {
      expect(padStart('hello', 10, '*')).toBe('*****hello')
      expect(padStart('hello', 6, '-')).toBe('-hello')
    })
  })

  describe('padEnd', () => {
    it('should pad end', () => {
      expect(padEnd('hello', 10)).toBe('hello     ')
      expect(padEnd('hello', 6)).toBe('hello ')
    })

    it('should pad end with custom character', () => {
      expect(padEnd('hello', 10, '*')).toBe('hello*****')
      expect(padEnd('hello', 6, '-')).toBe('hello-')
    })
  })

  describe('repeat', () => {
    it('should repeat string', () => {
      expect(repeat('hello', 3)).toBe('hellohellohello')
      expect(repeat('ab', 2)).toBe('abab')
    })

    it('should handle edge cases', () => {
      expect(repeat('hello', 0)).toBe('')
      expect(repeat('hello', 1)).toBe('hello')
    })
  })

  describe('replace', () => {
    it('should replace first occurrence', () => {
      expect(replace('hello world', 'world', 'there')).toBe('hello there')
      expect(replace('hello hello', 'hello', 'hi')).toBe('hi hello')
    })

    it('should replace with regex', () => {
      expect(replace('hello world', /l/g, 'x')).toBe('hexxo worxd')
      expect(replace('hello world', /\s+/, '-')).toBe('hello-world')
    })
  })

  describe('replaceAll', () => {
    it('should replace all occurrences', () => {
      expect(replaceAll('hello hello', 'hello', 'hi')).toBe('hi hi')
      expect(replaceAll('a-b-c', '-', '_')).toBe('a_b_c')
    })

    it('should replace all with regex', () => {
      expect(replaceAll('hello world', /l/g, 'x')).toBe('hexxo worxd')
    })
  })

  describe('dedent', () => {
    it('should remove indentation', () => {
      expect(dedent('  hello\n  world')).toBe('hello\nworld')
      expect(dedent('    hello\n    world')).toBe('hello\nworld')
    })

    it('should handle mixed indentation', () => {
      expect(dedent('  hello\n    world')).toBe('hello\n  world')
    })

    it('should handle edge cases', () => {
      expect(dedent('hello')).toBe('hello')
      expect(dedent('')).toBe('')
    })
  })

  describe('indent', () => {
    it('should add indentation', () => {
      expect(indent('hello\nworld', '  ')).toBe('  hello\n  world')
      expect(indent('hello\nworld', '  ', 2)).toBe('    hello\n    world')
    })

    it('should handle edge cases', () => {
      expect(indent('hello', '  ')).toBe('  hello')
      expect(indent('', '  ')).toBe('')
    })
  })

  describe('wrap', () => {
    it('should wrap text', () => {
      expect(wrap('hello world', 10)).toBe('hello\nworld')
      expect(wrap('hello world test', 10)).toBe('hello\nworld test')
    })

    it('should use custom separator', () => {
      expect(wrap('hello world', 10, '<br>')).toBe('hello<br>world')
    })

    it('should handle edge cases', () => {
      expect(wrap('hello', 10)).toBe('hello')
      expect(wrap('', 10)).toBe('')
    })
  })
})
