/**
 * 节流函数
 * @param fn 需要节流的函数
 * @param delay 节流时间间隔（毫秒）
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null

  return (...args: Parameters<T>) => {
    const now = Date.now()
    lastArgs = args
    
    if (now - lastCallTime >= delay) {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      fn(...args)
      lastCallTime = now
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        if (lastArgs) {
          fn(...lastArgs)
          lastCallTime = Date.now()
          lastArgs = null
        }
        timeoutId = null
      }, delay)
    }
  }
}

/**
 * 节流函数（立即执行版本）
 * @param fn 需要节流的函数
 * @param delay 节流时间间隔（毫秒）
 * @returns 节流后的函数
 */
export function throttleImmediate<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()
    
    if (now - lastCallTime >= delay) {
      fn(...args)
      lastCallTime = now
    }
  }
}

/**
 * 节流函数（尾调用版本）
 * @param fn 需要节流的函数
 * @param delay 节流时间间隔（毫秒）
 * @returns 节流后的函数
 */
export function throttleTrailing<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let lastArgs: Parameters<T> | null = null

  return (...args: Parameters<T>) => {
    lastArgs = args
    
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        if (lastArgs) {
          fn(...lastArgs)
          lastArgs = null
        }
        timeoutId = null
      }, delay)
    }
  }
}