# @fe-utils/function

Collection of function manipulation utility functions.

## Installation

```bash
pnpm add @fe-utils/function
```

## Usage

```ts
import { debounce, throttle, memoize, once, curry, partial, compose } from '@fe-utils/function'
```

## API

### debounce

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.

```ts
debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void
```

**Examples**

```ts
const debouncedFn = debounce(() => {
  console.log('Debounced')
}, 300)

debouncedFn()
debouncedFn()
debouncedFn()
// Only logs once after 300ms
```

### throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds.

```ts
throttle<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void
```

**Examples**

```ts
const throttledFn = throttle(() => {
  console.log('Throttled')
}, 300)

throttledFn()
throttledFn()
throttledFn()
// Logs once immediately, then at most once every 300ms
```

### memoize

Creates a function that memoizes the result of func.

```ts
memoize<T extends (...args: any[]) => any>(func: T): T
```

**Examples**

```ts
const expensiveFn = memoize((n: number) => {
  console.log('Computing...')
  return n * n
})

expensiveFn(5) // Logs "Computing...", returns 25
expensiveFn(5) // Returns 25 (cached)
```

### once

Creates a function that is restricted to invoking func once.

```ts
once<T extends (...args: any[]) => any>(func: T): T
```

**Examples**

```ts
const initialize = once(() => {
  console.log('Initialized')
})

initialize() // Logs "Initialized"
initialize() // Does nothing
```

### partial

Creates a function that invokes func with partial arguments prepended to those provided to the new function.

```ts
partial<T extends (...args: any[]) => any>(func: T, ...partials: any[]): (...args: any[]) => ReturnType<T>
```

**Examples**

```ts
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`
const sayHello = partial(greet, 'Hello')

sayHello('John') // "Hello, John!"
```

### partialRight

Creates a function that invokes func with partial arguments appended to those provided to the new function.

```ts
partialRight<T extends (...args: any[]) => any>(func: T, ...partials: any[]): (...args: any[]) => ReturnType<T>
```

**Examples**

```ts
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`
const greetJohn = partialRight(greet, 'John')

greetJohn('Hello') // "Hello, John!"
```

### curry

Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on.

```ts
curry<T extends (...args: any[]) => any>(func: T): Curried<T>
```

**Examples**

```ts
const add = (a: number, b: number, c: number) => a + b + c
const curriedAdd = curry(add)

curriedAdd(1)(2)(3) // 6
curriedAdd(1, 2)(3) // 6
curriedAdd(1, 2, 3) // 6
```

### curryRight

Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The func arity may be specified if func.length is not sufficient.

```ts
curryRight<T extends (...args: any[]) => any>(func: T): Curried<T>
```

**Examples**

```ts
const greet = (greeting: string, name: string, punctuation: string) => `${greeting}, ${name}${punctuation}`
const curriedGreet = curryRight(greet)

curriedGreet('!')('John')('Hello') // "Hello, John!"
```

### compose

Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.

```ts
compose<T extends any[]>(...funcs: Array<(...args: T) => any>): (...args: T) => any
```

**Examples**

```ts
const add = (x: number) => x + 1
const multiply = (x: number) => x * 2
const square = (x: number) => x * x

const composed = compose(square, multiply, add)
composed(3) // ((3 + 1) * 2) ^ 2 = 64
```

### pipe

Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.

```ts
pipe<T extends any[]>(...funcs: Array<(...args: T) => any>): (...args: T) => any
```

**Examples**

```ts
const add = (x: number) => x + 1
const multiply = (x: number) => x * 2
const square = (x: number) => x * x

const piped = pipe(add, multiply, square)
piped(3) // ((3 + 1) * 2) ^ 2 = 64
```

### delay

Invokes func after wait milliseconds.

```ts
delay(func: () => void, wait: number): void
```

**Examples**

```ts
delay(() => {
  console.log('Delayed')
}, 1000)
// Logs after 1000ms
```

### delayWithValue

Creates a function that delays invoking func until after wait milliseconds have elapsed since the last time the delayed function was invoked.

```ts
delayWithValue<T>(value: T, wait: number): Promise<T>
```

**Examples**

```ts
const result = await delayWithValue('Hello', 1000)
console.log(result) // "Hello" after 1000ms
```

### retry

Retries a function until it succeeds or max attempts are reached.

```ts
retry<T>(fn: () => Promise<T>, options?: { maxAttempts?: number; delay?: number }): Promise<T>
```

**Examples**

```ts
let attempts = 0
const flakyFn = async () => {
  attempts++
  if (attempts < 3) throw new Error('Failed')
  return 'Success'
}

await retry(flakyFn, { maxAttempts: 5 })
// Returns 'Success' after 3 attempts
```
