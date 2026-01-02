export function groupBy<T, K extends PropertyKey>(arr: T[], fn: (item: T) => K): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const key = fn(item)
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {} as Record<K, T[]>)
}