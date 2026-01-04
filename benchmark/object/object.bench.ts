import Benchmark from 'benchmark'
import { deepClone, pick, omit } from '@lutlelk/object'
import { cloneDeep, pick as lodashPick, omit as lodashOmit } from 'lodash'

const suite = new Benchmark.Suite()

const largeObject = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 4, f: { g: 5 } },
  h: [1, 2, 3, 4, 5],
  i: { j: { k: { l: 6 } } }
}

console.log('--- deepClone ---\n')

suite
  .add('@lutlelk/object/deepClone', function () {
    deepClone(largeObject)
  })
  .add('lodash/cloneDeep', function () {
    cloneDeep(largeObject)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- pick ---\n')

const suite2 = new Benchmark.Suite()

suite2
  .add('@lutlelk/object/pick', function () {
    pick(largeObject, ['a', 'b', 'c'])
  })
  .add('lodash/pick', function () {
    lodashPick(largeObject, ['a', 'b', 'c'])
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- omit ---\n')

const suite3 = new Benchmark.Suite()

suite3
  .add('@lutlelk/object/omit', function () {
    omit(largeObject, ['a', 'b'])
  })
  .add('lodash/omit', function () {
    lodashOmit(largeObject, ['a', 'b'])
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
