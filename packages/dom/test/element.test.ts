import { describe, it, expect } from 'vitest'
import { createElement, remove, insertBefore, insertAfter } from '../src'

describe('element', () => {
  it('createElement should create element with tag name', () => {
    const el = createElement('div')
    expect(el.tagName).toBe('DIV')
  })

  it('createElement should create element with attributes', () => {
    const el = createElement('a', {
      attributes: { href: '#', target: '_blank' }
    })
    expect(el.getAttribute('href')).toBe('#')
    expect(el.getAttribute('target')).toBe('_blank')
  })

  it('createElement should create element with className', () => {
    const el = createElement('div', { className: 'test-class' })
    expect(el.className).toBe('test-class')
  })

  it('createElement should create element with innerHTML', () => {
    const el = createElement('div', { innerHTML: '<span>content</span>' })
    expect(el.innerHTML).toBe('<span>content</span>')
  })

  it('createElement should create element with textContent', () => {
    const el = createElement('div', { textContent: 'Hello World' })
    expect(el.textContent).toBe('Hello World')
  })

  it('createElement should create element with all options', () => {
    const el = createElement('div', {
      attributes: { id: 'test' },
      className: 'class1 class2',
      innerHTML: '<span>content</span>'
    })
    expect(el.getAttribute('id')).toBe('test')
    expect(el.className).toBe('class1 class2')
    expect(el.innerHTML).toBe('<span>content</span>')
  })

  it('remove should remove element from DOM', () => {
    const parent = document.createElement('div')
    const child = document.createElement('div')
    parent.appendChild(child)
    document.body.appendChild(parent)
    
    expect(child.parentNode).toBe(parent)
    remove(child)
    expect(child.parentNode).toBeNull()
    
    document.body.removeChild(parent)
  })

  it('insertBefore should insert element before reference', () => {
    const parent = document.createElement('div')
    const ref = document.createElement('div')
    const newEl = document.createElement('div')
    parent.appendChild(ref)
    
    insertBefore(newEl, ref)
    expect(parent.firstChild).toBe(newEl)
    expect(newEl.nextSibling).toBe(ref)
  })

  it('insertAfter should insert element after reference', () => {
    const parent = document.createElement('div')
    const ref = document.createElement('div')
    const newEl = document.createElement('div')
    parent.appendChild(ref)
    
    insertAfter(newEl, ref)
    expect(ref.nextSibling).toBe(newEl)
    expect(parent.lastChild).toBe(newEl)
  })

  it('insertAfter should insert as last child if reference is last', () => {
    const parent = document.createElement('div')
    const ref = document.createElement('div')
    const newEl = document.createElement('div')
    parent.appendChild(ref)
    
    insertAfter(newEl, ref)
    expect(parent.lastChild).toBe(newEl)
  })
})
