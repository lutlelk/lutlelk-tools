# @fe-utils/object

对象操作工具函数集合。

## 安装

```bash
pnpm add @fe-utils/object
```

## 使用

```ts
import {
  keys,
  values,
  entries,
  get,
  set,
  pick,
  omit,
  merge,
  deepMerge,
  clone,
  deepClone
} from '@fe-utils/object'
```

## API

### 对象操作函数

#### keys

获取对象的所有键。

```ts
keys<T extends object>(obj: T): Array<keyof T>
```

**示例**

```ts
keys({ a: 1, b: 2 }) // ['a', 'b']
```

#### values

获取对象的所有值。

```ts
values<T extends object>(obj: T): Array<T[keyof T]>
```

**示例**

```ts
values({ a: 1, b: 2 }) // [1, 2]
```

#### entries

获取对象的键值对数组。

```ts
entries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]>
```

**示例**

```ts
entries({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]
```

### 路径操作

#### get

获取对象路径的值。

```ts
get<T = unknown>(obj: Record<string, unknown>, path: string | string[], defaultValue?: T): T
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
set<T extends object>(obj: T, path: string | string[], value: unknown): T
```

**示例**

```ts
const obj = { a: {} }
set(obj, 'a.b.c', 1)
// obj = { a: { b: { c: 1 } } }
```

#### has

检查对象路径是否存在。

```ts
has(obj: Record<string, unknown>, path: string | string[]): boolean
```

**示例**

```ts
const obj = { a: { b: 1 } }
has(obj, 'a.b') // true
has(obj, 'a.c') // false
```

#### unset

删除对象路径的值。

```ts
unset<T extends object>(obj: T, path: string | string[]): boolean
```

**示例**

```ts
const obj = { a: { b: 1 } }
unset(obj, 'a.b') // true
// obj = { a: {} }
```

### 选择操作

#### pick

选择对象的指定属性。

```ts
pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K>
```

**示例**

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
```

#### omit

排除对象的指定属性。

```ts
omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>
```

**示例**

```ts
omit({ a: 1, b: 2, c: 3 }, ['b']) // { a: 1, c: 3 }
```

### 合并操作

#### merge

浅合并对象。

```ts
merge<T extends object, U extends object>(target: T, source: U): T & U
```

**示例**

```ts
merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
```

#### deepMerge

深合并对象。

```ts
deepMerge<T extends object, U extends object>(target: T, source: U): T & U
```

**示例**

```ts
deepMerge({ a: { b: 1 } }, { a: { c: 2 } })
// { a: { b: 1, c: 2 } }
```

### 克隆操作

#### clone

浅克隆对象。

```ts
clone<T>(obj: T): T
```

**示例**

```ts
const obj = { a: 1 }
const cloned = clone(obj)
cloned.a = 2
console.log(obj.a) // 1
```

#### deepClone

深克隆对象。

```ts
deepClone<T>(obj: T): T
```

**示例**

```ts
const obj = { a: { b: 1 } }
const cloned = deepClone(obj)
cloned.a.b = 2
console.log(obj.a.b) // 1
```

### 转换操作

#### mapValues

映射对象的值。

```ts
mapValues<T extends object, U>(obj: T, mapper: (value: T[keyof T], key: keyof T) => U): Record<keyof T, U>
```

**示例**

```ts
mapValues({ a: 1, b: 2 }, (v, k) => v * 2) // { a: 2, b: 4 }
```

#### mapKeys

映射对象的键。

```ts
mapKeys<T extends object, K extends PropertyKey>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => K): Record<K, T[keyof T]>
```

**示例**

```ts
mapKeys({ a: 1, b: 2 }, (k, v) => k.toUpperCase()) // { A: 1, B: 2 }
```

#### invert

反转对象的键值。

```ts
invert<T extends Record<string, PropertyKey>>(obj: T): Record<T[keyof T], keyof T>
```

**示例**

```ts
invert({ a: 'x', b: 'y' }) // { x: 'a', y: 'b' }
```

### 其他操作

#### size

获取对象的大小。

```ts
size(obj: object): number
```

**示例**

```ts
size({ a: 1, b: 2 }) // 2
```

#### isEqual

深度比较两个对象。

```ts
isEqual(a: unknown, b: unknown): boolean
```

**示例**

```ts
isEqual({ a: 1 }, { a: 1 }) // true
isEqual({ a: 1 }, { a: 2 }) // false
```

#### findKey

查找符合条件的键。

```ts
findKey<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): keyof T | undefined
```

**示例**

```ts
findKey({ a: 1, b: 2, c: 3 }, v => v > 1) // 'b'
```

#### defaults

设置默认值。

```ts
defaults<T extends object, U extends object>(obj: T, defaults: U): T & U
```

**示例**

```ts
defaults({ a: 1 }, { a: 0, b: 2 }) // { a: 1, b: 2 }
```
