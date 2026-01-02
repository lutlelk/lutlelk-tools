import { chunk } from './packages/array/dist/chunk.js'
import { debounce } from './packages/function/dist/debounce.js'
import { $, $$ } from './packages/dom/dist/selector.js'

console.log('Testing single-file imports:')
console.log('chunk([1, 2, 3, 4, 5], 2):', chunk([1, 2, 3, 4, 5], 2))
console.log('debounce function:', debounce(() => console.log('test'), 100))
console.log('$ selector:', $)
console.log('$$ selector:', $$)
