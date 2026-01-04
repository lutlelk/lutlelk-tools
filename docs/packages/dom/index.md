# @lutlelk-tools/dom

DOM 操作工具函数集合。

## 安装

```bash
pnpm add @lutlelk-tools/dom
```

## 使用

```ts
import {
  $,
  $$,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  getAttr,
  setAttr,
  removeAttr,
  getStyle,
  setStyle,
  createElement,
  on,
  off,
  once
} from '@lutlelk-tools/dom'
```

## API

### 选择器

#### $

查询单个元素。

```ts
$(selector: string, context?: Element | Document): Element | null
```

**示例**

```ts
$('.my-class') // 返回第一个匹配的元素
$('#my-id') // 返回 ID 为 my-id 的元素
```

#### $$

查询多个元素。

```ts
$$(selector: string, context?: Element | Document): Element[]
```

**示例**

```ts
$$('.my-class') // 返回所有匹配的元素数组
$$('div') // 返回所有 div 元素
```

### 类名操作

#### addClass

添加类名。

```ts
addClass(element: Element, ...classNames: string[]): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
addClass(el, 'active', 'highlight')
```

#### removeClass

移除类名。

```ts
removeClass(element: Element, ...classNames: string[]): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
removeClass(el, 'active', 'highlight')
```

#### toggleClass

切换类名。

```ts
toggleClass(element: Element, className: string, force?: boolean): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
toggleClass(el, 'active') // 切换 active 类
toggleClass(el, 'active', true) // 添加 active 类
```

#### hasClass

检查是否有类名。

```ts
hasClass(element: Element, className: string): boolean
```

**示例**

```ts
const el = document.querySelector('.my-element')
hasClass(el, 'active') // true 或 false
```

### 属性操作

#### getAttr

获取属性值。

```ts
getAttr(element: Element, attribute: string): string | null
```

**示例**

```ts
const el = document.querySelector('.my-element')
getAttr(el, 'data-id') // 返回 data-id 属性值
```

#### setAttr

设置属性值。

```ts
setAttr(element: Element, attribute: string, value: string): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
setAttr(el, 'data-id', '123')
```

#### removeAttr

移除属性。

```ts
removeAttr(element: Element, ...attributes: string[]): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
removeAttr(el, 'data-id', 'data-name')
```

### 样式操作

#### getStyle

获取样式值。

```ts
getStyle(element: Element, property: string): string
```

**示例**

```ts
const el = document.querySelector('.my-element')
getStyle(el, 'color') // 返回颜色值
```

#### setStyle

设置样式。

```ts
setStyle(element: Element, styles: Record<string, string>): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
setStyle(el, {
  color: 'red',
  fontSize: '16px'
})
```

### 元素操作

#### createElement

创建元素。

```ts
createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: {
    className?: string
    attributes?: Record<string, string>
    styles?: Record<string, string>
    textContent?: string
    innerHTML?: string
  }
): HTMLElementTagNameMap[K]
```

**示例**

```ts
const div = createElement('div', {
  className: 'my-class',
  attributes: { 'data-id': '123' },
  styles: { color: 'red' },
  textContent: 'Hello'
})

document.body.appendChild(div)
```

#### remove

移除元素。

```ts
remove(element: Element): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
remove(el)
```

#### insertBefore

在元素之前插入。

```ts
insertBefore(newElement: Element, referenceElement: Element): void
```

**示例**

```ts
const newEl = createElement('div')
const refEl = document.querySelector('.reference')
insertBefore(newEl, refEl)
```

#### insertAfter

在元素之后插入。

```ts
insertAfter(newElement: Element, referenceElement: Element): void
```

**示例**

```ts
const newEl = createElement('div')
const refEl = document.querySelector('.reference')
insertAfter(newEl, refEl)
```

### 事件操作

#### on

添加事件监听器。

```ts
on<K extends keyof HTMLElementEventMap>(
  element: Element,
  event: K,
  handler: (this: Element, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
on(el, 'click', (e) => {
  console.log('Clicked!', e)
})
```

#### off

移除事件监听器。

```ts
off<K extends keyof HTMLElementEventMap>(
  element: Element,
  event: K,
  handler: (this: Element, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | EventListenerOptions
): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
const handler = (e: Event) => console.log('Clicked!', e)

on(el, 'click', handler)
off(el, 'click', handler)
```

#### once

添加一次性事件监听器。

```ts
once<K extends keyof HTMLElementEventMap>(
  element: Element,
  event: K,
  handler: (this: Element, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void
```

**示例**

```ts
const el = document.querySelector('.my-element')
once(el, 'click', (e) => {
  console.log('只执行一次')
})
```

### 工具函数

#### contains

检查是否包含元素。

```ts
contains(parent: Element, child: Element): boolean
```

**示例**

```ts
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
contains(parent, child) // true 或 false
```

#### isElement

检查是否为元素。

```ts
isElement(value: unknown): value is Element
```

**示例**

```ts
isElement(document.querySelector('.my-element')) // true
isElement(document.createTextNode('text')) // false
```

#### isVisible

检查元素是否可见。

```ts
isVisible(element: Element): boolean
```

**示例**

```ts
const el = document.querySelector('.my-element')
isVisible(el) // true 或 false
```

### 使用示例

#### 创建并添加元素

```ts
import { $, createElement, addClass, on } from '@lutlelk-tools/dom'

const button = createElement('button', {
  className: 'btn btn-primary',
  textContent: '点击我'
})

on(button, 'click', () => {
  console.log('按钮被点击')
})

document.body.appendChild(button)
```

#### 查询和操作元素

```ts
import { $, $$, addClass, removeClass, getAttr, setAttr } from '@lutlelk-tools/dom'

const items = $$('.item')
items.forEach(item => {
  addClass(item, 'active')
  setAttr(item, 'data-index', '1')
})

const firstItem = $('.item')
removeClass(firstItem, 'active')
```

#### 事件委托

```ts
import { $, on } from '@lutlelk-tools/dom'

const list = $('.list')

on(list, 'click', (e) => {
  const target = e.target as HTMLElement
  if (target.classList.contains('item')) {
    console.log('点击了项目:', target.textContent)
  }
})
```
