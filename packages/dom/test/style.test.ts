import { describe, it, expect } from 'vitest'
import { getStyle, setStyle } from '../src'

describe('style', () => {
  it('getStyle should return computed style value', () => {
    const el = document.createElement('div')
    el.style.color = 'red'
    document.body.appendChild(el)
    
    const result = getStyle(el, 'color')
    expect(result).toBeTruthy()
    
    document.body.removeChild(el)
  })

  it('setStyle should set style value', () => {
    const el = document.createElement('div')
    setStyle(el, 'color', 'red')
    expect(el.style.color).toBe('red')
  })

  it('setStyle should update existing style', () => {
    const el = document.createElement('div')
    el.style.color = 'red'
    setStyle(el, 'color', 'blue')
    expect(el.style.color).toBe('blue')
  })

  it('setStyle should set multiple styles', () => {
    const el = document.createElement('div')
    setStyle(el, 'color', 'red')
    setStyle(el, 'background', 'blue')
    expect(el.style.color).toBe('red')
    expect(el.style.background).toBe('blue')
  })
})
