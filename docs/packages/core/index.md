# @lutlelk-tools/core

核心工具函数集合。

## 安装

```bash
pnpm add @lutlelk-tools/core
```

## 使用

```ts
import {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNil,
  isFunction,
  isArray,
  isObject,
  isPlainObject,
  isEmpty,
  noop,
  identity,
  times,
  toString,
  toNumber,
  toBoolean,
  isStrictEqual
} from '@lutlelk-tools/core'
```

## API

### 类型检查

#### isString

检查值是否为字符串。

```ts
isString(value: unknown): value is string
```

**示例**

```ts
isString('hello') // true
isString(123) // false
```

#### isNumber

检查值是否为数字。

```ts
isNumber(value: unknown): value is number
```

**示例**

```ts
isNumber(123) // true
isNumber('123') // false
isNumber(NaN) // false
```

#### isBoolean

检查值是否为布尔值。

```ts
isBoolean(value: unknown): value is boolean
```

**示例**

```ts
isBoolean(true) // true
isBoolean(false) // true
isBoolean('true') // false
```

#### isNull

检查值是否为 null。

```ts
isNull(value: unknown): value is null
```

**示例**

```ts
isNull(null) // true
isNull(undefined) // false
```

#### isUndefined

检查值是否为 undefined。

```ts
isUndefined(value: unknown): value is undefined
```

**示例**

```ts
isUndefined(undefined) // true
isUndefined(null) // false
```

#### isNil

检查值是否为 null 或 undefined。

```ts
isNil(value: unknown): value is null | undefined
```

**示例**

```ts
isNil(null) // true
isNil(undefined) // true
isNil(0) // false
```

#### isFunction

检查值是否为函数。

```ts
isFunction(value: unknown): value is (...args: any[]) => any
```

**示例**

```ts
isFunction(() => {}) // true
isFunction(function () {}) // true
isFunction(123) // false
```

#### isArray

检查值是否为数组。

```ts
isArray(value: unknown): value is any[]
```

**示例**

```ts
isArray([1, 2, 3]) // true
isArray({}) // false
```

#### isObject

检查值是否为对象。

```ts
isObject(value: unknown): value is Record<string, any>
```

**示例**

```ts
isObject({}) // true
isObject([]) // false
isObject(null) // false
```

#### isPlainObject

检查值是否为纯对象。

```ts
isPlainObject(value: unknown): value is Record<string, any>
```

**示例**

```ts
isPlainObject({}) // true
isPlainObject([]) // false
isPlainObject(new Date()) // false
```

#### isEmpty

检查值是否为空。

```ts
isEmpty(value: unknown): boolean
```

**示例**

```ts
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('hello') // false
```

### 函数工具

#### noop

空函数。

```ts
noop(): void
```

**示例**

```ts
const callback = options?.callback || noop
callback()
```

#### identity

恒等函数。

```ts
identity<T>(value: T): T
```

**示例**

```ts
identity(123) // 123
identity('hello') // 'hello'
```

#### times

执行函数 n 次。

```ts
times<T>(n: number, iteratee: (index: number) => T): T[]
```

**示例**

```ts
times(5, i => i * 2) // [0, 2, 4, 6, 8]
times(3, () => Math.random()) // [0.123, 0.456, 0.789]
```

### 类型转换

#### toString

转换为字符串。

```ts
toString(value: unknown): string
```

**示例**

```ts
toString(123) // '123'
toString(true) // 'true'
toString(null) // ''
toString({ a: 1 }) // '{"a":1}'
```

#### toNumber

转换为数字。

```ts
toNumber(value: unknown): number
```

**示例**

```ts
toNumber('123') // 123
toNumber('abc') // 0
toNumber(true) // 1
toNumber(false) // 0
```

#### toBoolean

转换为布尔值。

```ts
toBoolean(value: unknown): boolean
```

**示例**

```ts
toBoolean('true') // true
toBoolean('false') // false
toBoolean('0') // false
toBoolean('') // false
toBoolean(1) // true
toBoolean(0) // false
```

### 比较

#### isStrictEqual

严格相等比较。

```ts
isStrictEqual(a: unknown, b: unknown): boolean
```

**示例**

```ts
isStrictEqual(1, 1) // true
isStrictEqual('1', 1) // false
```

### 对象操作

#### get

获取对象路径的值。

```ts
get<T = any>(obj: Record<string, any>, path: string | string[], defaultValue?: T): T
```

**示例**

```ts
const obj = { a: { b: { c: 1 } } }
get(obj, 'a.b.c') // 1
get(obj, ['a', 'b', 'c']) // 1
get(obj, 'a.b.d', 'default') // 'default'
```

#### set

设置对象路径的值。

```ts
set(obj: Record<string, any>, path: string | string[], value: any): void
```

**示例**

```ts
const obj = { a: {} }
set(obj, 'a.b.c', 1)
console.log(obj) // { a: { b: { c: 1 } } }
```

#### has

检查对象路径是否存在。

```ts
has(obj: Record<string, any>, path: string | string[]): boolean
```

**示例**

```ts
const obj = { a: { b: 1 } }
has(obj, 'a.b') // true
has(obj, 'a.c') // false
```

#### omit

排除对象的指定属性。

```ts
omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

**示例**

```ts
omit({ a: 1, b: 2, c: 3 }, ['b']) // { a: 1, c: 3 }
```

#### pick

选择对象的指定属性。

```ts
pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
```

**示例**

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
```

#### keys

获取对象的所有键。

```ts
keys<T extends Record<string, any>>(obj: T): Array<keyof T>
```

**示例**

```ts
keys({ a: 1, b: 2 }) // ['a', 'b']
```

#### values

获取对象的所有值。

```ts
values<T extends Record<string, any>>(obj: T): Array<T[keyof T]>
```

**示例**

```ts
values({ a: 1, b: 2 }) // [1, 2]
```

#### entries

获取对象的键值对数组。

```ts
entries<T extends Record<string, any>>(obj: T): Array<[keyof T, T[keyof T]]>
```

**示例**

```ts
entries({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]
```

### 使用示例

#### 安全的属性访问

```ts
import { get } from '@lutlelk-tools/core'

const user = {
  profile: {
    name: 'John',
    address: {
      city: 'New York'
    }
  }
}

const city = get(user, 'profile.address.city', 'Unknown')
console.log(city) // 'New York'

const country = get(user, 'profile.address.country', 'Unknown')
console.log(country) // 'Unknown'
```

#### 类型检查和转换

```ts
import { isString, toNumber, toBoolean } from '@lutlelk-tools/core'

function processValue(value: unknown) {
  if (isString(value)) {
    return value.toUpperCase()
  }
  if (typeof value === 'number') {
    return value * 2
  }
  return toBoolean(value)
}

console.log(processValue('hello')) // 'HELLO'
console.log(processValue(5)) // 10
console.log(processValue('true')) // true
```

#### 深度比较

```ts
import { isEqual } from '@lutlelk-tools/core'

const obj1 = { a: 1, b: { c: 2 } }
const obj2 = { a: 1, b: { c: 2 } }
const obj3 = { a: 1, b: { c: 3 } }

console.log(isEqual(obj1, obj2)) // true
console.log(isEqual(obj1, obj3)) // false
```

#### 创建数组

```ts
import { times } from '@lutlelk-tools/core'

const indices = times(5, i => i)
console.log(indices) // [0, 1, 2, 3, 4]

const randomNumbers = times(3, () => Math.random())
console.log(randomNumbers) // [0.123, 0.456, 0.789]
```
