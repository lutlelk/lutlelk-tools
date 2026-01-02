/**
 * 并发限制器
 * @param limit 最大并发数
 * @returns 并发限制器实例
 */
export function createConcurrencyLimiter(limit: number) {
  let running = 0
  const queue: Array<() => void> = []

  const runNext = () => {
    if (running < limit && queue.length > 0) {
      running++
      const next = queue.shift()!
      next()
    }
  }

  return {
    /**
     * 执行异步任务
     * @param fn 异步函数
     * @returns Promise结果
     */
    async run<T>(fn: () => Promise<T>): Promise<T> {
      return new Promise((resolve, reject) => {
        const task = async () => {
          try {
            const result = await fn()
            resolve(result)
          } catch (error) {
            reject(error)
          } finally {
            running--
            runNext()
          }
        }

        queue.push(task)
        runNext()
      })
    },

    /**
     * 获取当前运行状态
     */
    getStatus() {
      return {
        running,
        queued: queue.length,
        limit
      }
    }
  }
}

/**
 * 批量执行异步任务（带并发限制）
 * @param tasks 异步任务数组
 * @param concurrency 最大并发数
 * @returns Promise结果数组
 */
export async function batchRun<T>(
  tasks: Array<() => Promise<T>>,
  concurrency: number
): Promise<T[]> {
  const limiter = createConcurrencyLimiter(concurrency)
  return Promise.all(tasks.map(task => limiter.run(task)))
}

/**
 * 异步重试函数
 * @param fn 需要重试的异步函数
 * @param options 重试选项
 * @returns Promise结果
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: {
    maxAttempts?: number
    delay?: number
    backoff?: boolean
    shouldRetry?: (error: any, attempt: number) => boolean
  } = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    delay = 1000,
    backoff = true,
    shouldRetry = () => true
  } = options

  let lastError: any

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error
      
      if (attempt === maxAttempts || !shouldRetry(error, attempt)) {
        throw error
      }
      
      const waitTime = backoff ? delay * Math.pow(2, attempt - 1) : delay
      await new Promise<void>(resolve => {
        setTimeout(resolve, waitTime)
      })
    }
  }

  throw lastError
}

/**
 * 异步睡眠函数
 * @param ms 睡眠时间（毫秒）
 * @returns Promise
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 超时包装器
 * @param promise 原始Promise
 * @param timeout 超时时间（毫秒）
 * @param timeoutMessage 超时错误消息
 * @returns Promise结果
 */
export function withTimeout<T>(
  promise: Promise<T>,
  timeout: number,
  timeoutMessage = 'Operation timed out'
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error(timeoutMessage)), timeout)
    })
  ])
}