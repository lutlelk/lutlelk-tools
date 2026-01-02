export function flatten<T>(arr: readonly T[][]): T[] {
  return arr.reduce((acc, item) => acc.concat(item), [] as T[])
}