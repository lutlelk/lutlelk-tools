# @lutlelk/function

A comprehensive function utility library for JavaScript/TypeScript.

## Installation

```bash
npm install @lutlelk/function
# or
pnpm add @lutlelk/function
# or
yarn add @lutlelk/function
```

## Usage

```typescript
import { debounce, throttle, memoize, curry, compose } from '@lutlelk/function'

// Or import single function for tree-shaking
import debounce from '@lutlelk/function/debounce'
```

## API

### Debounce & Throttle

#### `debounce<T extends (...args: any[]) => any>(fn: T, wait: number, options?: DebounceOptions): DebouncedFunction<T>`

Create a debounced function that delays invoking fn until after wait milliseconds have elapsed since the last invocation.

```typescript
const debouncedFn = debounce(() => {
  console.log('Executed!')
}, 300)

debouncedFn() // Will execute after 300ms of inactivity
```

#### `throttle<T extends (...args: any[]) => any>(fn: T, wait: number, options?: ThrottleOptions): ThrottledFunction<T>`

Create a throttled function that only invokes fn at most once per every wait milliseconds.

```typescript
const throttledFn = throttle(() => {
  console.log('Executed!')
}, 300)

throttledFn() // Will execute at most once every 300ms
```

### Memoization

#### `memoize<T extends (...args: any[]) => any>(fn: T, options?: MemoizeOptions): MemoizedFunction<T>`

Create a memoized version of fn that caches results based on arguments.

```typescript
const expensiveFn = memoize((n: number) => {
  console.log('Computing...')
  return n * 2
})

expensiveFn(5) // Computes and caches result
expensiveFn(5) // Returns cached result
```

### Execution Control

#### `once<T extends (...args: any[]) => any>(fn: T): T`

Create a function that can only be executed once.

```typescript
const setup = once(() => {
  console.log('Setup complete')
})

setup() // Executes
setup() // Does nothing
```

#### `delay(ms: number): Promise<void>`

Create a promise that resolves after specified milliseconds.

```typescript
await delay(1000)
console.log('Executed after 1 second')
```

#### `delayWithValue<T>(ms: number, value: T): Promise<T>`

Create a promise that resolves with value after specified milliseconds.

```typescript
const result = await delayWithValue(1000, 'hello')
console.log(result) // => 'hello'
```

#### `retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>`

Retry a function until it succeeds or max retries are reached.

```typescript
const result = await retry(
  async () => {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed')
    return response.json()
  },
  { maxAttempts: 3, delay: 1000 }
)
```

### Partial Application

#### `partial<T extends (...args: any[]) => any>(fn: T, ...args: Partial<Parameters<T>>): T`

Partially apply function by pre-filling some arguments.

```typescript
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`

const sayHello = partial(greet, 'Hello')
sayHello('World') // => 'Hello, World!'
```

#### `partialRight<T extends (...args: any[]) => any>(fn: T, ...args: Partial<Parameters<T>>): T`

Partially apply function from the right by pre-filling some arguments.

```typescript
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`

const sayHello = partialRight(greet, 'World')
sayHello('Hello') // => 'Hello, World!'
```

### Currying

#### `curry<T extends (...args: any[]) => any>(fn: T): CurriedFunction<T>`

Transform a function into a curried version.

```typescript
const add = (a: number, b: number, c: number) => a + b + c

const curriedAdd = curry(add)
curriedAdd(1)(2)(3) // => 6
```

#### `curryRight<T extends (...args: any[]) => any>(fn: T): CurriedFunction<T>`

Transform a function into a right-curried version.

```typescript
const add = (a: number, b: number, c: number) => a + b + c

const curriedAdd = curryRight(add)
curriedAdd(3)(2)(1) // => 6
```

### Composition

#### `compose<T extends (...args: any[]) => any>(...fns: T[]): T`

Compose functions from right to left.

```typescript
const addOne = (x: number) => x + 1
const double = (x: number) => x * 2

const composed = compose(double, addOne)
composed(3) // => 8 (3 + 1) * 2
```

#### `pipe<T extends (...args: any[]) => any>(...fns: T[]): T`

Pipe functions from left to right.

```typescript
const addOne = (x: number) => x + 1
const double = (x: number) => x * 2

const piped = pipe(addOne, double)
piped(3) // => 8 ((3 + 1) * 2)
```

## Types

### DebounceOptions

```typescript
interface DebounceOptions {
  leading?: boolean
  trailing?: boolean
}
```

### ThrottleOptions

```typescript
interface ThrottleOptions {
  leading?: boolean
  trailing?: boolean
}
```

### MemoizeOptions

```typescript
interface MemoizeOptions {
  resolver?: (...args: any[]) => any
  cache?: Map<any, any>
}
```

### RetryOptions

```typescript
interface RetryOptions {
  maxAttempts?: number
  delay?: number
  onRetry?: (error: Error, attempt: number) => void
}
```

## License

ISC
