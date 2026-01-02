import { describe, it, expect } from 'vitest'
import { groupBy } from '../src'

describe('groupBy', () => {
  it('should group by string key', () => {
    const arr = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Alice', age: 28 }
    ]
    
    const result = groupBy(arr, item => item.name)
    
    expect(result).toEqual({
      Alice: [
        { name: 'Alice', age: 25 },
        { name: 'Alice', age: 28 }
      ],
      Bob: [
        { name: 'Bob', age: 30 }
      ]
    })
  })

  it('should group by number key', () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const result = groupBy(arr, item => item % 2 === 0 ? 'even' : 'odd')
    
    expect(result).toEqual({
      even: [2, 4, 6],
      odd: [1, 3, 5]
    })
  })

  it('should handle empty array', () => {
    expect(groupBy([], item => item)).toEqual({})
  })

  it('should handle single element array', () => {
    expect(groupBy([1], item => item)).toEqual({ '1': [1] })
  })

  it('should handle complex grouping keys', () => {
    const arr = [
      { category: 'fruit', name: 'apple' },
      { category: 'vegetable', name: 'carrot' },
      { category: 'fruit', name: 'banana' }
    ]
    
    const result = groupBy(arr, item => item.category)
    
    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' }
      ],
      vegetable: [
        { category: 'vegetable', name: 'carrot' }
      ]
    })
  })
})