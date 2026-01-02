# @fe-utils/dom

DOM manipulation utility functions.

## Installation

```bash
pnpm add @fe-utils/dom
```

## Usage

```ts
import { $, $$, addClass, removeClass, on, off } from '@fe-utils/dom'
```

## API

### Selection

#### $

Selects a single element.

```ts
$(selector: string, context?: Element | Document): Element | null
```

**Examples**

```ts
$('.my-class') // Returns first element with class 'my-class'
$('#my-id') // Returns element with id 'my-id'
```

#### $$

Selects multiple elements.

```ts
$$(selector: string, context?: Element | Document): Element[]
```

**Examples**

```ts
$$('.my-class') // Returns all elements with class 'my-class'
$$('div') // Returns all div elements
```

### Class Manipulation

#### addClass

Adds class to element.

```ts
addClass(element: Element, className: string): void
```

**Examples**

```ts
addClass(document.body, 'my-class')
```

#### removeClass

Removes class from element.

```ts
removeClass(element: Element, className: string): void
```

**Examples**

```ts
removeClass(document.body, 'my-class')
```

#### toggleClass

Toggles class on element.

```ts
toggleClass(element: Element, className: string): void
```

**Examples**

```ts
toggleClass(document.body, 'my-class')
```

#### hasClass

Checks if element has class.

```ts
hasClass(element: Element, className: string): boolean
```

**Examples**

```ts
hasClass(document.body, 'my-class') // true or false
```

### Attribute Manipulation

#### getAttr

Gets attribute value.

```ts
getAttr(element: Element, name: string): string | null
```

**Examples**

```ts
getAttr(element, 'data-id')
```

#### setAttr

Sets attribute value.

```ts
setAttr(element: Element, name: string, value: string): void
```

**Examples**

```ts
setAttr(element, 'data-id', '123')
```

#### removeAttr

Removes attribute.

```ts
removeAttr(element: Element, name: string): void
```

**Examples**

```ts
removeAttr(element, 'data-id')
```

### Style Manipulation

#### getStyle

Gets computed style.

```ts
getStyle(element: Element, property: string): string
```

**Examples**

```ts
getStyle(element, 'color')
```

#### setStyle

Sets inline style.

```ts
setStyle(element: Element, property: string, value: string): void
```

**Examples**

```ts
setStyle(element, 'color', 'red')
```

### Element Manipulation

#### createElement

Creates element.

```ts
createElement(tag: string, attributes?: Record<string, string>): HTMLElement
```

**Examples**

```ts
createElement('div', { class: 'my-class', id: 'my-id' })
```

#### remove

Removes element.

```ts
remove(element: Element): void
```

**Examples**

```ts
remove(element)
```

#### insertBefore

Inserts element before reference.

```ts
insertBefore(element: Element, reference: Element): void
```

**Examples**

```ts
insertBefore(newElement, referenceElement)
```

#### insertAfter

Inserts element after reference.

```ts
insertAfter(element: Element, reference: Element): void
```

**Examples**

```ts
insertAfter(newElement, referenceElement)
```

#### replace

Replaces element.

```ts
replace(oldElement: Element, newElement: Element): void
```

**Examples**

```ts
replace(oldElement, newElement)
```

### Content Manipulation

#### html

Gets or sets innerHTML.

```ts
html(element: Element, value?: string): string | void
```

**Examples**

```ts
html(element) // Gets innerHTML
html(element, '<p>Hello</p>') // Sets innerHTML
```

#### text

Gets or sets textContent.

```ts
text(element: Element, value?: string): string | void
```

**Examples**

```ts
text(element) // Gets textContent
text(element, 'Hello') // Sets textContent
```

#### val

Gets or sets form value.

```ts
val(element: HTMLElement, value?: string): string | void
```

**Examples**

```ts
val(inputElement) // Gets value
val(inputElement, 'Hello') // Sets value
```

### Visibility

#### show

Shows element.

```ts
show(element: Element): void
```

**Examples**

```ts
show(element)
```

#### hide

Hides element.

```ts
hide(element: Element): void
```

**Examples**

```ts
hide(element)
```

#### toggle

Toggles element visibility.

```ts
toggle(element: Element): void
```

**Examples**

```ts
toggle(element)
```

#### isVisible

Checks if element is visible.

```ts
isVisible(element: Element): boolean
```

**Examples**

```ts
isVisible(element) // true or false
```

### Position

#### offset

Gets element offset.

```ts
offset(element: Element): { top: number; left: number }
```

**Examples**

```ts
offset(element) // => { top: 100, left: 200 }
```

#### position

Gets element position.

```ts
position(element: Element): { top: number; left: number }
```

**Examples**

```ts
position(element) // => { top: 50, left: 100 }
```

#### scrollTo

Scrolls to position.

```ts
scrollTo(x: number, y: number): void
```

**Examples**

```ts
scrollTo(0, 100)
```

### Events

#### on

Adds event listener.

```ts
on(element: Element, event: string, handler: EventListener): void
```

**Examples**

```ts
on(button, 'click', () => {
  console.log('Clicked!')
})
```

#### off

Removes event listener.

```ts
off(element: Element, event: string, handler: EventListener): void
```

**Examples**

```ts
off(button, 'click', handler)
```

#### trigger

Triggers event.

```ts
trigger(element: Element, event: string): void
```

**Examples**

```ts
trigger(button, 'click')
```

#### delegate

Delegates event.

```ts
delegate(parent: Element, selector: string, event: string, handler: (e: Event, target: Element) => void): void
```

**Examples**

```ts
delegate(document, '.button', 'click', (e, target) => {
  console.log('Button clicked!')
})
```

### Ready

#### ready

Executes callback when DOM is ready.

```ts
ready(callback: () => void): void
```

**Examples**

```ts
ready(() => {
  console.log('DOM is ready!')
})
```
