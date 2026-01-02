import Benchmark from 'benchmark'
import { debounce } from '@fe-utils/function'
import { debounce as lodashDebounce } from 'lodash'

const suite = new Benchmark.Suite()

let counter = 0

const debouncedFn = debounce(() => {
  counter++
}, 100)

const lodashDebouncedFn = lodashDebounce(() => {
  counter++
}, 100)

suite
  .add('@fe-utils/function/debounce', function () {
    debouncedFn()
  })
  .add('lodash/debounce', function () {
    lodashDebouncedFn()
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
