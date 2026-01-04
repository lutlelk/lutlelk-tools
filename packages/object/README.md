# @lutlelk/object

A comprehensive object utility library for TypeScript/JavaScript with manipulation, query, transformation, and cloning capabilities.

## Installation

```bash
npm install @lutlelk/object
# or
pnpm add @lutlelk/object
# or
yarn add @lutlelk/object
```

## Usage

### Import the entire package

```typescript
import { get, set, pick, omit, deepClone } from '@lutlelk/object'

const user = { name: 'John', age: 30, email: 'john@example.com' }
get(user, 'name') // => "John"
```

### Import specific functions (tree-shaking supported)

```typescript
import { deepMerge, pick, clone } from '@lutlelk/object'

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
deepMerge(obj1, obj2) // => { a: 1, b: 3, c: 4 }
```

## API

### Validation

#### `isObject(value: unknown): value is object`

Check if value is an object (not null).

```typescript
isObject({}) // => true
isObject([]) // => true
isObject(null) // => false
isObject(123) // => false
```

#### `isPlainObject(value: unknown): value is Record<string, unknown>`

Check if value is a plain object.

```typescript
isPlainObject({}) // => true
isPlainObject([]) // => false
isPlainObject(new Date()) // => false
isPlainObject(null) // => false
```

#### `isEmpty(value: unknown): boolean`

Check if value is empty.

```typescript
isEmpty({}) // => true
isEmpty([]) // => true
isEmpty({ a: 1 }) // => false
isEmpty([1]) // => false
isEmpty('') // => true
isEmpty(null) // => true
```

### Basic Operations

#### `keys<T extends object>(obj: T): Array<keyof T>`

Get all keys of an object.

```typescript
keys({ a: 1, b: 2, c: 3 }) // => ['a', 'b', 'c']
```

#### `values<T extends object>(obj: T): Array<T[keyof T]>`

Get all values of an object.

```typescript
values({ a: 1, b: 2, c: 3 }) // => [1, 2, 3]
```

#### `entries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>`

Get all key-value pairs of an object.

```typescript
entries({ a: 1, b: 2 }) // => [['a', 1], ['b', 2]]
```

#### `fromEntries<T extends PropertyKey, U>(entries: readonly (readonly [T, U])[]): Record<T, U>`

Create an object from key-value pairs.

```typescript
fromEntries([['a', 1], ['b', 2]]) // => { a: 1, b: 2 }
```

#### `size(obj: object): number`

Get the number of keys in an object.

```typescript
size({ a: 1, b: 2, c: 3 }) // => 3
```

#### `toPairs<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>`

Convert object to array of key-value pairs.

```typescript
toPairs({ a: 1, b: 2 }) // => [['a', 1], ['b', 2]]
```

#### `fromPairs<T extends PropertyKey, U>(pairs: readonly (readonly [T, U])[]): Record<T, U>`

Convert array of key-value pairs to object.

```typescript
fromPairs([['a', 1], ['b', 2]]) // => { a: 1, b: 2 }
```

### Path Operations

#### `get<T = unknown>(obj: Record<string, unknown>, path: string | string[], defaultValue?: T): T`

Get a value from an object using a path.

```typescript
const obj = { user: { name: 'John', age: 30 } }
get(obj, 'user.name') // => "John"
get(obj, ['user', 'age']) // => 30
get(obj, 'user.address', 'Unknown') // => "Unknown"
```

#### `set<T extends object>(obj: T, path: string | string[], value: unknown): T`

Set a value in an object using a path.

```typescript
const obj = { user: { name: 'John' } }
set(obj, 'user.age', 30)
// => { user: { name: 'John', age: 30 } }
```

#### `has(obj: Record<string, unknown>, path: string | string[]): boolean`

Check if an object has a value at the given path.

```typescript
const obj = { user: { name: 'John' } }
has(obj, 'user.name') // => true
has(obj, 'user.age') // => false
```

#### `unset<T extends object>(obj: T, path: string | string[]): boolean`

Delete a value from an object using a path.

```typescript
const obj = { user: { name: 'John', age: 30 } }
unset(obj, 'user.age') // => true
// => { user: { name: 'John' } }
```

### Selection

#### `pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K>`

Pick specific keys from an object.

```typescript
const user = { name: 'John', age: 30, email: 'john@example.com' }
pick(user, ['name', 'age']) // => { name: 'John', age: 30 }
```

#### `omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>`

Omit specific keys from an object.

```typescript
const user = { name: 'John', age: 30, email: 'john@example.com' }
omit(user, ['email']) // => { name: 'John', age: 30 }
```

#### `invert<T extends Record<string, PropertyKey>>(obj: T): Record<T[keyof T], keyof T>`

Invert the keys and values of an object.

```typescript
invert({ a: 'x', b: 'y' }) // => { x: 'a', y: 'b' }
```

#### `findKey<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): keyof T | undefined`

Find the first key that satisfies the predicate.

