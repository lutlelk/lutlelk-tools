import Benchmark from 'benchmark'
import { chunk } from '@lutlelk/array'
import { chunk as lodashChunk } from 'lodash'

const suite = new Benchmark.Suite()

const largeArray = Array.from({ length: 10000 }, (_, i) => i)

suite
  .add('@lutlelk/array/chunk', function () {
    chunk(largeArray, 100)
  })
  .add('lodash/chunk', function () {
    lodashChunk(largeArray, 100)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
