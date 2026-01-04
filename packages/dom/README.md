# @lutlelk-tools/dom

A lightweight DOM manipulation utility library for JavaScript/TypeScript.

## Installation

```bash
npm install @lutlelk-tools/dom
# or
pnpm add @lutlelk-tools/dom
# or
yarn add @lutlelk-tools/dom
```

## Usage

```typescript
import { $, $$, addClass, on, createElement } from '@lutlelk-tools/dom'
```

## API

### Selector

#### `$(selector: string, context?: ParentNode): Element | null`

Select a single element using CSS selector.

```typescript
const el = $('.my-class')
const el2 = $('#my-id', container)
```

#### `$$(selector: string, context?: ParentNode): Element[]`

Select multiple elements using CSS selector.

```typescript
const els = $$('.my-class')
const els2 = $('div', container)
```

### Class Operations

#### `addClass(element: Element, ...classNames: string[]): void`

Add one or more class names to an element.

```typescript
addClass(el, 'class1', 'class2')
```

#### `removeClass(element: Element, ...classNames: string[]): void`

Remove one or more class names from an element.

```typescript
removeClass(el, 'class1', 'class2')
```

#### `toggleClass(element: Element, className: string, force?: boolean): boolean`

Toggle a class name on an element. Returns the new state.

```typescript
toggleClass(el, 'active')
toggleClass(el, 'active', true)  // force add
toggleClass(el, 'active', false) // force remove
```

#### `hasClass(element: Element, className: string): boolean`

Check if an element has a specific class.

```typescript
if (hasClass(el, 'active')) {
  // do something
}
```

### Attribute Operations

#### `getAttr(element: Element, name: string): string | null`

Get an attribute value from an element.

```typescript
const id = getAttr(el, 'id')
```

#### `setAttr(element: Element, name: string, value: string): void`

Set an attribute value on an element.

```typescript
setAttr(el, 'id', 'my-id')
```

#### `removeAttr(element: Element, name: string): void`

Remove an attribute from an element.

```typescript
removeAttr(el, 'id')
```

### Style Operations

#### `getStyle(element: HTMLElement, property: string): string`

Get the computed style value of an element.

```typescript
const color = getStyle(el, 'color')
```

#### `setStyle(element: HTMLElement, property: string, value: string): void`

Set a style property on an element.

```typescript
setStyle(el, 'color', 'red')
```

### Element Operations

#### `createElement<K>(tagName: K, options?): HTMLElementTagNameMap[K]`

Create a new HTML element with optional configuration.

```typescript
const div = createElement('div')
const link = createElement('a', {
  attributes: { href: '#', target: '_blank' },
  className: 'link'
})
const button = createElement('button', {
  textContent: 'Click me'
})
```

#### `remove(element: Element): void`

Remove an element from the DOM.

```typescript
remove(el)
```

#### `insertBefore(newNode: Node, referenceNode: Node): void`

Insert a node before a reference node.

```typescript
insertBefore(newEl, referenceEl)
```

#### `insertAfter(newNode: Node, referenceNode: Node): void`

Insert a node after a reference node.

```typescript
insertAfter(newEl, referenceEl)
```

### Event Operations

#### `on(target, type, listener, options?): void`

Add an event listener to a target.

```typescript
on(window, 'resize', () => console.log('resized'))
on(el, 'click', (e) => console.log('clicked'))
```

#### `off(target, type, listener, options?): void`

Remove an event listener from a target.

```typescript
off(window, 'resize', handler)
```

#### `once(target, type, listener, options?): void`

Add an event listener that will be called only once.

```typescript
once(el, 'click', () => console.log('clicked once'))
```

### Utility Functions

#### `contains(parent: Node, child: Node): boolean`

Check if a parent node contains a child node.

```typescript
if (contains(parent, child)) {
  // child is inside parent
}
```

#### `isElement(value: unknown): value is Element`

Type guard to check if a value is an Element.

```typescript
if (isElement(value)) {
  // value is Element
}
```

#### `isVisible(element: HTMLElement): boolean`

Check if an element is visible in the DOM.

```typescript
if (isVisible(el)) {
  // element is visible
}
```

## License

ISC