```typescript
const obj = { a: 1, b: 2, c: 3 }
findKey(obj, value => value > 1) // => 'b'
```

#### `findValue<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): T[keyof T] | undefined`

Find the first value that satisfies the predicate.

```typescript
const obj = { a: 1, b: 2, c: 3 }
findValue(obj, value => value > 1) // => 2
```

### Merge

#### `merge<T extends object, U extends object>(target: T, source: U): T & U`

Shallow merge two objects.

```typescript
merge({ a: 1 }, { b: 2 }) // => { a: 1, b: 2 }
merge({ a: 1, b: 2 }, { b: 3, c: 4 }) // => { a: 1, b: 3, c: 4 }
```

#### `deepMerge<T extends object, U extends object>(target: T, source: U): T & U`

Deep merge two objects.

```typescript
deepMerge(
  { a: { x: 1, y: 2 } },
  { a: { y: 3, z: 4 }, b: 5 }
)
// => { a: { x: 1, y: 3, z: 4 }, b: 5 }
```

#### `defaults<T extends object, U extends object>(obj: T, defaults: U): T & U`

Fill in missing properties with defaults.

```typescript
defaults({ name: 'John' }, { name: 'Anonymous', age: 0 })
// => { name: 'John', age: 0 }
```

#### `assign<T extends object, U extends object>(target: T, source: U): T & U`

Assign properties from source to target (mutates target).

```typescript
const target = { a: 1 }
assign(target, { b: 2 }) // => { a: 1, b: 2 }
```

### Clone

#### `clone<T>(obj: T): T`

Shallow clone an object.

```typescript
const obj = { a: 1, b: { c: 2 } }
const cloned = clone(obj)
cloned.a = 10
obj.a // => 1 (unchanged)
cloned.b.c = 20
obj.b.c // => 20 (changed, shallow clone)
```

#### `deepClone<T>(obj: T): T`

Deep clone an object.

```typescript
const obj = { a: 1, b: { c: 2 }, d: new Date() }
const cloned = deepClone(obj)
cloned.a = 10
obj.a // => 1 (unchanged)
cloned.b.c = 20
obj.b.c // => 2 (unchanged, deep clone)
```

### Transformation

#### `mapValues<T extends object, U>(obj: T, mapper: (value: T[keyof T], key: keyof T) => U): Record<keyof T, U>`

Map values of an object.

```typescript
mapValues({ a: 1, b: 2, c: 3 }, value => value * 2)
// => { a: 2, b: 4, c: 6 }
```

#### `mapKeys<T extends object, K extends PropertyKey>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => K): Record<K, T[keyof T]>`

Map keys of an object.

```typescript
mapKeys({ a: 1, b: 2 }, (key, value) => key.toUpperCase())
// => { A: 1, B: 2 }
```

#### `mapKeysDeep<T extends object, K extends PropertyKey>(obj: T, mapper: (key: string) => K): Record<string, unknown>`

Deep map keys of an object.

```typescript
mapKeysDeep({ user: { firstName: 'John' } }, key => key.toUpperCase())
// => { USER: { FIRSTNAME: 'John' } }
```

#### `mapValuesDeep<T extends object>(obj: T, mapper: (value: unknown, key: string) => unknown): Record<string, unknown>`

Deep map values of an object.

```typescript
mapValuesDeep({ a: 1, b: { c: 2 } }, value => typeof value === 'number' ? value * 2 : value)
// => { a: 2, b: { c: 4 } }
```

#### `transform<T extends object, U>(obj: T, transformer: (result: U, value: T[keyof T], key: keyof T) => void, initialValue: U): U`

Transform an object into a new value.

```typescript
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

#### `some<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean`

Check if any value satisfies the predicate.

```typescript
some({ a: 1, b: 2, c: 3 }, value => value > 2) // => true
some({ a: 1, b: 2, c: 3 }, value => value > 10) // => false
```

#### `every<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean`

Check if all values satisfy the predicate.

```typescript
every({ a: 1, b: 2, c: 3 }, value => value > 0) // => true
every({ a: 1, b: 2, c: 3 }, value => value > 2) // => false
```

#### `isEqual(a: unknown, b: unknown): boolean`

Deep compare two values for equality.

```typescript
isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) // => true
isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }) // => false
isEqual([1, 2, 3], [1, 2, 3]) // => true
```

### Iteration

#### `forEach<T extends object>(obj: T, iteratee: (value: T[keyof T], key: keyof T) => void): void`

Iterate over an object's key-value pairs.

```typescript
forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key, value)
})
// => a 1
// => b 2
```

#### `reduce<T extends object, U>(obj: T, reducer: (accumulator: U, value: T[keyof T], key: keyof T) => U, initialValue: U): U`

Reduce an object to a single value.

```typescript
reduce({ a: 1, b: 2, c: 3 }, (acc, value) => acc + value, 0)
// => 6
```

## License

MIT
