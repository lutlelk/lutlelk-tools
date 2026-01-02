import { describe, it, expect } from 'vitest'
import {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNil,
  isFunction,
  isArray,
  isObject,
  isPlainObject,
  isEmpty,
  noop,
  identity,
  times,
  toString,
  toNumber,
  toBoolean,
  isStrictEqual
} from '../src'

describe('type checking functions', () => {
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true)
      expect(isString('')).toBe(true)
    })

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false)
      expect(isString(null)).toBe(false)
      expect(isString(undefined)).toBe(false)
      expect(isString({})).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('should return true for numbers', () => {
      expect(isNumber(123)).toBe(true)
      expect(isNumber(0)).toBe(true)
      expect(isNumber(-1)).toBe(true)
      expect(isNumber(1.5)).toBe(true)
    })

    it('should return false for NaN', () => {
      expect(isNumber(NaN)).toBe(false)
    })

    it('should return false for non-numbers', () => {
      expect(isNumber('123')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(undefined)).toBe(false)
    })
  })

  describe('isBoolean', () => {
    it('should return true for booleans', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
    })

    it('should return false for non-booleans', () => {
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean(0)).toBe(false)
      expect(isBoolean('true')).toBe(false)
    })
  })

  describe('isNull', () => {
    it('should return true for null', () => {
      expect(isNull(null)).toBe(true)
    })

    it('should return false for non-null', () => {
      expect(isNull(undefined)).toBe(false)
      expect(isNull(0)).toBe(false)
      expect(isNull('')).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    it('should return false for non-undefined', () => {
      expect(isUndefined(null)).toBe(false)
      expect(isUndefined(0)).toBe(false)
      expect(isUndefined('')).toBe(false)
    })
  })

  describe('isNil', () => {
    it('should return true for null or undefined', () => {
      expect(isNil(null)).toBe(true)
      expect(isNil(undefined)).toBe(true)
    })

    it('should return false for non-nil values', () => {
      expect(isNil(0)).toBe(false)
      expect(isNil('')).toBe(false)
      expect(isNil(false)).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(function () {})).toBe(true)
      expect(isFunction(noop)).toBe(true)
    })

    it('should return false for non-functions', () => {
      expect(isFunction({})).toBe(false)
      expect(isFunction('function')).toBe(false)
    })
  })

  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
    })

    it('should return false for non-arrays', () => {
      expect(isArray({})).toBe(false)
      expect(isArray('array')).toBe(false)
    })
  })

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 1 })).toBe(true)
    })

    it('should return false for non-objects', () => {
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
      expect(isObject('object')).toBe(false)
    })
  })

  describe('isPlainObject', () => {
    it('should return true for plain objects', () => {
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject({ a: 1 })).toBe(true)
    })

    it('should return false for non-plain objects', () => {
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(null)).toBe(false)
      expect(isPlainObject(new Date())).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(isEmpty(null)).toBe(true)
      expect(isEmpty(undefined)).toBe(true)
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)
    })

    it('should return false for non-empty values', () => {
      expect(isEmpty('hello')).toBe(false)
      expect(isEmpty([1])).toBe(false)
      expect(isEmpty({ a: 1 })).toBe(false)
      expect(isEmpty(0)).toBe(false)
      expect(isEmpty(false)).toBe(false)
    })
  })
})

describe('utility functions', () => {
  describe('noop', () => {
    it('should be a function that does nothing', () => {
      expect(typeof noop).toBe('function')
      expect(noop()).toBeUndefined()
    })
  })

  describe('identity', () => {
    it('should return first argument', () => {
      expect(identity(1)).toBe(1)
      expect(identity('hello')).toBe('hello')
      expect(identity(null)).toBe(null)
    })
  })

  describe('times', () => {
    it('should call function n times', () => {
      const result = times(3, i => i * 2)
      expect(result).toEqual([0, 2, 4])
    })

    it('should return empty array for n = 0', () => {
      expect(times(0, () => 1)).toEqual([])
    })
  })
})

describe('type conversion functions', () => {
  describe('toString', () => {
    it('should convert values to string', () => {
      expect(toString(123)).toBe('123')
      expect(toString(true)).toBe('true')
      expect(toString(false)).toBe('false')
      expect(toString(null)).toBe('')
      expect(toString(undefined)).toBe('')
      expect(toString({ a: 1 })).toBe('{"a":1}')
    })

    it('should return string as is', () => {
      expect(toString('hello')).toBe('hello')
    })
  })

  describe('toNumber', () => {
    it('should convert values to number', () => {
      expect(toNumber('123')).toBe(123)
      expect(toNumber('12.5')).toBe(12.5)
      expect(toNumber(true)).toBe(1)
      expect(toNumber(false)).toBe(0)
    })

    it('should return 0 for invalid values', () => {
      expect(toNumber('abc')).toBe(0)
      expect(toNumber(null)).toBe(0)
      expect(toNumber(undefined)).toBe(0)
    })

    it('should return number as is', () => {
      expect(toNumber(123)).toBe(123)
    })
  })

  describe('toBoolean', () => {
    it('should convert values to boolean', () => {
      expect(toBoolean('true')).toBe(true)
      expect(toBoolean('1')).toBe(true)
      expect(toBoolean('hello')).toBe(true)
      expect(toBoolean(1)).toBe(true)
      expect(toBoolean(-1)).toBe(true)
      expect(toBoolean({})).toBe(true)
      expect(toBoolean([])).toBe(true)
    })

    it('should convert falsy values to false', () => {
      expect(toBoolean('false')).toBe(false)
      expect(toBoolean('0')).toBe(false)
      expect(toBoolean('')).toBe(false)
      expect(toBoolean(0)).toBe(false)
      expect(toBoolean(NaN)).toBe(false)
      expect(toBoolean(null)).toBe(false)
      expect(toBoolean(undefined)).toBe(false)
    })

    it('should return boolean as is', () => {
      expect(toBoolean(true)).toBe(true)
      expect(toBoolean(false)).toBe(false)
    })
  })
})

describe('comparison functions', () => {
  describe('isStrictEqual', () => {
    it('should use strict equality', () => {
      expect(isStrictEqual(1, 1)).toBe(true)
      expect(isStrictEqual('hello', 'hello')).toBe(true)
      expect(isStrictEqual(1, '1')).toBe(false)
      expect(isStrictEqual(null, undefined)).toBe(false)
    })
  })
})
