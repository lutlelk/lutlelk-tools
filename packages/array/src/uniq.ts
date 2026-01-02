export function uniq<T>(arr: readonly T[]): T[] {
  const set = new Set<T>()
  const res: T[] = []
  for (const item of arr) {
    if (!set.has(item)) {
      set.add(item)
      res.push(item)
    }
  }
  return res
}
