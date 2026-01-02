# @fe-utils/object

Collection of object manipulation utility functions.

## Installation

```bash
pnpm add @fe-utils/object
```

## Usage

```ts
import { get, set, pick, omit, merge, deepClone, clone } from '@fe-utils/object'
```

## API

### Validation

#### isObject

Checks if value is an object (not null).

```ts
isObject(value: unknown): value is object
```

**Examples**

```ts
isObject({}) // true
isObject([]) // true
isObject(null) // false
isObject(123) // false
```

#### isPlainObject

Checks if value is a plain object.

```ts
isPlainObject(value: unknown): value is Record<string, unknown>
```

**Examples**

```ts
isPlainObject({}) // true
isPlainObject([]) // false
isPlainObject(new Date()) // false
isPlainObject(null) // false
```

#### isEmpty

Checks if value is empty.

```ts
isEmpty(value: unknown): boolean
```

**Examples**

```ts
isEmpty({}) // true
isEmpty([]) // true
isEmpty({ a: 1 }) // false
isEmpty([1]) // false
isEmpty('') // true
isEmpty(null) // true
```

### Basic Operations

#### keys

Gets all keys of an object.

```ts
keys<T extends object>(obj: T): Array<keyof T>
```

**Examples**

```ts
keys({ a: 1, b: 2, c: 3 }) // ['a', 'b', 'c']
```

#### values

Gets all values of an object.

```ts
values<T extends object>(obj: T): Array<T[keyof T]>
```

**Examples**

```ts
values({ a: 1, b: 2, c: 3 }) // [1, 2, 3]
```

#### entries

Gets all key-value pairs of an object.

```ts
entries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>
```

**Examples**

```ts
entries({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]
```

### Path Operations

#### get

Gets a value from an object using a path.

```ts
get<T = unknown>(obj: Record<string, unknown>, path: string | string[], defaultValue?: T): T
```

**Examples**

```ts
const obj = { user: { name: 'John', age: 30 } }
get(obj, 'user.name') // "John"
get(obj, ['user', 'age']) // 30
get(obj, 'user.address', 'Unknown') // "Unknown"
```

#### set

Sets a value in an object using a path.

```ts
set<T extends object>(obj: T, path: string | string[], value: unknown): T
```

**Examples**

```ts
const obj = { user: { name: 'John' } }
set(obj, 'user.age', 30)
// => { user: { name: 'John', age: 30 } }
```

#### has

Checks if an object has a value at the given path.

```ts
has(obj: Record<string, unknown>, path: string | string[]): boolean
```

**Examples**

```ts
const obj = { user: { name: 'John' } }
has(obj, 'user.name') // true
has(obj, 'user.age') // false
```

#### unset

Deletes a value from an object using a path.

```ts
unset<T extends object>(obj: T, path: string | string[]): boolean
```

**Examples**

```ts
const obj = { user: { name: 'John', age: 30 } }
unset(obj, 'user.age') // true
// => { user: { name: 'John' } }
```

### Selection

#### pick

Picks specific keys from an object.

```ts
pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K>
```

**Examples**

```ts
const user = { name: 'John', age: 30, email: 'john@example.com' }
pick(user, ['name', 'age']) // { name: 'John', age: 30 }
```

#### omit

Omits specific keys from an object.

```ts
omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>
```

**Examples**

```ts
const user = { name: 'John', age: 30, email: 'john@example.com' }
omit(user, ['email']) // { name: 'John', age: 30 }
```

#### invert

Inverts the keys and values of an object.

```ts
invert<T extends Record<string, PropertyKey>>(obj: T): Record<T[keyof T], keyof T>
```

**Examples**

```ts
invert({ a: 'x', b: 'y' }) // { x: 'a', y: 'b' }
```

### Merge

#### merge

Shallow merges two objects.

```ts
merge<T extends object, U extends object>(target: T, source: U): T & U
```

**Examples**

```ts
merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
merge({ a: 1, b: 2 }, { b: 3, c: 4 }) // { a: 1, b: 3, c: 4 }
```

#### deepMerge

Deep merges two objects.

