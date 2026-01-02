# @fe-utils/array

数组操作工具函数集合。

## 安装

```bash
pnpm add @fe-utils/array
```

## 使用

```ts
import { chunk, flatten, uniq, groupBy, sort, find, filter, map, reduce } from '@fe-utils/array'
```

## API

### chunk

将数组分割成指定大小的块。

```ts
chunk<T>(array: T[], size: number): T[][]
```

**示例**

```ts
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
```

### flatten

扁平化数组。

```ts
flatten<T>(array: unknown[]): T[]
```

**示例**

```ts
flatten([1, [2, [3, [4]], 5]]) // [1, 2, [3, [4]], 5]
```

### uniq

数组去重。

```ts
uniq<T>(array: T[]): T[]
```

**示例**

```ts
uniq([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
```

### groupBy

根据指定条件分组。

```ts
groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>
```

**示例**

```ts
groupBy(
  [
    { id: 1, type: 'a' },
    { id: 2, type: 'b' },
    { id: 3, type: 'a' }
  ],
  'type'
)
// { a: [{ id: 1, type: 'a' }, { id: 3, type: 'a' }], b: [{ id: 2, type: 'b' }] }
```

### sort

数组排序。

```ts
sort<T>(array: T[]): T[]
sortBy<T>(array: T[], iteratee: (item: T) => unknown): T[]
reverse<T>(array: T[]): T[]
```

**示例**

```ts
sort([3, 1, 2]) // [1, 2, 3]
sortBy(
  [{ name: 'b' }, { name: 'a' }],
  item => item.name
) // [{ name: 'a' }, { name: 'b' }]
reverse([1, 2, 3]) // [3, 2, 1]
```

### find

查找元素。

```ts
find<T>(array: T[], predicate: (item: T, index: number) => boolean): T | undefined
findIndex<T>(array: T[], predicate: (item: T, index: number) => boolean): number
findLast<T>(array: T[], predicate: (item: T, index: number) => boolean): T | undefined
findLastIndex<T>(array: T[], predicate: (item: T, index: number) => boolean): number
includes<T>(array: T[], value: T): boolean
indexOf<T>(array: T[], value: T): number
lastIndexOf<T>(array: T[], value: T): number
```

**示例**

```ts
find([1, 2, 3], x => x > 1) // 2
findIndex([1, 2, 3], x => x > 1) // 1
includes([1, 2, 3], 2) // true
indexOf([1, 2, 3], 2) // 1
```

### transform

数组转换。

```ts
filter<T>(array: T[], predicate: (item: T, index: number) => boolean): T[]
map<T, U>(array: T[], iteratee: (item: T, index: number) => U): U[]
reduce<T, U>(array: T[], iteratee: (acc: U, item: T, index: number) => U, initial: U): U
forEach<T>(array: T[], iteratee: (item: T, index: number) => void): void
some<T>(array: T[], predicate: (item: T, index: number) => boolean): boolean
every<T>(array: T[], predicate: (item: T, index: number) => boolean): boolean
```

**示例**

```ts
filter([1, 2, 3], x => x > 1) // [2, 3]
map([1, 2, 3], x => x * 2) // [2, 4, 6]
reduce([1, 2, 3], (acc, x) => acc + x, 0) // 6
some([1, 2, 3], x => x > 2) // true
every([1, 2, 3], x => x > 0) // true
```
