import { describe, it, expect } from 'vitest'
import { getAttr, setAttr, removeAttr } from '../src'

describe('attr', () => {
  it('getAttr should return attribute value', () => {
    const el = document.createElement('div')
    el.setAttribute('id', 'test')
    expect(getAttr(el, 'id')).toBe('test')
  })

  it('getAttr should return null if attribute does not exist', () => {
    const el = document.createElement('div')
    expect(getAttr(el, 'id')).toBeNull()
  })

  it('setAttr should set attribute value', () => {
    const el = document.createElement('div')
    setAttr(el, 'id', 'test')
    expect(el.getAttribute('id')).toBe('test')
  })

  it('setAttr should update existing attribute', () => {
    const el = document.createElement('div')
    el.setAttribute('id', 'test1')
    setAttr(el, 'id', 'test2')
    expect(el.getAttribute('id')).toBe('test2')
  })

  it('removeAttr should remove attribute', () => {
    const el = document.createElement('div')
    el.setAttribute('id', 'test')
    removeAttr(el, 'id')
    expect(el.getAttribute('id')).toBeNull()
  })

  it('removeAttr should handle non-existent attribute', () => {
    const el = document.createElement('div')
    expect(() => removeAttr(el, 'id')).not.toThrow()
  })
})
