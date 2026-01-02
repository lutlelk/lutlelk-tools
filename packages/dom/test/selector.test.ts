import { describe, it, expect } from 'vitest'
import { $, $$ } from '../src'

describe('selector', () => {
  it('$ should return single element', () => {
    const div = document.createElement('div')
    div.className = 'test'
    document.body.appendChild(div)
    
    const result = $('.test')
    expect(result).toBe(div)
    
    document.body.removeChild(div)
  })

  it('$ should return null if element not found', () => {
    const result = $('.non-existent')
    expect(result).toBeNull()
  })

  it('$ should work with custom context', () => {
    const parent = document.createElement('div')
    const child = document.createElement('div')
    child.className = 'test'
    parent.appendChild(child)
    
    const result = $('.test', parent)
    expect(result).toBe(child)
  })

  it('$$ should return array of elements', () => {
    const parent = document.createElement('div')
    const child1 = document.createElement('div')
    const child2 = document.createElement('div')
    child1.className = 'test'
    child2.className = 'test'
    parent.appendChild(child1)
    parent.appendChild(child2)
    document.body.appendChild(parent)
    
    const result = $$('.test')
    expect(result).toHaveLength(2)
    expect(result).toContain(child1)
    expect(result).toContain(child2)
    
    document.body.removeChild(parent)
  })

  it('$$ should return empty array if no elements found', () => {
    const result = $$('.non-existent')
    expect(result).toEqual([])
  })

  it('$$ should work with custom context', () => {
    const parent = document.createElement('div')
    const child1 = document.createElement('div')
    const child2 = document.createElement('div')
    child1.className = 'test'
    child2.className = 'test'
    parent.appendChild(child1)
    parent.appendChild(child2)
    
    const result = $$('.test', parent)
    expect(result).toHaveLength(2)
  })
})
