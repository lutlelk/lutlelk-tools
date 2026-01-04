# @lutlelk/core

Core utility library providing type guards and common helper functions for JavaScript/TypeScript.

## Installation

```bash
npm install @lutlelk/core
# or
pnpm add @lutlelk/core
# or
yarn add @lutlelk/core
```

## Usage

```typescript
import { isString, isNumber, isEmpty, noop, times } from '@lutlelk/core'
```

## API

### Type Guards

#### `isString(value: unknown): value is string`

Check if value is a string.

```typescript
isString('hello') // => true
isString(123) // => false
```

#### `isNumber(value: unknown): value is number`

Check if value is a number (not NaN).

```typescript
isNumber(123) // => true
isNumber(NaN) // => false
isNumber('123') // => false
```

#### `isBoolean(value: unknown): value is boolean`

Check if value is a boolean.

```typescript
isBoolean(true) // => true
isBoolean(1) // => false
```

#### `isNull(value: unknown): value is null`

Check if value is null.

```typescript
isNull(null) // => true
isNull(undefined) // => false
```

#### `isUndefined(value: unknown): value is undefined`

Check if value is undefined.

```typescript
isUndefined(undefined) // => true
isUndefined(null) // => false
```

#### `isNil(value: unknown): value is null | undefined`

Check if value is null or undefined.

```typescript
isNil(null) // => true
isNil(undefined) // => true
isNil(0) // => false
```

#### `isFunction(value: unknown): value is (...args: any[]) => any`

Check if value is a function.

```typescript
isFunction(() => {}) // => true
isFunction('function') // => false
```

#### `isArray(value: unknown): value is any[]`

Check if value is an array.

```typescript
isArray([1, 2, 3]) // => true
isArray({}) // => false
```

#### `isObject(value: unknown): value is Record<string, any>`

Check if value is an object (not null, not array).

```typescript
isObject({}) // => true
isObject([]) // => false
isObject(null) // => false
```

#### `isPlainObject(value: unknown): value is Record<string, any>`

Check if value is a plain object (created by Object or null prototype).

```typescript
isPlainObject({}) // => true
isPlainObject(new Date()) // => false
isPlainObject([]) // => false
```

#### `isEmpty(value: unknown): boolean`

Check if value is empty.

```typescript
isEmpty('') // => true
isEmpty([]) // => true
isEmpty({}) // => true
isEmpty(null) // => true
isEmpty([1]) // => false
```

### Utility Functions

#### `noop(): void`

A no-operation function.

```typescript
noop() // Does nothing
```

#### `identity<T>(value: T): T`

Returns the first argument.

```typescript
identity(42) // => 42
identity('hello') // => 'hello'
```

#### `times<T>(n: number, iteratee: (index: number) => T): T[]`

Call iteratee n times and return results.

```typescript
times(3, i => i * 2)
// => [0, 2, 4]
```

#### `toString(value: unknown): string`

Convert value to string.

```typescript
toString(123) // => '123'
toString({ a: 1 }) // => '{"a":1}'
toString(null) // => ''
```

#### `toNumber(value: unknown): number`

Convert value to number.

```typescript
toNumber('123') // => 123
toNumber('abc') // => 0
toNumber(true) // => 1
```

#### `toBoolean(value: unknown): boolean`

Convert value to boolean.

```typescript
toBoolean('true') // => true
toBoolean('false') // => false
toBoolean(1) // => true
toBoolean(0) // => false
```

#### `isStrictEqual(a: unknown, b: unknown): boolean`

Strict equality check.

```typescript
isStrictEqual(1, 1) // => true
isStrictEqual(1, '1') // => false
```

## License

ISC
