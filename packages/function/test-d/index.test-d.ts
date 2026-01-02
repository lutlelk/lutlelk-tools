import { expectType } from 'tsd'
import { debounce, throttle, memoize, once, partial, partialRight, curry, curryRight, compose, pipe, delay, delayWithValue, retry } from '../src'

// Test debounce function types
const debouncedFn = debounce((str: string, num: number) => {
  console.log(str, num)
}, 100)
expectType<typeof debouncedFn>(debouncedFn)

const debouncedFn2 = debounce((x: number) => {
  console.log(x)
}, 100)
expectType<typeof debouncedFn2>(debouncedFn2)

// Test debounce with options
const debouncedWithOptions = debounce(() => {
  console.log('test')
}, 100, { leading: true, trailing: true })
expectType<typeof debouncedWithOptions>(debouncedWithOptions)
expectType<typeof debouncedWithOptions.cancel>(debouncedWithOptions.cancel)
expectType<typeof debouncedWithOptions.flush>(debouncedWithOptions.flush)

// Test throttle function types
const throttledFn = throttle((str: string, num: number) => {
  console.log(str, num)
}, 100)
expectType<typeof throttledFn>(throttledFn)

const throttledFn2 = throttle((x: number) => {
  console.log(x)
}, 100)
expectType<typeof throttledFn2>(throttledFn2)

// Test throttle with options
const throttledWithOptions = throttle(() => {
  console.log('test')
}, 100, { leading: true, trailing: true })
expectType<typeof throttledWithOptions>(throttledWithOptions)
expectType<typeof throttledWithOptions.cancel>(throttledWithOptions.cancel)
expectType<typeof throttledWithOptions.flush>(throttledWithOptions.flush)

