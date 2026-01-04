# @lutlelk-tools/array

Collection of array manipulation utility functions.

## Installation

```bash
pnpm add @lutlelk-tools/array
```

## Usage

```ts
import { chunk, flatten, uniq, groupBy, sort, find, filter, map, reduce } from '@lutlelk-tools/array'
```

## API

### chunk

Splits an array into chunks of specified size.

```ts
chunk<T>(array: T[], size: number): T[][]
```

**Examples**

```ts
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
```

### flatten

Flattens an array.

```ts
flatten<T>(array: unknown[]): T[]
```

**Examples**

```ts
flatten([1, [2, [3, [4]], 5]]) // [1, 2, [3, [4]], 5]
```

### uniq

Removes duplicate values from an array.

```ts
uniq<T>(array: T[]): T[]
```

**Examples**

```ts
uniq([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
uniq(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
```

### groupBy

Groups array elements by a key.

```ts
groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>
```

**Examples**

```ts
groupBy(
  [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'carrot' }
  ],
  'type'
)
// { fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }], vegetable: [{ type: 'vegetable', name: 'carrot' }] }
```

### sort

Sorts an array.

```ts
sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[]
```

**Examples**

```ts
sort([3, 1, 4, 1, 5]) // [1, 1, 3, 4, 5]
sort(['b', 'a', 'c']) // ['a', 'b', 'c']
```

### sortBy

Sorts an array by a key.

```ts
sortBy<T>(array: T[], key: keyof T | ((item: T) => any)): T[]
```

**Examples**

```ts
sortBy(
  [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ],
  'age'
)
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
```

### reverse

Reverses an array.

```ts
reverse<T>(array: T[]): T[]
```

**Examples**

```ts
reverse([1, 2, 3]) // [3, 2, 1]
```

### find

Finds the first element that satisfies the predicate.

```ts
find<T>(array: T[], predicate: (item: T, index: number) => boolean): T | undefined
```

**Examples**

```ts
find([1, 2, 3, 4, 5], x => x > 3) // 4
find([{ id: 1 }, { id: 2 }], x => x.id === 2) // { id: 2 }
```

### findIndex

Finds the index of the first element that satisfies the predicate.

```ts
findIndex<T>(array: T[], predicate: (item: T, index: number) => boolean): number
```

**Examples**

```ts
findIndex([1, 2, 3, 4, 5], x => x > 3) // 3
```

### findLast

Finds the last element that satisfies the predicate.

```ts
findLast<T>(array: T[], predicate: (item: T, index: number) => boolean): T | undefined
```

**Examples**

```ts
findLast([1, 2, 3, 4, 5], x => x < 3) // 2
```

### findLastIndex

Finds the index of the last element that satisfies the predicate.

```ts
findLastIndex<T>(array: T[], predicate: (item: T, index: number) => boolean): number
```

**Examples**

```ts
findLastIndex([1, 2, 3, 4, 5], x => x < 3) // 1
```

### includes

Checks if array includes a value.

```ts
includes<T>(array: T[], value: T): boolean
```

**Examples**

```ts
includes([1, 2, 3], 2) // true
includes([1, 2, 3], 4) // false
```

### indexOf

Finds the index of a value.

```ts
indexOf<T>(array: T[], value: T): number
```

**Examples**

```ts
indexOf([1, 2, 3], 2) // 1
indexOf([1, 2, 3], 4) // -1
```

### lastIndexOf

Finds the last index of a value.

```ts
lastIndexOf<T>(array: T[], value: T): number
```

**Examples**

```ts
lastIndexOf([1, 2, 3, 2], 2) // 3
```

### filter

Filters array elements.

```ts
filter<T>(array: T[], predicate: (item: T, index: number) => boolean): T[]
```

**Examples**

```ts
filter([1, 2, 3, 4, 5], x => x > 2) // [3, 4, 5]
```

### map

Maps array elements.

```ts
map<T, U>(array: T[], mapper: (item: T, index: number) => U): U[]
```

**Examples**

```ts
map([1, 2, 3], x => x * 2) // [2, 4, 6]
```

### reduce

Reduces array to a single value.

```ts
reduce<T, U>(array: T[], reducer: (acc: U, item: T, index: number) => U, initialValue: U): U
```

**Examples**

```ts
reduce([1, 2, 3], (acc, x) => acc + x, 0) // 6
```

### forEach

Iterates over array elements.

```ts
forEach<T>(array: T[], iteratee: (item: T, index: number) => void): void
```

**Examples**

```ts
forEach([1, 2, 3], x => console.log(x))
```

### some

Checks if any element satisfies the predicate.

```ts
some<T>(array: T[], predicate: (item: T, index: number) => boolean): boolean
```

**Examples**

```ts
some([1, 2, 3], x => x > 2) // true
some([1, 2, 3], x => x > 10) // false
```

### every

Checks if all elements satisfy the predicate.

```ts
every<T>(array: T[], predicate: (item: T, index: number) => boolean): boolean
```

**Examples**

```ts
every([1, 2, 3], x => x > 0) // true
every([1, 2, 3], x => x > 2) // false
```
