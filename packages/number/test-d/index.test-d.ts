import { expectType } from 'tsd'
import {
  isNumber,
  isInteger,
  isFloat,
  isPositive,
  isNegative,
  isZero,
  isEven,
  isOdd,
  clamp,
  random,
  randomInt,
  range,
  round,
  ceil,
  floor,
  toFixed,
  toPrecision,
  format,
  FormatOptions,
  sum,
  average,
  max,
  min,
  median,
  percent,
  toPercent,
  fromPercent,
  toBytes,
  fromBytes,
  toCurrency,
  CurrencyOptions,
  toOrdinal,
  gcd,
  lcm,
  factorial,
  fibonacci,
  isPrime,
  degToRad,
  radToDeg,
  toSafeInteger,
  isSafeInteger,
  truncate,
  abs,
  sign,
  pow,
  sqrt,
  cbrt,
  log,
  log10,
  log2,
  exp,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  atan2,
  toHex,
  fromHex,
  toBinary,
  fromBinary,
  toOctal,
  fromOctal,
  pad
} from '../src'

expectType<boolean>(isNumber(123))
expectType<boolean>(isNumber('123'))
expectType<boolean>(isNumber(undefined))

expectType<boolean>(isInteger(123))
expectType<boolean>(isInteger(12.3))
expectType<boolean>(isInteger('123'))

expectType<boolean>(isFloat(12.3))
expectType<boolean>(isFloat(123))
expectType<boolean>(isFloat('12.3'))

expectType<boolean>(isPositive(123))
expectType<boolean>(isPositive(-123))
expectType<boolean>(isPositive('123'))

expectType<boolean>(isNegative(-123))
expectType<boolean>(isNegative(123))
expectType<boolean>(isNegative('-123'))

expectType<boolean>(isZero(0))
expectType<boolean>(isZero(1))

expectType<boolean>(isEven(2))
expectType<boolean>(isOdd(3))

expectType<number>(clamp(5, 0, 10))
expectType<number>(clamp(-5, 0, 10))
expectType<number>(clamp(15, 0, 10))

expectType<number>(random())
expectType<number>(random(0, 10))

expectType<number>(randomInt(0, 10))

expectType<number[]>(range(0, 10))
expectType<number[]>(range(10, 0, -1))

expectType<number>(round(3.14159))
expectType<number>(round(3.14159, 2))

expectType<number>(ceil(3.1))
expectType<number>(ceil(3.1, 1))

expectType<number>(floor(3.9))
expectType<number>(floor(3.9, 1))

expectType<string>(toFixed(3.14159, 2))

expectType<string>(toPrecision(3.14159, 4))

expectType<string>(format(1234.567))
expectType<string>(format(1234.567, { decimals: 2 }))
expectType<string>(format(1234.567, { decimals: 2, thousandsSeparator: ',' }))
expectType<string>(format(1234.567, { decimals: 2, decimalSeparator: '.' }))
expectType<string>(format(1234.567, { prefix: '$' }))
expectType<string>(format(1234.567, { suffix: ' USD' }))

const formatOptions: FormatOptions = { decimals: 2, thousandsSeparator: ',', decimalSeparator: '.', prefix: '$', suffix: ' USD' }
expectType<FormatOptions>(formatOptions)

expectType<number>(sum(1, 2, 3, 4, 5))
expectType<number>(sum())

expectType<number>(average(1, 2, 3, 4, 5))
expectType<number>(average())

expectType<number>(max(1, 2, 3, 4, 5))
expectType<number>(min(1, 2, 3, 4, 5))

expectType<number>(median(1, 2, 3, 4, 5))
expectType<number>(median(1, 2, 3, 4))

expectType<number>(percent(25, 100))
expectType<number>(percent(25, 100, 1))

expectType<string>(toPercent(0.25))
expectType<string>(toPercent(0.25, 1))

expectType<number>(fromPercent('25%'))

expectType<string>(toBytes(1024))
expectType<string>(toBytes(1024, 2))

expectType<number>(fromBytes('1 KB'))
expectType<number>(fromBytes('1.5 MB'))

expectType<string>(toCurrency(1234.56))
expectType<string>(toCurrency(1234.56, { currency: 'USD' }))
expectType<string>(toCurrency(1234.56, { currency: 'CNY', locale: 'zh-CN' }))

const currencyOptions: CurrencyOptions = { currency: 'USD', decimals: 2, locale: 'en-US' }
expectType<CurrencyOptions>(currencyOptions)

expectType<string>(toOrdinal(1))
expectType<string>(toOrdinal(2))
expectType<string>(toOrdinal(3))
expectType<string>(toOrdinal(4))

expectType<number>(gcd(12, 18))
expectType<number>(lcm(4, 6))

expectType<number>(factorial(5))
expectType<number>(fibonacci(10))

expectType<boolean>(isPrime(7))
expectType<boolean>(isPrime(8))

expectType<number>(degToRad(180))
expectType<number>(radToDeg(Math.PI))

expectType<number>(toSafeInteger(123.45))
expectType<number>(toSafeInteger('123.45'))
expectType<number>(toSafeInteger(Infinity))

expectType<boolean>(isSafeInteger(123))
expectType<boolean>(isSafeInteger(Number.MAX_SAFE_INTEGER))

expectType<number>(truncate(3.9))
expectType<number>(truncate(3.999, 2))

expectType<number>(abs(-5))
expectType<number>(sign(5))
expectType<number>(sign(-5))
expectType<number>(sign(0))

expectType<number>(pow(2, 3))
expectType<number>(sqrt(16))
expectType<number>(cbrt(8))

expectType<number>(log(100))
expectType<number>(log(100, 10))
expectType<number>(log10(100))
expectType<number>(log2(8))
expectType<number>(exp(1))

expectType<number>(sin(Math.PI / 2))
expectType<number>(cos(0))
expectType<number>(tan(Math.PI / 4))

expectType<number>(asin(1))
expectType<number>(acos(0))
expectType<number>(atan(1))
expectType<number>(atan2(1, 1))

expectType<string>(toHex(255))
expectType<string>(toHex(255, false))
expectType<number>(fromHex('ff'))
expectType<number>(fromHex('0xff'))

expectType<string>(toBinary(10))
expectType<string>(toBinary(10, false))
expectType<number>(fromBinary('1010'))
expectType<number>(fromBinary('0b1010'))

expectType<string>(toOctal(8))
expectType<string>(toOctal(8, false))
expectType<number>(fromOctal('10'))
expectType<number>(fromOctal('0o10'))

expectType<string>(pad(5))
expectType<string>(pad(5, 4))
expectType<string>(pad(5, 4, '0'))