// Test memoize function types
const memoizedFn = memoize((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof memoizedFn>(memoizedFn)

const memoizedFn2 = memoize((x: string) => {
  console.log(x)
  return x.toUpperCase()
})
expectType<typeof memoizedFn2>(memoizedFn2)

const memoizedFn3 = memoize((x: number, y: number) => {
  console.log(x, y)
  return x + y
})
expectType<typeof memoizedFn3>(memoizedFn3)

// Test memoize with options
const memoizedWithOptions = memoize((x: number) => {
  console.log(x)
  return x * 2
}, {
  resolver: (x: number) => x.toString(),
  cache: new Map()
})
expectType<typeof memoizedWithOptions>(memoizedWithOptions)
expectType<typeof memoizedWithOptions.cache>(memoizedWithOptions.cache)
expectType<typeof memoizedWithOptions.clear>(memoizedWithOptions.clear)

// Test once function types
const onceFn = once(() => {
  console.log('once')
})
expectType<typeof onceFn>(onceFn)

const onceFn2 = once((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof onceFn2>(onceFn2)

const onceFn3 = once((x: string, y: number) => {
  console.log(x, y)
  return x
})
expectType<typeof onceFn3>(onceFn3)

// Test partial function types
const partialFn = partial((x: number, y: number) => {
  console.log(x, y)
  return x + y
}, 1)
expectType<typeof partialFn>(partialFn)

const partialFn2 = partial((x: number, y: number, z: number) => {
  console.log(x, y, z)
  return x + y + z
}, 1, 2)
expectType<typeof partialFn2>(partialFn2)

const partialFn3 = partial((x: string, y: string) => {
  console.log(x, y)
  return x + y
}, 'hello')
expectType<typeof partialFn3>(partialFn3)

// Test partialRight function types
const partialRightFn = partialRight((x: number, y: number) => {
  console.log(x, y)
  return x + y
}, 2)
expectType<typeof partialRightFn>(partialRightFn)

const partialRightFn2 = partialRight((x: number, y: number, z: number) => {
  console.log(x, y, z)
  return x + y + z
}, 2, 3)
expectType<typeof partialRightFn2>(partialRightFn2)

const partialRightFn3 = partialRight((x: string, y: string) => {
  console.log(x, y)
  return x + y
}, 'world')
expectType<typeof partialRightFn3>(partialRightFn3)

// Test curry function types
const curriedFn = curry((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof curriedFn>(curriedFn)

const curriedFn2 = curry((x: number, y: number) => {
  console.log(x, y)
  return x + y
})
expectType<typeof curriedFn2>(curriedFn2)

const curriedFn3 = curry((x: number, y: number, z: number) => {
  console.log(x, y, z)
  return x + y + z
})
expectType<typeof curriedFn3>(curriedFn3)

// Test curry with arity
const curriedWithArity = curry((...args: number[]) => {
  console.log(args)
  return args.reduce((a, b) => a + b, 0)
}, 2)
expectType<typeof curriedWithArity>(curriedWithArity)

// Test curryRight function types
const curryRightFn = curryRight((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof curryRightFn>(curryRightFn)

const curryRightFn2 = curryRight((x: number, y: number) => {
  console.log(x, y)
  return x + y
})
expectType<typeof curryRightFn2>(curryRightFn2)

const curryRightFn3 = curryRight((x: number, y: number, z: number) => {
  console.log(x, y, z)
  return x + y + z
})
expectType<typeof curryRightFn3>(curryRightFn3)

// Test curryRight with arity
const curryRightWithArity = curryRight((...args: number[]) => {
  console.log(args)
  return args.reduce((a, b) => a + b, 0)
}, 2)
expectType<typeof curryRightWithArity>(curryRightWithArity)

// Test compose function types
const composedFn = compose((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof composedFn>(composedFn)

const composedFn2 = compose((x: number) => {
  console.log(x)
  return x + 1
}, (x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof composedFn2>(composedFn2)

const composedFn3 = compose((x: number) => {
  console.log(x)
  return x - 3
}, (x: number) => {
  console.log(x)
  return x * 2
}, (x: number) => {
  console.log(x)
  return x + 1
})
expectType<typeof composedFn3>(composedFn3)

// Test pipe function types
const pipedFn = pipe((x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof pipedFn>(pipedFn)

const pipedFn2 = pipe((x: number) => {
  console.log(x)
  return x + 1
}, (x: number) => {
  console.log(x)
  return x * 2
})
expectType<typeof pipedFn2>(pipedFn2)

const pipedFn3 = pipe((x: number) => {
  console.log(x)
  return x + 1
}, (x: number) => {
  console.log(x)
  return x * 2
}, (x: number) => {
  console.log(x)
  return x - 3
})
expectType<typeof pipedFn3>(pipedFn3)

// Test delay function types
const delayedVoid = delay(100)
expectType<Promise<void>>(delayedVoid)

const delayedVoid2 = delay(0)
expectType<Promise<void>>(delayedVoid2)

const delayedVoid3 = delay(1000)
expectType<Promise<void>>(delayedVoid3)

// Test delayWithValue function types
const delayedString = delayWithValue(100, 'test')
expectType<Promise<string>>(delayedString)

const delayedNumber = delayWithValue(100, 42)
expectType<Promise<number>>(delayedNumber)

const delayedObject = delayWithValue(100, { value: 42 })
expectType<Promise<{ value: number }>>(delayedObject)

const delayedArray = delayWithValue(100, [1, 2, 3])
expectType<Promise<number[]>>(delayedArray)

// Test retry function types
const retriedString = retry(async () => {
  return 'success'
})
expectType<Promise<string>>(retriedString)

const retriedNumber = retry(async () => {
  return 42
})
expectType<Promise<number>>(retriedNumber)

const retriedObject = retry(async () => {
  return { value: 42 }
})
expectType<Promise<{ value: number }>>(retriedObject)

// Test retry with options
const retriedWithOptions = retry(async () => {
  return 'success'
}, {
  retries: 3,
  delay: 100,
  shouldRetry: (error: any) => true,
  onRetry: (error: any, attempt: number) => {
    console.log(`Attempt ${attempt}`)
  }
})
expectType<Promise<string>>(retriedWithOptions)

// Test retry with partial options
const retriedWithRetries = retry(async () => {
  return 'success'
}, {
  retries: 3
})
expectType<Promise<string>>(retriedWithRetries)

const retriedWithDelay = retry(async () => {
  return 'success'
}, {
  delay: 100
})
expectType<Promise<string>>(retriedWithDelay)

const retriedWithShouldRetry = retry(async () => {
  return 'success'
}, {
  shouldRetry: (error: any) => error.message !== 'stop'
})
expectType<Promise<string>>(retriedWithShouldRetry)

const retriedWithOnRetry = retry(async () => {
  return 'success'
}, {
  onRetry: (error: any, attempt: number) => {
    console.log(`Attempt ${attempt}`)
  }
})
expectType<Promise<string>>(retriedWithOnRetry)
