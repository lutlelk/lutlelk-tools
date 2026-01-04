import { isObject, isPlainObject, isEmpty } from '@lutlelk-tools/core'

export { isObject, isPlainObject, isEmpty }

export function keys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  return Object.values(obj)
}

export function entries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}

export function fromEntries<T extends PropertyKey, U>(entries: readonly (readonly [T, U])[]): Record<T, U> {
  return Object.fromEntries(entries) as Record<T, U>
}

export function get<T = unknown>(obj: Record<string, unknown>, path: string | string[], defaultValue?: T): T {
  const keys = Array.isArray(path) ? path : path.split('.')
  let result: unknown = obj

  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue as T
    }
    result = (result as Record<string, unknown>)[key]
  }

  return (result ?? defaultValue) as T
}

export function set<T extends object>(obj: T, path: string | string[], value: unknown): T {
  const keys = Array.isArray(path) ? path : path.split('.')
  let target: Record<string, unknown> = obj as Record<string, unknown>

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in target) || typeof target[key] !== 'object' || target[key] === null) {
      target[key] = {}
    }
    target = target[key] as Record<string, unknown>
  }

  target[keys[keys.length - 1]] = value
  return obj
}

export function has(obj: Record<string, unknown>, path: string | string[]): boolean {
  const keys = Array.isArray(path) ? path : path.split('.')
  let result: unknown = obj

  for (const key of keys) {
    if (result === null || typeof result !== 'object' || !(key in result)) {
      return false
    }
    result = (result as Record<string, unknown>)[key]
  }

  return true
}

export function unset<T extends object>(obj: T, path: string | string[]): boolean {
  const keys = Array.isArray(path) ? path : path.split('.')
  let target: Record<string, unknown> = obj as Record<string, unknown>

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in target) || typeof target[key] !== 'object' || target[key] === null) {
      return false
    }
    target = target[key] as Record<string, unknown>
  }

  const lastKey = keys[keys.length - 1]
  if (lastKey in target) {
    delete target[lastKey]
    return true
  }

  return false
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
  const result = { ...obj }
  for (const key of keys) {
    delete result[key]
  }
  return result
}

export function invert<T extends Record<string, PropertyKey>>(obj: T): Record<T[keyof T], keyof T> {
  const result = {} as Record<T[keyof T], keyof T>
  for (const [key, value] of Object.entries(obj)) {
    result[value as T[keyof T]] = key as keyof T
  }
  return result
}

export function merge<T extends object, U extends object>(target: T, source: U): T & U {
  return { ...target, ...source }
}

export function deepMerge<T extends object, U extends object>(target: T, source: U): T & U {
  const result = { ...target } as T & U

  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = (target as Record<string, unknown>)[key]

    if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      result[key as keyof (T & U)] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      ) as (T & U)[keyof (T & U)]
    } else {
      result[key as keyof (T & U)] = sourceValue as (T & U)[keyof (T & U)]
    }
  }

  return result
}

export function clone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(item => clone(item)) as T
  if (isPlainObject(obj)) {
    const result = {} as T
    for (const key in obj) {
      (result as Record<string, unknown>)[key] = clone(obj[key])
    }
    return result
  }
  return obj
}

export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as T
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as T
  if (obj instanceof Map) {
    const result = new Map()
    obj.forEach((value, key) => {
      result.set(deepClone(key), deepClone(value))
    })
    return result as T
  }
  if (obj instanceof Set) {
    const result = new Set()
    obj.forEach(value => {
      result.add(deepClone(value))
    })
    return result as T
  }
  if (Array.isArray(obj)) return obj.map(item => deepClone(item)) as T
  if (isPlainObject(obj)) {
    const result = {} as T
    for (const key in obj) {
      (result as Record<string, unknown>)[key] = deepClone(obj[key])
    }
    return result
  }
  return obj
}

export function mapValues<T extends object, U>(obj: T, mapper: (value: T[keyof T], key: keyof T) => U): Record<keyof T, U> {
  const result = {} as Record<keyof T, U>
  for (const key in obj) {
    result[key] = mapper(obj[key], key)
  }
  return result
}

