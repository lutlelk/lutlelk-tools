export interface RetryOptions {
  retries?: number
  delay?: number
  shouldRetry?: (error: any) => boolean
  onRetry?: (error: any, attempt: number) => void
}

export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { retries = 3, delay: delayMs = 0, shouldRetry, onRetry } = options

  let lastError: any

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      const shouldContinue = shouldRetry ? shouldRetry(error) : true

      if (attempt < retries && shouldContinue) {
        if (onRetry) {
          onRetry(error, attempt + 1)
        }
        if (delayMs > 0) {
          await new Promise((resolve) => setTimeout(resolve, delayMs))
        }
      } else {
        throw error
      }
    }
  }

  throw lastError
}
