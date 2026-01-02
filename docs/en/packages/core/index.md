# @fe-utils/core

Core utility library providing type guards and common helper functions for JavaScript/TypeScript.

## Installation

```bash
pnpm add @fe-utils/core
```

## Usage

```ts
import { isString, isNumber, isEmpty, noop, times } from '@fe-utils/core'
```

## API

### Type Guards

#### isString

Check if value is a string.

```ts
isString(value: unknown): value is string
```

**Examples**

```ts
isString('hello') // true
isString(123) // false
```

#### isNumber

Check if value is a number (not NaN).

```ts
isNumber(value: unknown): value is number
```

**Examples**

```ts
isNumber(123) // true
isNumber(NaN) // false
isNumber('123') // false
```

#### isBoolean

Check if value is a boolean.

```ts
isBoolean(value: unknown): value is boolean
```

**Examples**

```ts
isBoolean(true) // true
isBoolean(1) // false
```

#### isNull

Check if value is null.

```ts
isNull(value: unknown): value is null
```

**Examples**

```ts
isNull(null) // true
isNull(undefined) // false
```

#### isUndefined

Check if value is undefined.

```ts
isUndefined(value: unknown): value is undefined
```

**Examples**

```ts
isUndefined(undefined) // true
isUndefined(null) // false
```

#### isNil

Check if value is null or undefined.

```ts
isNil(value: unknown): value is null | undefined
```

**Examples**

```ts
isNil(null) // true
isNil(undefined) // true
isNil(0) // false
```

#### isFunction

Check if value is a function.

```ts
isFunction(value: unknown): value is (...args: any[]) => any
```

**Examples**

```ts
isFunction(() => {}) // true
isFunction('function') // false
```

#### isArray

Check if value is an array.

```ts
isArray(value: unknown): value is any[]
```

**Examples**

```ts
isArray([1, 2, 3]) // true
isArray({}) // false
```

#### isObject

Check if value is an object (not null, not array).

```ts
isObject(value: unknown): value is Record<string, any>
```

**Examples**

```ts
isObject({}) // true
isObject([]) // false
isObject(null) // false
```

#### isPlainObject

Check if value is a plain object (created by Object or null prototype).

```ts
isPlainObject(value: unknown): value is Record<string, any>
```

**Examples**

```ts
isPlainObject({}) // true
isPlainObject(new Date()) // false
isPlainObject([]) // false
```

#### isEmpty

Check if value is empty.

```ts
isEmpty(value: unknown): boolean
```

**Examples**

```ts
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
isEmpty([1]) // false
```

### Utility Functions

#### noop

A no-operation function.

```ts
noop(): void
```

**Examples**

```ts
noop() // Does nothing
```

#### identity

Returns the first argument.

```ts
identity<T>(value: T): T
```

**Examples**

```ts
identity(42) // => 42
identity('hello') // => 'hello'
```

#### times

Call iteratee n times and return results.

```ts
times<T>(n: number, iteratee: (index: number) => T): T[]
```

**Examples**

```ts
times(3, i => i * 2)
// => [0, 2, 4]
```

#### toString

Convert value to string.

```ts
toString(value: unknown): string
```

**Examples**

```ts
toString(123) // => '123'
toString({ a: 1 }) // => '{"a":1}'
toString(null) // => ''
```

#### toNumber

Convert value to number.

```ts
toNumber(value: unknown): number
```

**Examples**

```ts
toNumber('123') // => 123
toNumber('abc') // => 0
toNumber(true) // => 1
```

#### toBoolean

Convert value to boolean.

```ts
toBoolean(value: unknown): boolean
```

**Examples**

```ts
toBoolean('true') // => true
toBoolean('false') // => false
toBoolean(1) // => true
toBoolean(0) // => false
```

#### isStrictEqual

Strict equality check.

```ts
isStrictEqual(a: unknown, b: unknown): boolean
```

**Examples**

```ts
isStrictEqual(1, 1) // true
isStrictEqual(1, '1') // false
```

## License

ISC