```ts
deepMerge<T extends object, U extends object>(target: T, source: U): T & U
```

**Examples**

```ts
deepMerge(
  { a: { x: 1, y: 2 } },
  { a: { y: 3, z: 4 }, b: 5 }
)
// => { a: { x: 1, y: 3, z: 4 }, b: 5 }
```

#### defaults

Fills in missing properties with defaults.

```ts
defaults<T extends object, U extends object>(obj: T, defaults: U): T & U
```

**Examples**

```ts
defaults({ name: 'John' }, { name: 'Anonymous', age: 0 })
// => { name: 'John', age: 0 }
```

#### assign

Assigns properties from source to target (mutates target).

```ts
assign<T extends object, U extends object>(target: T, source: U): T & U
```

**Examples**

```ts
const target = { a: 1 }
assign(target, { b: 2 }) // => { a: 1, b: 2 }
```

### Clone

#### clone

Shallow clones an object.

```ts
clone<T>(obj: T): T
```

**Examples**

```ts
const obj = { a: 1, b: { c: 2 } }
const cloned = clone(obj)
cloned.a = 10
obj.a // => 1 (unchanged)
cloned.b.c = 20
obj.b.c // => 20 (changed, shallow clone)
```

#### deepClone

Deep clones an object.

```ts
deepClone<T>(obj: T): T
```

**Examples**

```ts
const obj = { a: 1, b: { c: 2 }, d: new Date() }
const cloned = deepClone(obj)
cloned.a = 10
obj.a // => 1 (unchanged)
cloned.b.c = 20
obj.b.c // => 2 (unchanged, deep clone)
```

### Transformation

#### mapValues

Maps values of an object.

```ts
mapValues<T extends object, U>(obj: T, mapper: (value: T[keyof T], key: keyof T) => U): Record<keyof T, U>
```

**Examples**

```ts
mapValues({ a: 1, b: 2, c: 3 }, value => value * 2)
// => { a: 2, b: 4, c: 6 }
```

#### mapKeys

Maps keys of an object.

```ts
mapKeys<T extends object, K extends PropertyKey>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => K): Record<K, T[keyof T]>
```

**Examples**

```ts
mapKeys({ a: 1, b: 2 }, (key, value) => key.toUpperCase())
// => { A: 1, B: 2 }
```

#### transform

Transforms an object into a new value.

```ts
transform<T extends object, U>(obj: T, transformer: (result: U, value: T[keyof T], key: keyof T) => void, initialValue: U): U
```

**Examples**

```ts
transform(
  { a: 1, b: 2, c: 3 },
  (result, value, key) => {
    result[key.toUpperCase()] = value * 2
  },
  {}
)
// => { A: 2, B: 4, C: 6 }
```

### Query

#### some

Checks if any value satisfies the predicate.

```ts
some<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean
```

**Examples**

```ts
some({ a: 1, b: 2, c: 3 }, value => value > 2) // true
some({ a: 1, b: 2, c: 3 }, value => value > 10) // false
```

#### every

Checks if all values satisfy the predicate.

```ts
every<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean
```

**Examples**

```ts
every({ a: 1, b: 2, c: 3 }, value => value > 0) // true
every({ a: 1, b: 2, c: 3 }, value => value > 2) // false
```

#### isEqual

Deep compares two values for equality.

```ts
isEqual(a: unknown, b: unknown): boolean
```

**Examples**

```ts
isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) // true
isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }) // false
isEqual([1, 2, 3], [1, 2, 3]) // true
```

### Iteration

#### forEach

Iterates over an object's key-value pairs.

```ts
forEach<T extends object>(obj: T, iteratee: (value: T[keyof T], key: keyof T) => void): void
```

**Examples**

```ts
forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key, value)
})
// => a 1
// => b 2
```

#### reduce

Reduces an object to a single value.

```ts
reduce<T extends object, U>(obj: T, reducer: (accumulator: U, value: T[keyof T], key: keyof T) => U, initialValue: U): U
```

**Examples**

```ts
reduce({ a: 1, b: 2, c: 3 }, (acc, value) => acc + value, 0)
// => 6
```
