import { expectType } from 'tsd'
import { $, $$, addClass, removeClass, toggleClass, hasClass, getAttr, setAttr, removeAttr, getStyle, setStyle, createElement, remove, insertBefore, insertAfter, on, off, once, contains, isElement, isVisible } from '../src'

// Test selector functions
expectType<Element | null>($('.test'))
expectType<Element | null>($('.test', document.body))
expectType<Element[]>($$('.test'))
expectType<Element[]>($$('.test', document.body))

// Test class functions
const el = document.createElement('div')
addClass(el, 'class1', 'class2')
removeClass(el, 'class1')
expectType<boolean>(toggleClass(el, 'class2'))
expectType<boolean>(toggleClass(el, 'class2', true))
expectType<boolean>(hasClass(el, 'class1'))

// Test attribute functions
expectType<string | null>(getAttr(el, 'id'))
setAttr(el, 'id', 'test')
removeAttr(el, 'id')

// Test style functions
const htmlEl = document.createElement('div')
expectType<string>(getStyle(htmlEl, 'color'))
setStyle(htmlEl, 'color', 'red')

// Test element functions
expectType<HTMLDivElement>(createElement('div'))
expectType<HTMLAnchorElement>(createElement('a', { attributes: { href: '#' }, className: 'link' }))
expectType<HTMLButtonElement>(createElement('button', { textContent: 'Click' }))
expectType<HTMLSpanElement>(createElement('span', { innerHTML: '<b>bold</b>' }))
remove(el)
insertBefore(el, document.body)
insertAfter(el, document.body)

// Test event functions
on(window, 'resize', (e) => expectType<UIEvent>(e))
on(document, 'keydown', (e) => expectType<KeyboardEvent>(e))
on(htmlEl, 'click', (e) => expectType<PointerEvent>(e))
off(window, 'resize', () => {})
once(htmlEl, 'click', (e) => expectType<PointerEvent>(e))

// Test util functions
expectType<boolean>(contains(document.body, el))
expectType<boolean>(isElement(el))
expectType<boolean>(isElement(null))
expectType<boolean>(isElement({}))
expectType<boolean>(isVisible(htmlEl))
