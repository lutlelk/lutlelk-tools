# @lutlelk-tools/array

A lightweight array manipulation utility library for JavaScript/TypeScript.

## Installation

```bash
npm install @lutlelk-tools/array
# or
pnpm add @lutlelk-tools/array
# or
yarn add @lutlelk-tools/array
```

## Usage

```typescript
import { chunk, uniq, flatten, groupBy, sort, find, filter, map } from '@lutlelk-tools/array'

// Or import single function for tree-shaking
import chunk from '@lutlelk-tools/array/chunk'
```

## API

### Chunking

#### `chunk<T>(arr: readonly T[], size: number): T[][]`

Split an array into chunks of the specified size.

```typescript
chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

### Flattening

#### `flatten<T>(arr: readonly T[]): T[]`

Flatten a nested array structure.

```typescript
flatten([[1, 2], [3, [4, 5]]])
// => [1, 2, 3, 4, 5]
```

### Uniqueness

#### `uniq<T>(arr: readonly T[]): T[]`

Remove duplicate values from an array.

```typescript
uniq([1, 2, 2, 3, 4, 4, 5])
// => [1, 2, 3, 4, 5]
```

### Grouping

#### `groupBy<T>(arr: readonly T[], iteratee: (item: T) => string | number): Record<string, T[]>`

Group array elements by a key returned by iteratee.

```typescript
groupBy([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 }
], item => item.age)
// => { '25': [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }], '30': [{ name: 'Charlie', age: 30 }] }
```

### Sorting

#### `sort<T>(arr: readonly T[], comparator?: (a: T, b: T) => number): T[]`

Sort an array with optional comparator.

```typescript
sort([3, 1, 4, 1, 5])
// => [1, 1, 3, 4, 5]

sort([{ a: 2 }, { a: 1 }], (x, y) => x.a - y.a)
// => [{ a: 1 }, { a: 2 }]
```

#### `sortBy<T>(arr: readonly T[], iteratee: (item: T) => number | string): T[]`

Sort an array by a key returned by iteratee.

```typescript
sortBy([{ name: 'Bob' }, { name: 'Alice' }], item => item.name)
// => [{ name: 'Alice' }, { name: 'Bob' }]
```

#### `reverse<T>(arr: readonly T[]): T[]`

Reverse an array.

```typescript
reverse([1, 2, 3])
// => [3, 2, 1]
```

### Finding

#### `find<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): T | undefined`

Find the first element that satisfies the predicate.

```typescript
find([1, 2, 3, 4], x => x > 2)
// => 3
```

#### `findIndex<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): number`

Find the index of the first element that satisfies the predicate.

```typescript
findIndex([1, 2, 3, 4], x => x > 2)
// => 2
```

#### `findLast<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): T | undefined`

Find the last element that satisfies the predicate.

```typescript
findLast([1, 2, 3, 4, 5], x => x > 2)
// => 5
```

#### `findLastIndex<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): number`

Find the index of the last element that satisfies the predicate.

```typescript
findLastIndex([1, 2, 3, 4, 5], x => x > 2)
// => 4
```

#### `includes<T>(arr: readonly T[], value: T, fromIndex?: number): boolean`

Check if array includes a value.

```typescript
includes([1, 2, 3], 2)
// => true
```

#### `indexOf<T>(arr: readonly T[], value: T, fromIndex?: number): number`

Find the index of a value in array.

```typescript
indexOf([1, 2, 3], 2)
// => 1
```

#### `lastIndexOf<T>(arr: readonly T[], value: T, fromIndex?: number): number`

Find the last index of a value in array.

```typescript
lastIndexOf([1, 2, 3, 2, 1], 2)
// => 3
```

### Transformation

#### `filter<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): T[]`

Filter array elements that satisfy the predicate.

```typescript
filter([1, 2, 3, 4, 5], x => x > 2)
// => [3, 4, 5]
```

#### `map<T, U>(arr: readonly T[], iteratee: (item: T, index: number) => U): U[]`

Transform array elements using iteratee.

```typescript
map([1, 2, 3], x => x * 2)
// => [2, 4, 6]
```

#### `reduce<T, U>(arr: readonly T[], reducer: (acc: U, item: T, index: number) => U, initialValue: U): U`

Reduce array to a single value.

```typescript
reduce([1, 2, 3], (acc, x) => acc + x, 0)
// => 6
```

#### `forEach<T>(arr: readonly T[], iteratee: (item: T, index: number) => void): void`

Iterate over array elements.

```typescript
forEach([1, 2, 3], (x, i) => console.log(i, x))
// => 0 1
// => 1 2
// => 2 3
```

#### `some<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): boolean`

Check if any element satisfies the predicate.

```typescript
some([1, 2, 3], x => x > 2)
// => true
```

#### `every<T>(arr: readonly T[], predicate: (item: T, index: number) => boolean): boolean`

Check if all elements satisfy the predicate.

```typescript
every([1, 2, 3], x => x > 0)
// => true
```

## License

ISC
