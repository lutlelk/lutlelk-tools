import Benchmark from 'benchmark'
import { toCamelCase, toKebabCase, slugify } from '@fe-utils/string'
import { camelCase, kebabCase } from 'lodash'

const suite = new Benchmark.Suite()

const testString = 'hello-world-test-string'

suite
  .add('@fe-utils/string/toCamelCase', function () {
    toCamelCase(testString)
  })
  .add('lodash/camelCase', function () {
    camelCase(testString)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- toKebabCase ---\n')

const suite2 = new Benchmark.Suite()

suite2
  .add('@fe-utils/string/toKebabCase', function () {
    toKebabCase(testString)
  })
  .add('lodash/kebabCase', function () {
    kebabCase(testString)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })

console.log('\n--- slugify ---\n')

const suite3 = new Benchmark.Suite()

suite3
  .add('@fe-utils/string/slugify', function () {
    slugify('Hello World! This is a Test')
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
