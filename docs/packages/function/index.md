# @lutlelk-tools/function

函数式编程工具函数集合。

## 安装

```bash
pnpm add @lutlelk-tools/function
```

## 使用

```ts
import {
  debounce,
  throttle,
  memoize,
  once,
  partial,
  curry,
  compose,
  delay,
  retry
} from '@lutlelk-tools/function'
```

## API

### debounce

防抖函数。

```ts
debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

**示例**

```ts
const debouncedFn = debounce(() => {
  console.log('执行')
}, 300)

debouncedFn()
debouncedFn() // 只有最后一次调用会执行
```

### throttle

节流函数。

```ts
throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

**示例**

```ts
const throttledFn = throttle(() => {
  console.log('执行')
}, 300)

throttledFn()
throttledFn() // 在 300ms 内只会执行一次
```

### memoize

记忆化函数。

```ts
memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string
): T
```

**示例**

```ts
const expensiveFn = memoize((n: number) => {
  console.log('计算中...')
  return n * 2
})

expensiveFn(5) // 计算中... 10
expensiveFn(5) // 10 (从缓存中获取)
```

### once

只执行一次的函数。

```ts
once<T extends (...args: any[]) => any>(func: T): T
```

**示例**

```ts
const fn = once(() => {
  console.log('只执行一次')
})

fn() // 只执行一次
fn() // 不会执行
```

### partial

偏函数。

```ts
partial<T extends (...args: any[]) => any>(
  func: T,
  ...args: Partial<Parameters<T>>
): (...remainingArgs: any[]) => ReturnType<T>

partialRight<T extends (...args: any[]) => any>(
  func: T,
  ...args: Partial<Parameters<T>>
): (...remainingArgs: any[]) => ReturnType<T>
```

**示例**

```ts
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`

const sayHello = partial(greet, 'Hello')
sayHello('World') // 'Hello, World!'

const sayWorld = partialRight(greet, 'World')
sayWorld('Hello') // 'Hello, World!'
```

### curry

柯里化函数。

```ts
curry<T extends (...args: any[]) => any>(func: T): Curried<T>
curryRight<T extends (...args: any[]) => any>(func: T): Curried<T>
```

**示例**

```ts
const add = (a: number, b: number, c: number) => a + b + c

const curriedAdd = curry(add)
curriedAdd(1)(2)(3) // 6
curriedAdd(1, 2)(3) // 6
```

### compose

函数组合。

```ts
compose<T>(...funcs: Array<(arg: any) => any>): (arg: T) => any
pipe<T>(...funcs: Array<(arg: any) => any>): (arg: T) => any
```

**示例**

```ts
const add = (x: number) => x + 1
const multiply = (x: number) => x * 2

const composed = compose(add, multiply)
composed(5) // 11 (5 * 2 + 1)

const piped = pipe(add, multiply)
piped(5) // 12 ((5 + 1) * 2)
```

### delay

延迟执行。

```ts
delay(ms: number): Promise<void>
delayWithValue<T>(value: T, ms: number): Promise<T>
```

**示例**

```ts
await delay(1000) // 等待 1 秒

const result = await delayWithValue('hello', 1000) // 1 秒后返回 'hello'
```

### retry

重试函数。

```ts
retry<T>(
  fn: () => Promise<T>,
  options?: {
    retries?: number
    delay?: number
    onRetry?: (error: Error, attempt: number) => void
  }
): Promise<T>
```

**示例**

```ts
const result = await retry(
  async () => {
    const response = await fetch('https://api.example.com')
    return response.json()
  },
  {
    retries: 3,
    delay: 1000,
    onRetry: (error, attempt) => {
      console.log(`重试第 ${attempt} 次: ${error.message}`)
    }
  }
)
```
