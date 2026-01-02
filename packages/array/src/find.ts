export function find<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): T | undefined {
  return arr.find(predicate)
}

export function findIndex<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): number {
  return arr.findIndex(predicate)
}

export function findLast<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): T | undefined {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return arr[i]
    }
  }
  return undefined
}

export function findLastIndex<T>(arr: readonly T[], predicate: (item: T, index: number, arr: readonly T[]) => boolean): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return i
    }
  }
  return -1
}

export function includes<T>(arr: readonly T[], value: T): boolean {
  return arr.includes(value)
}

export function indexOf<T>(arr: readonly T[], value: T, fromIndex?: number): number {
  return arr.indexOf(value, fromIndex)
}

export function lastIndexOf<T>(arr: readonly T[], value: T, fromIndex?: number): number {
  if (arr.length === 0) return -1
  
  const startIndex = fromIndex !== undefined ? Math.min(fromIndex, arr.length - 1) : arr.length - 1
  
  for (let i = startIndex; i >= 0; i--) {
    if (arr[i] === value) {
      return i
    }
  }
  
  return -1
}