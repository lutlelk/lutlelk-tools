export interface ThrottleOptions {
  leading?: boolean
  trailing?: boolean
}

export interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T>
  cancel: () => void
  flush: () => ReturnType<T>
}

export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
  options: ThrottleOptions = {}
): ThrottledFunction<T> {
  const { leading = true, trailing = true } = options
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null
  let lastThis: any = null
  let lastCallTime: number | null = null
  let result: ReturnType<T>

  const invokeFunc = (time: number) => {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = null
    lastThis = null
    lastCallTime = time

    if (args) {
      result = fn.apply(thisArg, args)
    }
    return result
  }

  const startTimer = (pendingFunc: () => void, wait: number) => {
    timeoutId = setTimeout(pendingFunc, wait)
  }

  const shouldInvoke = (time: number) => {
    const timeSinceLastCall = lastCallTime ? time - lastCallTime : 0
    return !lastCallTime || timeSinceLastCall >= wait
  }

  const trailingEdge = (time: number) => {
    timeoutId = null

    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = null
    lastThis = null
    return result
  }

  const throttled = function (this: any, ...args: Parameters<T>) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this

    if (isInvoking) {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      if (leading) {
        lastCallTime = time
        result = fn.apply(this, args)
      } else if (!timeoutId && trailing) {
        timeoutId = setTimeout(() => trailingEdge(Date.now()), wait)
      }
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => trailingEdge(Date.now()), wait)
    }
    return result
  }

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    lastArgs = null
    lastThis = null
    lastCallTime = null
  }

  throttled.flush = () => {
    return timeoutId ? trailingEdge(Date.now()) : result
  }

  return throttled
}
