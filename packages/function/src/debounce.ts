export interface DebounceOptions {
  leading?: boolean
  trailing?: boolean
}

export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void
  cancel: () => void
  flush: () => void
}

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
  options: DebounceOptions = {}
): DebouncedFunction<T> {
  const { leading = false, trailing = true } = options
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let lastThis: any = null
  let lastCallTime: number | null = null

  const invokeFunc = () => {
    if (lastArgs) {
      fn.apply(lastThis, lastArgs)
      lastArgs = null
      lastThis = null
    }
    lastCallTime = null
    timeoutId = null
  }

  const shouldInvoke = (time: number) => {
    if (!lastCallTime) {
      return leading
    }
    const timeSinceLastCall = time - lastCallTime
    return timeSinceLastCall >= wait
  }

  const trailingEdge = (time: number) => {
    timeoutId = setTimeout(() => {
      invokeFunc()
    }, wait)
  }

  const debounced = function (this: any, ...args: Parameters<T>) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this

    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    if (isInvoking) {
      if (leading) {
        if (!lastCallTime) {
          invokeFunc()
        }
        lastCallTime = time
      } else if (trailing) {
        lastCallTime = time
        trailingEdge(time)
      }
    } else if (trailing) {
      lastCallTime = time
      trailingEdge(time)
    }
  }

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    lastArgs = null
    lastThis = null
    lastCallTime = null
  }

  debounced.flush = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    invokeFunc()
  }

  return debounced
}
