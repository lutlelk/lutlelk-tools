import Benchmark from 'benchmark'
import { memoize } from '@fe-utils/function'
import { memoize as lodashMemoize } from 'lodash'

const suite = new Benchmark.Suite()

const expensiveFn = (n: number) => {
  let result = 0
  for (let i = 0; i < n; i++) {
    result += i
  }
  return result
}

const memoizedFn = memoize(expensiveFn)
const lodashMemoizedFn = lodashMemoize(expensiveFn)

suite
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
