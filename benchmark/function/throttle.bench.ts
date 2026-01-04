import Benchmark from 'benchmark'
import { throttle } from '@lutlelk-tools/function'
import { throttle as lodashThrottle } from 'lodash'

const suite = new Benchmark.Suite()

let counter = 0

const throttledFn = throttle(() => {
  counter++
}, 100)

const lodashThrottledFn = lodashThrottle(() => {
  counter++
}, 100)

suite
  .add('@lutlelk-tools/function/throttle', function () {
    throttledFn()
  })
  .add('lodash/throttle', function () {
    lodashThrottledFn()
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
