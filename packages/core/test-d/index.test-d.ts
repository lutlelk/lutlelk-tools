import { expectType } from 'tsd'
import {
  isString,
  isNumber,
  isBoolean,
  isNull,
  isUndefined,
  isNil,
  isFunction,
  isArray,
  isObject,
  isPlainObject,
  isEmpty,
  noop,
  identity,
  times,
  toString,
  toNumber,
  toBoolean,
  isStrictEqual
} from '../src'

expectType<boolean>(isString('hello'))
expectType<boolean>(isString(123))

expectType<boolean>(isNumber(123))
expectType<boolean>(isNumber('123'))

expectType<boolean>(isBoolean(true))
expectType<boolean>(isBoolean(1))

expectType<boolean>(isNull(null))
expectType<boolean>(isNull(undefined))

expectType<boolean>(isUndefined(undefined))
expectType<boolean>(isUndefined(null))

expectType<boolean>(isNil(null))
expectType<boolean>(isNil(undefined))
expectType<boolean>(isNil(0))

expectType<boolean>(isFunction(() => {}))
expectType<boolean>(isFunction('function'))

expectType<boolean>(isArray([1, 2, 3]))
expectType<boolean>(isArray({}))

expectType<boolean>(isObject({ a: 1 }))
expectType<boolean>(isObject([1, 2]))

expectType<boolean>(isPlainObject({}))
expectType<boolean>(isPlainObject(new Date()))

expectType<boolean>(isEmpty(null))
expectType<boolean>(isEmpty(''))
expectType<boolean>(isEmpty([1]))

expectType<void>(noop())

expectType<number>(identity(1 as number))
expectType<string>(identity('hello' as string))
expectType<{ a: number }>(identity({ a: 1 }))

expectType<number[]>(times(3, i => i * 2))
expectType<string[]>(times(3, i => i.toString()))

expectType<string>(toString(123))
expectType<string>(toString(null))
expectType<string>(toString(undefined))

expectType<number>(toNumber('123'))
expectType<number>(toNumber(true))
expectType<number>(toNumber(null))

expectType<boolean>(toBoolean('true'))
expectType<boolean>(toBoolean(1))
expectType<boolean>(toBoolean(null))

expectType<boolean>(isStrictEqual(1, 1))
