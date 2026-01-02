export interface MemoizeOptions<T extends (...args: any[]) => any> {
  resolver?: (...args: Parameters<T>) => any
  cache?: Map<any, any>
}

export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  options: MemoizeOptions<T> = {}
): T & { cache: Map<any, any>; clear: () => void } {
  const { resolver, cache = new Map() } = options

  const memoized = function (this: any, ...args: Parameters<T>) {
    const key = resolver ? resolver.apply(this, args) : args[0]

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  } as T & { cache: Map<any, any>; clear: () => void }

  memoized.cache = cache
  memoized.clear = () => {
    cache.clear()
  }

  return memoized
}
