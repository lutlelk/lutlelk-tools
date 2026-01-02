import { describe, it, expect } from 'vitest'
import {
  toCamelCase,
  toPascalCase,
  toKebabCase,
  toSnakeCase,
  toCapitalCase,
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toTitleCase,
  capitalize,
  uncapitalize,
  swapCase
} from '../src'

describe('string conversion', () => {
  describe('toCamelCase', () => {
    it('should convert to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld')
      expect(toCamelCase('hello_world')).toBe('helloWorld')
      expect(toCamelCase('hello world')).toBe('helloWorld')
      expect(toCamelCase('HelloWorld')).toBe('helloWorld')
      expect(toCamelCase('Hello-World')).toBe('helloWorld')
    })

    it('should handle edge cases', () => {
      expect(toCamelCase('')).toBe('')
      expect(toCamelCase('hello')).toBe('hello')
      expect(toCamelCase('HELLO')).toBe('hELLO')
    })
  })

  describe('toPascalCase', () => {
    it('should convert to PascalCase', () => {
      expect(toPascalCase('hello-world')).toBe('HelloWorld')
      expect(toPascalCase('hello_world')).toBe('HelloWorld')
      expect(toPascalCase('hello world')).toBe('HelloWorld')
      expect(toPascalCase('helloWorld')).toBe('HelloWorld')
    })

    it('should handle edge cases', () => {
      expect(toPascalCase('')).toBe('')
      expect(toPascalCase('hello')).toBe('Hello')
    })
  })

  describe('toKebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
      expect(toKebabCase('HelloWorld')).toBe('hello-world')
      expect(toKebabCase('hello_world')).toBe('hello-world')
      expect(toKebabCase('Hello World')).toBe('hello-world')
    })

    it('should handle edge cases', () => {
      expect(toKebabCase('')).toBe('')
      expect(toKebabCase('hello')).toBe('hello')
    })
  })

  describe('toSnakeCase', () => {
    it('should convert to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world')
      expect(toSnakeCase('HelloWorld')).toBe('hello_world')
      expect(toSnakeCase('hello-world')).toBe('hello_world')
      expect(toSnakeCase('Hello World')).toBe('hello_world')
    })

    it('should handle edge cases', () => {
      expect(toSnakeCase('')).toBe('')
      expect(toSnakeCase('hello')).toBe('hello')
    })
  })

  describe('toCapitalCase', () => {
    it('should convert to Capital Case', () => {
      expect(toCapitalCase('hello-world')).toBe('Hello World')
      expect(toCapitalCase('hello_world')).toBe('Hello World')
      expect(toCapitalCase('helloWorld')).toBe('Hello World')
      expect(toCapitalCase('hello world')).toBe('Hello World')
    })

    it('should handle edge cases', () => {
      expect(toCapitalCase('')).toBe('')
      expect(toCapitalCase('hello')).toBe('Hello')
    })
  })

  describe('toSentenceCase', () => {
    it('should convert to sentence case', () => {
      expect(toSentenceCase('hello world')).toBe('Hello world')
      expect(toSentenceCase('HELLO WORLD')).toBe('Hello world')
      expect(toSentenceCase('hELLO wORLD')).toBe('Hello world')
    })

    it('should handle edge cases', () => {
      expect(toSentenceCase('')).toBe('')
      expect(toSentenceCase('hello')).toBe('Hello')
    })
  })

  describe('toLowerCase', () => {
    it('should convert to lowercase', () => {
      expect(toLowerCase('HELLO')).toBe('hello')
      expect(toLowerCase('HeLLo')).toBe('hello')
      expect(toLowerCase('Hello World')).toBe('hello world')
    })

    it('should handle edge cases', () => {
      expect(toLowerCase('')).toBe('')
      expect(toLowerCase('hello')).toBe('hello')
    })
  })

  describe('toUpperCase', () => {
    it('should convert to uppercase', () => {
      expect(toUpperCase('hello')).toBe('HELLO')
      expect(toUpperCase('HeLLo')).toBe('HELLO')
      expect(toUpperCase('Hello World')).toBe('HELLO WORLD')
    })

    it('should handle edge cases', () => {
      expect(toUpperCase('')).toBe('')
      expect(toUpperCase('HELLO')).toBe('HELLO')
    })
  })

  describe('toTitleCase', () => {
    it('should convert to title case', () => {
      expect(toTitleCase('hello world')).toBe('Hello World')
      expect(toTitleCase('HELLO WORLD')).toBe('Hello World')
      expect(toTitleCase('hello-world')).toBe('Hello-World')
    })

    it('should handle edge cases', () => {
      expect(toTitleCase('')).toBe('')
      expect(toTitleCase('hello')).toBe('Hello')
    })
  })

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('HELLO')).toBe('HELLO')
      expect(capitalize('hello world')).toBe('Hello world')
    })

    it('should handle edge cases', () => {
      expect(capitalize('')).toBe('')
      expect(capitalize('Hello')).toBe('Hello')
    })
  })

  describe('uncapitalize', () => {
    it('should uncapitalize first letter', () => {
      expect(uncapitalize('Hello')).toBe('hello')
      expect(uncapitalize('HELLO')).toBe('hELLO')
      expect(uncapitalize('Hello World')).toBe('hello World')
    })

    it('should handle edge cases', () => {
      expect(uncapitalize('')).toBe('')
      expect(uncapitalize('hello')).toBe('hello')
    })
  })

  describe('swapCase', () => {
    it('should swap case', () => {
      expect(swapCase('Hello')).toBe('hELLO')
      expect(swapCase('HELLO')).toBe('hello')
      expect(swapCase('hello')).toBe('HELLO')
      expect(swapCase('Hello World')).toBe('hELLO wORLD')
    })

    it('should handle edge cases', () => {
      expect(swapCase('')).toBe('')
      expect(swapCase('123')).toBe('123')
    })
  })
})
