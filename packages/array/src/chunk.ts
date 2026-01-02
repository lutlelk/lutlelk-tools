export function chunk<T>(arr: readonly T[], size: number): T[][] {
  if (!Array.isArray(arr) || size <= 0) return []
  const res: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}
