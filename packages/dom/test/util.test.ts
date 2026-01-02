import { describe, it, expect } from 'vitest'
import { contains, isElement, isVisible } from '../src'

describe('util', () => {
  describe('contains', () => {
    it('should return true if parent contains child', () => {
      const parent = document.createElement('div')
      const child = document.createElement('div')
      parent.appendChild(child)
      
      expect(contains(parent, child)).toBe(true)
    })

    it('should return false if parent does not contain child', () => {
      const parent = document.createElement('div')
      const child = document.createElement('div')
      
      expect(contains(parent, child)).toBe(false)
    })

    it('should return true if element contains itself', () => {
      const el = document.createElement('div')
      
      expect(contains(el, el)).toBe(true)
    })
  })

  describe('isElement', () => {
    it('should return true for Element', () => {
      const el = document.createElement('div')
      expect(isElement(el)).toBe(true)
    })

    it('should return false for null', () => {
      expect(isElement(null)).toBe(false)
    })

    it('should return false for undefined', () => {
      expect(isElement(undefined)).toBe(false)
    })

    it('should return false for plain object', () => {
      expect(isElement({})).toBe(false)
    })

    it('should return false for string', () => {
      expect(isElement('div')).toBe(false)
    })

    it('should return false for number', () => {
      expect(isElement(123)).toBe(false)
    })

    it('should narrow type correctly', () => {
      const value: unknown = document.createElement('div')
      if (isElement(value)) {
        expect(value).toBeInstanceOf(Element)
      }
    })
  })

  describe('isVisible', () => {
    it('should return true for visible element', () => {
      const el = document.createElement('div')
      document.body.appendChild(el)
      
      expect(isVisible(el)).toBe(true)
      
      document.body.removeChild(el)
    })

    it('should return false for hidden element', () => {
      const el = document.createElement('div')
      el.style.display = 'none'
      document.body.appendChild(el)
      
      expect(isVisible(el)).toBe(false)
      
      document.body.removeChild(el)
    })

    it('should return false for element with visibility hidden', () => {
      const el = document.createElement('div')
      el.style.visibility = 'hidden'
      document.body.appendChild(el)
      
      expect(isVisible(el)).toBe(false)
      
      document.body.removeChild(el)
    })

    it('should return false for element not in DOM', () => {
      const el = document.createElement('div')
      
      expect(isVisible(el)).toBe(false)
    })
  })
})
