import Benchmark from 'benchmark'
import { debounce, throttle, memoize } from '@fe-utils/function'
import { debounce as lodashDebounce, throttle as lodashThrottle, memoize as lodashMemoize } from 'lodash'

const suite = new Benchmark.Suite()

let counter = 0

console.log('--- debounce ---\n')

const debouncedFn = debounce(() => {
  counter++
}, 100)

suite
  .add('@fe-utils/function/debounce', function () {
    debouncedFn()
  })
  .add('lodash/debounce', function () {
    lodashDebounce(() => {}, 100)()
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- throttle ---\n')

const suite2 = new Benchmark.Suite()

const throttledFn = throttle(() => {
  counter++
}, 100)

suite2
  .add('@fe-utils/function/throttle', function () {
    throttledFn()
  })
  .add('lodash/throttle', function () {
    lodashThrottle(() => {}, 100)()
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- memoize ---\n')

const suite3 = new Benchmark.Suite()

const expensiveFn = (n: number) => {
  let result = 0
  for (let i = 0; i < n; i++) {
    result += i
  }
  return result
}

const memoizedFn = memoize(expensiveFn)
const lodashMemoizedFn = lodashMemoize(expensiveFn)

suite3
  .add('@fe-utils/function/memoize', function () {
    memoizedFn(1000)
  })
  .add('lodash/memoize', function () {
    lodashMemoizedFn(1000)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
