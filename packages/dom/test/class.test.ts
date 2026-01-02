import { describe, it, expect } from 'vitest'
import { addClass, removeClass, toggleClass, hasClass } from '../src'

describe('class', () => {
  it('addClass should add single class', () => {
    const el = document.createElement('div')
    addClass(el, 'test')
    expect(el.classList.contains('test')).toBe(true)
  })

  it('addClass should add multiple classes', () => {
    const el = document.createElement('div')
    addClass(el, 'test1', 'test2', 'test3')
    expect(el.classList.contains('test1')).toBe(true)
    expect(el.classList.contains('test2')).toBe(true)
    expect(el.classList.contains('test3')).toBe(true)
  })

  it('removeClass should remove single class', () => {
    const el = document.createElement('div')
    el.className = 'test1 test2'
    removeClass(el, 'test1')
    expect(el.classList.contains('test1')).toBe(false)
    expect(el.classList.contains('test2')).toBe(true)
  })

  it('removeClass should remove multiple classes', () => {
    const el = document.createElement('div')
    el.className = 'test1 test2 test3'
    removeClass(el, 'test1', 'test2')
    expect(el.classList.contains('test1')).toBe(false)
    expect(el.classList.contains('test2')).toBe(false)
    expect(el.classList.contains('test3')).toBe(true)
  })

  it('toggleClass should toggle class', () => {
    const el = document.createElement('div')
    el.className = 'test'
    expect(toggleClass(el, 'test')).toBe(false)
    expect(el.classList.contains('test')).toBe(false)
    expect(toggleClass(el, 'test')).toBe(true)
    expect(el.classList.contains('test')).toBe(true)
  })

  it('toggleClass should force add class', () => {
    const el = document.createElement('div')
    const result = toggleClass(el, 'test', true)
    expect(result).toBe(true)
    expect(el.classList.contains('test')).toBe(true)
  })

  it('toggleClass should force remove class', () => {
    const el = document.createElement('div')
    el.className = 'test'
    const result = toggleClass(el, 'test', false)
    expect(result).toBe(false)
    expect(el.classList.contains('test')).toBe(false)
  })

  it('hasClass should return true if class exists', () => {
    const el = document.createElement('div')
    el.className = 'test1 test2'
    expect(hasClass(el, 'test1')).toBe(true)
    expect(hasClass(el, 'test2')).toBe(true)
  })

  it('hasClass should return false if class does not exist', () => {
    const el = document.createElement('div')
    el.className = 'test1'
    expect(hasClass(el, 'test2')).toBe(false)
  })
})
