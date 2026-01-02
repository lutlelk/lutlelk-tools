import { describe, it, expect, vi } from 'vitest'
import { on, off, once } from '../src'

describe('event', () => {
  it('on should add event listener', () => {
    const el = document.createElement('div')
    const handler = vi.fn()
    
    on(el, 'click', handler)
    el.click()
    
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('on should add event listener to window', () => {
    const handler = vi.fn()
    
    on(window, 'resize', handler)
    window.dispatchEvent(new Event('resize'))
    
    expect(handler).toHaveBeenCalledTimes(1)
    
    off(window, 'resize', handler)
  })

  it('off should remove event listener', () => {
    const el = document.createElement('div')
    const handler = vi.fn()
    
    on(el, 'click', handler)
    off(el, 'click', handler)
    el.click()
    
    expect(handler).not.toHaveBeenCalled()
  })

  it('once should add event listener that fires only once', () => {
    const el = document.createElement('div')
    const handler = vi.fn()
    
    once(el, 'click', handler)
    el.click()
    el.click()
    el.click()
    
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('once should work with window events', () => {
    const handler = vi.fn()
    
    once(window, 'resize', handler)
    window.dispatchEvent(new Event('resize'))
    window.dispatchEvent(new Event('resize'))
    
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('once should pass correct event to handler', () => {
    const el = document.createElement('div')
    const handler = vi.fn()
    
    once(el, 'click', handler)
    el.click()
    
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent))
  })
})
