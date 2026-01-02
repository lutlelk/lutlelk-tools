import { expectType } from 'tsd'
import { chunk, flatten, uniq, groupBy, sort, sortBy, reverse, find, findIndex, findLast, findLastIndex, includes, indexOf, lastIndexOf, filter, map, reduce, forEach, some, every } from '../src'

// Test chunk function types
expectType<number[][]>(chunk([1, 2, 3], 2))
expectType<string[][]>(chunk(['a', 'b', 'c'], 1))
expectType<Array<Array<number | string>>>(chunk([1, 'a', 2], 2))

// Test flatten function types
expectType<number[]>(flatten([[1, 2], [3, 4]]))
expectType<string[]>(flatten([['a', 'b'], ['c']]))
expectType<Array<number | string>>(flatten([[1, 'a'], [2, 'b']]))

// Test uniq function types
expectType<number[]>(uniq([1, 2, 3, 2, 1]))
expectType<string[]>(uniq(['a', 'b', 'a', 'c']))
expectType<Array<number | string>>(uniq([1, 'a', 2, 'a', 1]))

// Test groupBy function types
expectType<Record<string, Array<{ name: string; age: number }>>>(groupBy([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], item => item.name))
expectType<Record<'even' | 'odd', number[]>>(groupBy([1, 2, 3, 4, 5], item => item % 2 === 0 ? 'even' : 'odd'))

// Test sort function types
expectType<number[]>(sort([3, 1, 2]))
expectType<string[]>(sort(['c', 'a', 'b']))
expectType<number[]>(sort([3, 1, 2], (a, b) => a - b))

// Test sortBy function types
expectType<Array<{ name: string; age: number }>>(sortBy([{ name: 'Charlie', age: 30 }, { name: 'Alice', age: 25 }], 'name'))
expectType<Array<{ name: string; age: number }>>(sortBy([{ name: 'Charlie', age: 30 }, { name: 'Alice', age: 25 }], 'age'))

// Test reverse function types
expectType<number[]>(reverse([1, 2, 3]))
expectType<string[]>(reverse(['a', 'b', 'c']))

// Test find function types
expectType<number | undefined>(find([1, 2, 3], x => x > 1))
expectType<string | undefined>(find(['a', 'b', 'c'], x => x === 'b'))

// Test findIndex function types
expectType<number>(findIndex([1, 2, 3], x => x > 1))
expectType<number>(findIndex(['a', 'b', 'c'], x => x === 'b'))

// Test findLast function types
expectType<number | undefined>(findLast([1, 2, 3, 1], x => x === 1))
expectType<string | undefined>(findLast(['a', 'b', 'a'], x => x === 'a'))

// Test findLastIndex function types
expectType<number>(findLastIndex([1, 2, 3, 1], x => x === 1))
expectType<number>(findLastIndex(['a', 'b', 'a'], x => x === 'a'))

// Test includes function types
expectType<boolean>(includes([1, 2, 3], 2))
expectType<boolean>(includes(['a', 'b', 'c'], 'b'))

// Test indexOf function types
expectType<number>(indexOf([1, 2, 3, 2], 2))
expectType<number>(indexOf(['a', 'b', 'c', 'b'], 'b'))
expectType<number>(indexOf([1, 2, 3, 2], 2, 2))

// Test lastIndexOf function types
expectType<number>(lastIndexOf([1, 2, 3, 2], 2))
expectType<number>(lastIndexOf(['a', 'b', 'c', 'b'], 'b'))
expectType<number>(lastIndexOf([1, 2, 3, 2], 2, 2))

// Test filter function types
expectType<number[]>(filter([1, 2, 3, 4, 5], x => x > 3))
expectType<string[]>(filter(['a', 'b', 'c'], x => x !== 'b'))
expectType<Array<{ name: string; age: number }>>(filter([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], person => person.age > 25))

// Test map function types
expectType<number[]>(map([1, 2, 3], x => x * 2))
expectType<string[]>(map([1, 2, 3], x => x.toString()))
expectType<string[]>(map([{ name: 'Alice' }, { name: 'Bob' }], person => person.name))

// Test reduce function types
expectType<number>(reduce([1, 2, 3, 4], (sum, x) => sum + x, 0))
expectType<string>(reduce(['a', 'b', 'c'], (str, x) => str + x, ''))
expectType<{a: number, b: number, c: number}>(reduce(['a', 'b', 'c'], (obj, x, i) => ({ ...obj, [x]: i }), {} as {a: number, b: number, c: number}))

// Test forEach function types
forEach([1, 2, 3], x => console.log(x))
forEach(['a', 'b', 'c'], x => console.log(x))
forEach([{ name: 'Alice' }, { name: 'Bob' }], person => console.log(person.name))

// Test some function types
expectType<boolean>(some([1, 2, 3, 4, 5], x => x > 3))
expectType<boolean>(some(['a', 'b', 'c'], x => x === 'b'))
expectType<boolean>(some([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], person => person.age > 25))

// Test every function types
expectType<boolean>(every([2, 4, 6, 8], x => x % 2 === 0))
expectType<boolean>(every(['a', 'a', 'a'], x => x === 'a'))
expectType<boolean>(every([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }], person => person.age > 20))
