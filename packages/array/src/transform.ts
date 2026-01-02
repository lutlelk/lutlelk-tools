export function filter<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): T[] {
  return arr.filter(predicate)
}

export function map<T, U>(arr: readonly T[], fn: (item: T, index: number, arr: readonly T[]) => U): U[] {
  return arr.map(fn)
}

export function reduce<T, U>(arr: readonly T[], fn: (accumulator: U, currentValue: T, index: number, arr: readonly T[]) => U, initialValue: U): U {
  return arr.reduce(fn, initialValue)
}

export function forEach<T>(arr: readonly T[], fn: (item: T, index: number, arr: readonly T[]) => void): void {
  arr.forEach(fn)
}

export function some<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): boolean {
  return arr.some(predicate)
}

export function every<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): boolean {
  return arr.every(predicate)
}