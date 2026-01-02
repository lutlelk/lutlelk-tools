import { describe, it, expect } from 'vitest'
import {
  escape,
  unescape,
  escapeRegExp,
  stripTags,
  stripHtml,
  encodeBase64,
  decodeBase64,
  encodeURI,
  decodeURI,
  toString
} from '../src'

describe('string encoding/decoding', () => {
  describe('escape', () => {
    it('should escape HTML entities', () => {
      expect(escape('<div>')).toBe('&lt;div&gt;')
      expect(escape('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')
      expect(escape('a & b')).toBe('a &amp; b')
      expect(escape("it's")).toBe('it&#39;s')
    })

    it('should handle edge cases', () => {
      expect(escape('')).toBe('')
      expect(escape('hello')).toBe('hello')
    })
  })

  describe('unescape', () => {
    it('should unescape HTML entities', () => {
      expect(unescape('&lt;div&gt;')).toBe('<div>')
      expect(unescape('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;')).toBe('<script>alert("xss")</script>')
      expect(unescape('a &amp; b')).toBe('a & b')
      expect(unescape('it&#39;s')).toBe("it's")
    })

    it('should handle edge cases', () => {
      expect(unescape('')).toBe('')
      expect(unescape('hello')).toBe('hello')
    })
  })

  describe('escapeRegExp', () => {
    it('should escape special regex characters', () => {
      expect(escapeRegExp('hello.world')).toBe('hello\\.world')
      expect(escapeRegExp('hello*world')).toBe('hello\\*world')
      expect(escapeRegExp('hello+world')).toBe('hello\\+world')
      expect(escapeRegExp('hello?world')).toBe('hello\\?world')
      expect(escapeRegExp('hello^world')).toBe('hello\\^world')
      expect(escapeRegExp('hello$world')).toBe('hello\\$world')
      expect(escapeRegExp('hello|world')).toBe('hello\\|world')
      expect(escapeRegExp('hello\\world')).toBe('hello\\\\world')
      expect(escapeRegExp('hello(world)')).toBe('hello\\(world\\)')
      expect(escapeRegExp('hello[world]')).toBe('hello\\[world\\]')
      expect(escapeRegExp('hello{world}')).toBe('hello\\{world\\}')
    })

    it('should handle edge cases', () => {
      expect(escapeRegExp('')).toBe('')
      expect(escapeRegExp('hello')).toBe('hello')
    })
  })

  describe('stripTags', () => {
    it('should strip HTML tags', () => {
      expect(stripTags('<div>hello</div>')).toBe('hello')
      expect(stripTags('<p>hello <strong>world</strong></p>')).toBe('hello world')
      expect(stripTags('<div class="test">hello</div>')).toBe('hello')
    })

    it('should handle edge cases', () => {
      expect(stripTags('')).toBe('')
      expect(stripTags('hello')).toBe('hello')
    })
  })

  describe('stripHtml', () => {
    it('should strip HTML and entities', () => {
      expect(stripHtml('<div>hello</div>')).toBe('hello')
      expect(stripHtml('<p>hello &amp; world</p>')).toBe('hello & world')
      expect(stripHtml('<div>hello&nbsp;world</div>')).toBe('hello world')
      expect(stripHtml('<p>hello &lt;world&gt;</p>')).toBe('hello <world>')
    })

    it('should handle edge cases', () => {
      expect(stripHtml('')).toBe('')
      expect(stripHtml('hello')).toBe('hello')
    })
  })

  describe('encodeBase64', () => {
    it('should encode to base64', () => {
      expect(encodeBase64('hello')).toBe('aGVsbG8=')
      expect(encodeBase64('hello world')).toBe('aGVsbG8gd29ybGQ=')
      expect(encodeBase64('')).toBe('')
    })

    it('should encode special characters', () => {
      expect(encodeBase64('你好')).not.toBe('')
      expect(encodeBase64('🎉')).not.toBe('')
    })
  })

  describe('decodeBase64', () => {
    it('should decode from base64', () => {
      expect(decodeBase64('aGVsbG8=')).toBe('hello')
      expect(decodeBase64('aGVsbG8gd29ybGQ=')).toBe('hello world')
      expect(decodeBase64('')).toBe('')
    })

    it('should roundtrip correctly', () => {
      const original = 'hello world'
      const encoded = encodeBase64(original)
      const decoded = decodeBase64(encoded)
      expect(decoded).toBe(original)
    })
  })

  describe('encodeURI', () => {
    it('should encode URI component', () => {
      expect(encodeURI('hello world')).toBe('hello%20world')
      expect(encodeURI('hello/world')).toBe('hello%2Fworld')
      expect(encodeURI('hello?query=value')).toBe('hello%3Fquery%3Dvalue')
    })

    it('should handle special characters', () => {
      expect(encodeURI('你好')).not.toBe('你好')
      expect(encodeURI('🎉')).not.toBe('🎉')
    })
  })

  describe('decodeURI', () => {
    it('should decode URI component', () => {
      expect(decodeURI('hello%20world')).toBe('hello world')
      expect(decodeURI('hello%2Fworld')).toBe('hello/world')
      expect(decodeURI('hello%3Fquery%3Dvalue')).toBe('hello?query=value')
    })

    it('should roundtrip correctly', () => {
      const original = 'hello world?test=value'
      const encoded = encodeURI(original)
      const decoded = decodeURI(encoded)
      expect(decoded).toBe(original)
    })
  })

  describe('toString', () => {
    it('should convert to string', () => {
      expect(toString('hello')).toBe('hello')
      expect(toString(123)).toBe('123')
      expect(toString(true)).toBe('true')
      expect(toString(false)).toBe('false')
    })

    it('should handle null and undefined', () => {
      expect(toString(null)).toBe('')
      expect(toString(undefined)).toBe('')
    })

    it('should handle numbers', () => {
      expect(toString(0)).toBe('0')
      expect(toString(-123)).toBe('-123')
      expect(toString(123.45)).toBe('123.45')
    })
  })
})
