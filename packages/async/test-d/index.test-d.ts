import { expectType } from 'tsd'
import { createConcurrencyLimiter, batchRun, retry, sleep, withTimeout } from '../src'

// Test concurrency limiter function types
const limiter = createConcurrencyLimiter(2)
expectType<{
  run: <T>(fn: () => Promise<T>) => Promise<T>
  getStatus: () => { running: number; queued: number; limit: number }
}>(limiter)

// Test concurrency limiter usage types
const promiseResult = limiter.run(async () => {
  return 'test result'
})
expectType<Promise<string>>(promiseResult)

const status = limiter.getStatus()
expectType<{ running: number; queued: number; limit: number }>(status)

// Test concurrency limiter with different return types
const numberPromise = limiter.run(async () => {
  return 42
})
expectType<Promise<number>>(numberPromise)

const objectPromise = limiter.run(async () => {
  return { success: true, data: 'test' }
})
expectType<Promise<{ success: boolean; data: string }>>(objectPromise)

// Test batchRun function types
const batchResult = batchRun([
  async () => 1,
  async () => 2,
  async () => 3
], 2)
expectType<Promise<number[]>>(batchResult)

// Test retry function types
const retryResult = retry(async () => {
  return 'success'
}, { maxAttempts: 3, delay: 1000 })
expectType<Promise<string>>(retryResult)

// Test retry with shouldRetry option
const retryWithShouldRetry = retry(async () => {
  return 'success'
}, {
  maxAttempts: 3,
  delay: 1000,
  shouldRetry: (error) => error instanceof Error
})
expectType<Promise<string>>(retryWithShouldRetry)

// Test sleep function types
const sleepPromise = sleep(1000)
expectType<Promise<void>>(sleepPromise)

// Test withTimeout function types
const timeoutResult = withTimeout(
  Promise.resolve('result'),
  5000,
  'Operation timed out'
)
expectType<Promise<string>>(timeoutResult)

// Test withTimeout with different return types
const timeoutNumber = withTimeout(
  Promise.resolve(42),
  1000
)
expectType<Promise<number>>(timeoutNumber)

const timeoutObject = withTimeout(
  Promise.resolve({ data: 'test' }),
  1000
)
expectType<Promise<{ data: string }>>(timeoutObject)
