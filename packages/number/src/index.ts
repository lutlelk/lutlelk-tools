import { isNumber } from '@fe-utils/core'

export { isNumber }

export type NumberInput = number | string

export function isInteger(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value)
}

export function isFloat(value: unknown): value is number {
  return isNumber(value) && !Number.isInteger(value)
}

export function isPositive(value: unknown): value is number {
  return isNumber(value) && value > 0
}

export function isNegative(value: unknown): value is number {
  return isNumber(value) && value < 0
}

export function isZero(value: unknown): boolean {
  return value === 0
}

export function isEven(value: number): boolean {
  return value % 2 === 0
}

export function isOdd(value: number): boolean {
  return value % 2 !== 0
}

export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min
  if (value > max) return max
  return value
}

export function random(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min) + min
}

export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max + 1))
}

export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = []
  const isPositiveStep = step > 0

  if (isPositiveStep) {
    for (let i = start; i <= end; i += step) {
      result.push(i)
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i)
    }
  }

  return result
}

export function round(value: number, precision: number = 0): number {
  const factor = Math.pow(10, precision)
  return Math.round(value * factor) / factor
}

export function ceil(value: number, precision: number = 0): number {
  const factor = Math.pow(10, precision)
  return Math.ceil(value * factor) / factor
}

export function floor(value: number, precision: number = 0): number {
  const factor = Math.pow(10, precision)
  return Math.floor(value * factor) / factor
}

export function toFixed(value: number, digits: number = 0): string {
  return value.toFixed(digits)
}

export function toPrecision(value: number, precision: number): string {
  return value.toPrecision(precision)
}

export function format(value: number, options: FormatOptions = {}): string {
  const {
    decimals = 2,
    thousandsSeparator = ',',
    decimalSeparator = '.',
    prefix = '',
    suffix = ''
  } = options

  const rounded = round(value, decimals)
  const [integerPart, decimalPart] = rounded.toString().split('.')

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)

  let result = prefix + formattedInteger

  if (decimals > 0) {
    const decimalStr = decimalPart || ''
    const paddedDecimal = decimalStr.padEnd(decimals, '0').slice(0, decimals)
    result += decimalSeparator + paddedDecimal
  }

  return result + suffix
}

export interface FormatOptions {
  decimals?: number
  thousandsSeparator?: string
  decimalSeparator?: string
  prefix?: string
  suffix?: string
}

export function sum(...values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0)
}

export function average(...values: number[]): number {
  if (values.length === 0) return 0
  return sum(...values) / values.length
}

export function max(...values: number[]): number {
  return Math.max(...values)
}

export function min(...values: number[]): number {
  return Math.min(...values)
}

export function median(...values: number[]): number {
  if (values.length === 0) return 0

  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
  return sorted[mid]
}

export function percent(value: number, total: number, decimals: number = 2): number {
  if (total === 0) return 0
  return round((value / total) * 100, decimals)
}

export function toPercent(value: number, decimals: number = 2): string {
  return `${round(value * 100, decimals)}%`
}

export function fromPercent(percent: string): number {
  return parseFloat(percent.replace('%', '')) / 100
}

export function toBytes(value: number, decimals: number = 2): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(decimals)} ${units[unitIndex]}`
}

export function fromBytes(str: string): number {
  const match = str.match(/^([\d.]+)\s*(B|KB|MB|GB|TB|PB)$/i)
  if (!match) return 0

  const value = parseFloat(match[1])
  const unit = match[2].toUpperCase()
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  const unitIndex = units.indexOf(unit)

  return value * Math.pow(1024, unitIndex)
}

export function toCurrency(value: number, options: CurrencyOptions = {}): string {
  const {
    currency = 'USD',
    decimals = 2,
    locale = 'en-US'
  } = options

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value)
}

export interface CurrencyOptions {
  currency?: string
  decimals?: number
  locale?: string
}

export function toOrdinal(value: number): string {
  const absValue = Math.abs(value)
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = absValue % 100
  const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]
  return value + suffix
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a
}

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0
  return Math.abs((a * b) / gcd(a, b))
}

export function factorial(n: number): number {
  if (n < 0) return 0
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

export function fibonacci(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    const temp = a + b
    a = b
    b = temp
  }
  return b
}

export function isPrime(n: number): boolean {
  if (n <= 1) return false
  if (n <= 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

export function degToRad(degrees: number): number {
  return (degrees * Math.PI) / 180
}

export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI
}

export function toSafeInteger(value: unknown): number {
  const num = Number(value)
  if (isNaN(num)) return 0
  if (!isFinite(num)) return (num > 0 ? 1 : -1) * Number.MAX_SAFE_INTEGER
  const integer = Math.floor(num)
  return clamp(integer, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

export function isSafeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value)
}

export function truncate(value: number, precision: number = 0): number {
  const factor = Math.pow(10, precision)
  return Math.trunc(value * factor) / factor
}

export function abs(value: number): number {
  return Math.abs(value)
}

export function sign(value: number): number {
  return Math.sign(value)
}

export function pow(base: number, exponent: number): number {
  return Math.pow(base, exponent)
}

export function sqrt(value: number): number {
  return Math.sqrt(value)
}

export function cbrt(value: number): number {
  return Math.cbrt(value)
}

export function log(value: number, base: number = Math.E): number {
  return Math.log(value) / Math.log(base)
}

export function log10(value: number): number {
  return Math.log10(value)
}

export function log2(value: number): number {
  return Math.log2(value)
}

export function exp(value: number): number {
  return Math.exp(value)
}

export function sin(value: number): number {
  return Math.sin(value)
}

export function cos(value: number): number {
  return Math.cos(value)
}

export function tan(value: number): number {
  return Math.tan(value)
}

export function asin(value: number): number {
  return Math.asin(value)
}

export function acos(value: number): number {
  return Math.acos(value)
}

export function atan(value: number): number {
  return Math.atan(value)
}

export function atan2(y: number, x: number): number {
  return Math.atan2(y, x)
}

export function toHex(value: number, prefix: boolean = true): string {
  const hex = Math.abs(value).toString(16)
  const result = prefix ? `0x${hex}` : hex
  return value < 0 ? `-${result}` : result
}

export function fromHex(hex: string): number {
  return parseInt(hex, 16)
}

export function toBinary(value: number, prefix: boolean = true): string {
  const binary = Math.abs(value).toString(2)
  const result = prefix ? `0b${binary}` : binary
  return value < 0 ? `-${result}` : result
}

export function fromBinary(binary: string): number {
  const isNegative = binary.startsWith('-')
  const cleaned = binary.replace(/^-?(0b)?/i, '')
  const num = parseInt(cleaned, 2)
  return isNegative ? -num : num
}

export function toOctal(value: number, prefix: boolean = true): string {
  const octal = Math.abs(value).toString(8)
  const result = prefix ? `0o${octal}` : octal
  return value < 0 ? `-${result}` : result
}

export function fromOctal(octal: string): number {
  const cleaned = octal.replace(/^0o/i, '')
  return parseInt(cleaned, 8)
}

export function pad(value: number, length: number = 2, padChar: string = '0'): string {
  const str = value.toString()
  if (value < 0) {
    return '-' + str.slice(1).padStart(length - 1, padChar)
  }
  return str.padStart(length, padChar)
}
