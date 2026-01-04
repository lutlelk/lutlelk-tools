# @lutlelk/async

Async operation utility functions.

## Installation

```bash
pnpm add @lutlelk/async
```

## Usage

```ts
import { concurrency, debounce, throttle } from '@lutlelk/async'
```

## API

### concurrency

Controls concurrent execution of async functions.

```ts
concurrency<T>(fn: () => Promise<T>, options?: { limit?: number }): Promise<T>
```

**Examples**

```ts
const fetchData = async () => {
  // Fetch data
  return { data: 'result' }
}

const result = await concurrency(fetchData, { limit: 5 })
```

### debounce

Creates a debounced async function.

```ts
debounce<T extends (...args: any[]) => Promise<any>>(func: T, wait: number): (...args: Parameters<T>) => Promise<ReturnType<T>>
```

**Examples**

```ts
const debouncedFetch = debounce(async (url: string) => {
  const response = await fetch(url)
  return response.json()
}, 300)

debouncedFetch('https://api.example.com/data')
```

### throttle

Creates a throttled async function.

```ts
throttle<T extends (...args: any[]) => Promise<any>>(func: T, wait: number): (...args: Parameters<T>) => Promise<ReturnType<T>>
```

**Examples**

```ts
const throttledFetch = throttle(async (url: string) => {
  const response = await fetch(url)
  return response.json()
}, 1000)

throttledFetch('https://api.example.com/data')
```
