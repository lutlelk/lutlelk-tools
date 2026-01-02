export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined
}

export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}

export function isArray(value: unknown): value is any[] {
  return Array.isArray(value)
}

export function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isPlainObject(value: unknown): value is Record<string, any> {
  if (!isObject(value)) return false
  const proto = Object.getPrototypeOf(value)
  return proto === null || proto === Object.prototype
}

export function isEmpty(value: unknown): boolean {
  if (isNil(value)) return true
  if (isString(value) || isArray(value)) return value.length === 0
  if (isObject(value)) return Object.keys(value).length === 0
  return false
}

export function noop(): void {}

export function identity<T>(value: T): T {
  return value
}

export function times<T>(n: number, iteratee: (index: number) => T): T[] {
  const result: T[] = []
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i))
  }
  return result
}

export function toString(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (isString(value)) return value
  if (isNumber(value)) return String(value)
  if (isBoolean(value)) return String(value)
  if (isObject(value)) return JSON.stringify(value)
  return String(value)
}

export function toNumber(value: unknown): number {
  if (isNumber(value)) return value
  if (isString(value)) {
    const num = Number(value)
    return Number.isNaN(num) ? 0 : num
  }
  if (isBoolean(value)) return value ? 1 : 0
  return 0
}

export function toBoolean(value: unknown): boolean {
  if (isBoolean(value)) return value
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return false
    return value !== 0
  }
  if (isString(value)) {
    const lower = value.toLowerCase()
    return lower !== 'false' && lower !== '0' && value !== ''
  }
  return !isNil(value)
}

export function isStrictEqual(a: unknown, b: unknown): boolean {
  return a === b
}
