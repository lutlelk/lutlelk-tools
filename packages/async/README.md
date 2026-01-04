# @lutlelk-tools/async

Async utility library for JavaScript/TypeScript with concurrency control, retry logic, and timeout handling.

## Installation

```bash
npm install @lutlelk-tools/async
# or
pnpm add @lutlelk-tools/async
# or
yarn add @lutlelk-tools/async
```

## Usage

```typescript
import { createConcurrencyLimiter, retry, sleep, withTimeout } from '@lutlelk-tools/async'
```

## API

### Concurrency Control

#### `createConcurrencyLimiter(limit: number): ConcurrencyLimiter`

Create a concurrency limiter to control parallel execution of async tasks.

```typescript
const limiter = createConcurrencyLimiter(3)

// Execute multiple tasks with max 3 concurrent
const results = await Promise.all([
  limiter.run(task1),
  limiter.run(task2),
  limiter.run(task3),
  limiter.run(task4),
  limiter.run(task5)
])

// Check status
const status = limiter.getStatus()
console.log(status) // => { running: 3, queued: 2, limit: 3 }
```

#### `batchRun<T>(tasks: Array<() => Promise<T>>, concurrency: number): Promise<T[]>`

Execute multiple async tasks with concurrency limit.

```typescript
const tasks = [
  () => fetch('/api/1'),
  () => fetch('/api/2'),
  () => fetch('/api/3'),
  () => fetch('/api/4'),
  () => fetch('/api/5')
]

const results = await batchRun(tasks, 2)
// Executes at most 2 tasks concurrently
```

### Retry Logic

#### `retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>`

Retry an async function until it succeeds or max attempts are reached.

```typescript
const result = await retry(
  async () => {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed')
    return response.json()
  },
  {
    maxAttempts: 3,
    delay: 1000,
    backoff: true,
    shouldRetry: (error, attempt) => error.status !== 404
  }
)
```

#### RetryOptions

```typescript
interface RetryOptions {
  maxAttempts?: number    // Maximum retry attempts (default: 3)
  delay?: number          // Delay between retries in ms (default: 1000)
  backoff?: boolean       // Exponential backoff (default: true)
  shouldRetry?: (error: any, attempt: number) => boolean
}
```

### Timeout

#### `sleep(ms: number): Promise<void>`

Create a promise that resolves after specified milliseconds.

```typescript
await sleep(1000)
console.log('Executed after 1 second')
```

#### `withTimeout<T>(promise: Promise<T>, timeout: number, timeoutMessage?: string): Promise<T>`

Add timeout to a promise.

```typescript
const result = await withTimeout(
  fetch('/api/data'),
  5000,
  'Request timed out'
)
// Rejects after 5 seconds if not resolved
```

## Use Cases

### Rate Limiting

```typescript
const limiter = createConcurrencyLimiter(10)

async function processItems(items: string[]) {
  for (const item of items) {
    await limiter.run(() => processItem(item))
  }
}

await processItems(largeArray)
// Processes items with max 10 concurrent operations
```

### API Retry with Backoff

```typescript
const data = await retry(
  async () => {
    const response = await fetch('https://api.example.com/data')
    if (!response.ok) throw new Error('API error')
    return response.json()
  },
  {
    maxAttempts: 5,
    delay: 1000,
    backoff: true
  }
)
// Retries with exponential backoff: 1s, 2s, 4s, 8s, 16s
```

### Timeout Protection

```typescript
try {
  const result = await withTimeout(
    longRunningOperation(),
    30000,
    'Operation took too long'
  )
  console.log(result)
} catch (error) {
  if (error.message === 'Operation took too long') {
    console.log('Timeout occurred')
  }
}
```

## License

ISC
