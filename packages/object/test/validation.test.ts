import { describe, it, expect } from 'vitest'
import { isObject, isPlainObject, isEmpty } from '../src'

describe('object validation', () => {
  it('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
    expect(isObject([])).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject('string')).toBe(false)
  })

  it('isPlainObject', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject({ a: 1 })).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
  })

  it('isEmpty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty(0)).toBe(false)
  })
})