export function mapKeys<T extends object, K extends PropertyKey>(obj: T, mapper: (key: keyof T, value: T[keyof T]) => K): Record<K, T[keyof T]> {
  const result = {} as Record<K, T[keyof T]>
  for (const key in obj) {
    const newKey = mapper(key, obj[key])
    result[newKey] = obj[key]
  }
  return result
}

export function transform<T extends object, U>(
  obj: T,
  transformer: (result: U, value: T[keyof T], key: keyof T) => void,
  initialValue: U
): U {
  const result = initialValue
  for (const key in obj) {
    transformer(result, obj[key], key)
  }
  return result
}

export function defaults<T extends object, U extends object>(obj: T, defaults: U): T & U {
  const result = { ...defaults } as T & U
  for (const key in obj) {
    if ((obj as Record<string, unknown>)[key] !== undefined) {
      result[key as keyof (T & U)] = (obj as Record<string, unknown>)[key] as (T & U)[keyof (T & U)]
    } else {
      delete result[key as keyof (T & U)]
    }
  }
  return result
}

export function assign<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign(target, source)
}

export function size(obj: object): number {
  return Object.keys(obj).length
}

export function toPairs<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>
}

export function fromPairs<T extends PropertyKey, U>(pairs: readonly (readonly [T, U])[]): Record<T, U> {
  return Object.fromEntries(pairs) as Record<T, U>
}

export function mapKeysDeep<T extends object, K extends PropertyKey>(obj: T, mapper: (key: string) => K): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const key in obj) {
    const value = obj[key]
    const newKey = mapper(key)

    if (isPlainObject(value)) {
      result[newKey as string] = mapKeysDeep(value as Record<string, unknown>, mapper)
    } else if (Array.isArray(value)) {
      result[newKey as string] = value.map(item =>
        isPlainObject(item) ? mapKeysDeep(item as Record<string, unknown>, mapper) : item
      )
    } else {
      result[newKey as string] = value
    }
  }

  return result
}

export function mapValuesDeep<T extends object>(obj: T, mapper: (value: unknown, key: string) => unknown): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const key in obj) {
    const value = obj[key]

    if (isPlainObject(value)) {
      result[key] = mapValuesDeep(value as Record<string, unknown>, mapper)
    } else if (Array.isArray(value)) {
      result[key] = value.map(item =>
        isPlainObject(item) ? mapValuesDeep(item as Record<string, unknown>, mapper) : mapper(item, key)
      )
    } else {
      result[key] = mapper(value, key)
    }
  }

  return result
}

export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  if (a === null || b === null) return a === b
  if (typeof a !== typeof b) return false

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false
    }
    return true
  }

  if (isPlainObject(a) && isPlainObject(b)) {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) return false
    for (const key of keysA) {
      if (!isEqual(a[key], b[key])) return false
    }
    return true
  }

  return false
}

export function findKey<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): keyof T | undefined {
  for (const key in obj) {
    if (predicate(obj[key], key)) {
      return key
    }
  }
  return undefined
}

export function findValue<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): T[keyof T] | undefined {
  for (const key in obj) {
    if (predicate(obj[key], key)) {
      return obj[key]
    }
  }
  return undefined
}

export function some<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean {
  for (const key in obj) {
    if (predicate(obj[key], key)) {
      return true
    }
  }
  return false
}

export function every<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): boolean {
  for (const key in obj) {
    if (!predicate(obj[key], key)) {
      return false
    }
  }
  return true
}

export function forEach<T extends object>(obj: T, iteratee: (value: T[keyof T], key: keyof T) => void): void {
  for (const key in obj) {
    iteratee(obj[key], key)
  }
}

export function reduce<T extends object, U>(
  obj: T,
  reducer: (accumulator: U, value: T[keyof T], key: keyof T) => U,
  initialValue: U
): U {
  let result = initialValue
  for (const key in obj) {
    result = reducer(result, obj[key], key)
  }
  return result
}
