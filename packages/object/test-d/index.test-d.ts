import { expectType } from 'tsd'
import {
  isObject,
  isPlainObject,
  isEmpty,
  keys,
  values,
  entries,
  fromEntries,
  get,
  set,
  has,
  unset,
  pick,
  omit,
  invert,
  merge,
  deepMerge,
  clone,
  deepClone,
  mapValues,
  mapKeys,
  transform,
  defaults,
  assign,
  size,
  toPairs,
  fromPairs,
  mapKeysDeep,
  mapValuesDeep,
  isEqual,
  findKey,
  findValue,
  some,
  every,
  forEach,
  reduce
} from '../src'

const obj = { a: 1, b: 2, c: 3 }

expectType<boolean>(isObject({}))
expectType<boolean>(isObject([]))
expectType<boolean>(isObject(null))
expectType<boolean>(isPlainObject({}))
expectType<boolean>(isPlainObject([]))
expectType<boolean>(isEmpty({}))
expectType<boolean>(isEmpty([]))
expectType<boolean>(isEmpty(null))

expectType<Array<'a' | 'b' | 'c'>>(keys(obj))
expectType<number[]>(values(obj))
expectType<Array<['a' | 'b' | 'c', number]>>(entries(obj))

expectType<Record<string, number>>(fromEntries([['a', 1], ['b', 2]]))

expectType<number>(get({ a: { b: 1 } }, 'a.b'))
expectType<number>(get({ a: { b: 1 } }, 'a.b', 0 as number))
expectType<number>(get({ a: { b: 1 } }, ['a', 'b']))

expectType<{ a: { b: number } }>(set({ a: { b: 0 } }, 'a.b', 1))
expectType<{ a: { b: number } }>(set({ a: { b: 0 } }, ['a', 'b'], 1))

expectType<boolean>(has({ a: { b: 1 } }, 'a.b'))
expectType<boolean>(has({ a: { b: 1 } }, ['a', 'b']))

expectType<boolean>(unset({ a: { b: 1 } }, 'a.b'))
expectType<boolean>(unset({ a: { b: 1 } }, ['a', 'b']))

expectType<{ a: number; b: number }>(pick(obj, ['a', 'b']))
expectType<{ c: number }>(omit(obj, ['a', 'b']))

expectType<Record<number, 'a' | 'b' | 'c'>>(invert({ a: 1, b: 2, c: 3 }))

expectType<{ a: number } & { b: string }>(merge({ a: 1 }, { b: 'test' }))
expectType<{ a: number } & { b: string }>(deepMerge({ a: 1 }, { b: 'test' }))

expectType<{ a: number; b: { c: number } }>(clone({ a: 1, b: { c: 1 } }))
expectType<{ a: number; b: { c: number } }>(deepClone({ a: 1, b: { c: 1 } }))

expectType<Record<'a' | 'b' | 'c', string>>(mapValues(obj, v => v.toString()))
expectType<Record<string, number>>(mapKeys(obj, k => k.toUpperCase()))

expectType<number[]>(transform(obj, (acc, v) => acc.push(v), [] as number[]))

expectType<{ a: number } & { a: number; b: number }>(defaults({ a: 1 }, { a: 0, b: 2 }))

expectType<{ a: number } & { b: string }>(assign({ a: 1 }, { b: 'test' }))

expectType<number>(size(obj))

expectType<Array<['a' | 'b' | 'c', number]>>(toPairs(obj))
expectType<Record<string, number>>(fromPairs([['a', 1], ['b', 2]]))

expectType<Record<string, unknown>>(mapKeysDeep({ a: 1, b: { c: 2 } }, k => k.toUpperCase()))
expectType<Record<string, unknown>>(mapValuesDeep({ a: 1, b: { c: 2 } }, v => (typeof v === 'number' ? v * 2 : v)))

expectType<boolean>(isEqual({ a: 1 }, { a: 1 }))
expectType<boolean>(isEqual([1, 2], [1, 2]))

expectType<'a' | 'b' | 'c' | undefined>(findKey(obj, v => v > 1))
expectType<number | undefined>(findValue(obj, v => v > 1))

expectType<boolean>(some(obj, v => v > 1))
expectType<boolean>(every(obj, v => v > 0))

forEach(obj, (v, k) => {
  expectType<number>(v)
  expectType<'a' | 'b' | 'c'>(k)
})

expectType<number>(reduce(obj, (acc, v) => acc + v, 0))
expectType<Record<string, number>>(reduce(obj, (acc, v, k) => ({ ...acc, [k]: v }), {} as Record<string, number>))
