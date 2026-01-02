import Benchmark from 'benchmark'
import { clamp, random, range } from '@fe-utils/number'
import { clamp as lodashClamp, random as lodashRandom, range as lodashRange } from 'lodash'

const suite = new Benchmark.Suite()

console.log('--- clamp ---\n')

suite
  .add('@fe-utils/number/clamp', function () {
    clamp(50, 0, 100)
  })
  .add('lodash/clamp', function () {
    lodashClamp(50, 0, 100)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- random ---\n')

const suite2 = new Benchmark.Suite()

suite2
  .add('@fe-utils/number/random', function () {
    random(0, 100)
  })
  .add('lodash/random', function () {
    lodashRandom(0, 100)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- range ---\n')

const suite3 = new Benchmark.Suite()

suite3
  .add('@fe-utils/number/range', function () {
    range(0, 1000)
  })
  .add('lodash/range', function () {
    lodashRange(0, 1000)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
