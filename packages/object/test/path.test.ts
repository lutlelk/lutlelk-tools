import { describe, it, expect } from 'vitest'
import { get, set, has, unset } from '../src'

describe('object path operations', () => {
  const obj = {
    a: 1,
    b: { c: 2, d: { e: 3 } }
  }

  it('get', () => {
    expect(get(obj, 'a')).toBe(1)
    expect(get(obj, 'b.c')).toBe(2)
    expect(get(obj, 'b.d.e')).toBe(3)
    expect(get(obj, 'b.d.f', 'default')).toBe('default')
    expect(get(obj, 'x.y.z', 'default')).toBe('default')
    expect(get(obj, ['b', 'd', 'e'])).toBe(3)
  })

  it('set', () => {
    const obj1 = { a: 1 }
    set(obj1, 'b', 2)
    expect(obj1).toEqual({ a: 1, b: 2 })

    const obj2 = { a: 1 }
    set(obj2, 'b.c', 3)
    expect(obj2).toEqual({ a: 1, b: { c: 3 } })

    const obj3 = { a: { b: 1 } }
    set(obj3, 'a.b', 2)
    expect(obj3).toEqual({ a: { b: 2 } })
  })

  it('has', () => {
    expect(has(obj, 'a')).toBe(true)
    expect(has(obj, 'b.c')).toBe(true)
    expect(has(obj, 'b.d.e')).toBe(true)
    expect(has(obj, 'b.d.f')).toBe(false)
    expect(has(obj, 'x.y.z')).toBe(false)
    expect(has(obj, ['b', 'd', 'e'])).toBe(true)
  })

  it('unset', () => {
    const obj1 = { a: 1, b: 2 }
    expect(unset(obj1, 'a')).toBe(true)
    expect(obj1).toEqual({ b: 2 })
    expect(unset(obj1, 'c')).toBe(false)

    const obj2 = { a: { b: { c: 1 } } }
    expect(unset(obj2, 'a.b.c')).toBe(true)
    expect(obj2).toEqual({ a: { b: {} } })
  })
})
