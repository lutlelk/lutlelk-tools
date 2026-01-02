export function sort<T>(arr: readonly T[], compareFn?: (a: T, b: T) => number): T[] {
  return [...arr].sort(compareFn)
}

export function sortBy<T>(arr: readonly T[], key: keyof T): T[] {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

export function reverse<T>(arr: readonly T[]): T[] {
  return [...arr].reverse()
}