import { describe, it, expect } from 'vitest'
import {
  gcd,
  lcm,
  factorial,
  fibonacci,
  isPrime,
  degToRad,
  radToDeg,
  toSafeInteger,
  isSafeInteger,
  truncate,
  abs,
  sign,
  pow,
  sqrt,
  cbrt,
  log,
  log10,
  log2,
  exp,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  atan2
} from '../src'

describe('math functions', () => {
  describe('gcd', () => {
    it('should calculate greatest common divisor', () => {
      expect(gcd(12, 18)).toBe(6)
      expect(gcd(48, 18)).toBe(6)
      expect(gcd(17, 23)).toBe(1)
      expect(gcd(0, 5)).toBe(5)
      expect(gcd(5, 0)).toBe(5)
    })

    it('should handle negative numbers', () => {
      expect(gcd(-12, 18)).toBe(6)
      expect(gcd(12, -18)).toBe(6)
      expect(gcd(-12, -18)).toBe(6)
    })
  })

  describe('lcm', () => {
    it('should calculate least common multiple', () => {
      expect(lcm(4, 6)).toBe(12)
      expect(lcm(3, 5)).toBe(15)
      expect(lcm(12, 18)).toBe(36)
    })

    it('should return 0 if either argument is 0', () => {
      expect(lcm(0, 5)).toBe(0)
      expect(lcm(5, 0)).toBe(0)
    })

    it('should handle negative numbers', () => {
      expect(lcm(-4, 6)).toBe(12)
      expect(lcm(4, -6)).toBe(12)
    })
  })

  describe('factorial', () => {
    it('should calculate factorial', () => {
      expect(factorial(0)).toBe(1)
      expect(factorial(1)).toBe(1)
      expect(factorial(5)).toBe(120)
      expect(factorial(10)).toBe(3628800)
    })

    it('should return 0 for negative numbers', () => {
      expect(factorial(-1)).toBe(0)
      expect(factorial(-5)).toBe(0)
    })
  })

  describe('fibonacci', () => {
    it('should calculate fibonacci numbers', () => {
      expect(fibonacci(0)).toBe(0)
      expect(fibonacci(1)).toBe(1)
      expect(fibonacci(2)).toBe(1)
      expect(fibonacci(3)).toBe(2)
      expect(fibonacci(4)).toBe(3)
      expect(fibonacci(5)).toBe(5)
      expect(fibonacci(10)).toBe(55)
    })

    it('should return 0 for non-positive numbers', () => {
      expect(fibonacci(0)).toBe(0)
      expect(fibonacci(-1)).toBe(0)
    })
  })

  describe('isPrime', () => {
    it('should identify prime numbers', () => {
      expect(isPrime(2)).toBe(true)
      expect(isPrime(3)).toBe(true)
      expect(isPrime(5)).toBe(true)
      expect(isPrime(7)).toBe(true)
      expect(isPrime(11)).toBe(true)
      expect(isPrime(97)).toBe(true)
    })

    it('should identify non-prime numbers', () => {
      expect(isPrime(0)).toBe(false)
      expect(isPrime(1)).toBe(false)
      expect(isPrime(4)).toBe(false)
      expect(isPrime(6)).toBe(false)
      expect(isPrime(8)).toBe(false)
      expect(isPrime(9)).toBe(false)
      expect(isPrime(100)).toBe(false)
    })

    it('should handle negative numbers', () => {
      expect(isPrime(-1)).toBe(false)
      expect(isPrime(-2)).toBe(false)
    })
  })

  describe('degToRad', () => {
    it('should convert degrees to radians', () => {
      expect(degToRad(0)).toBe(0)
      expect(degToRad(90)).toBeCloseTo(Math.PI / 2)
      expect(degToRad(180)).toBeCloseTo(Math.PI)
      expect(degToRad(360)).toBeCloseTo(2 * Math.PI)
    })

    it('should handle negative degrees', () => {
      expect(degToRad(-180)).toBeCloseTo(-Math.PI)
    })
  })

  describe('radToDeg', () => {
    it('should convert radians to degrees', () => {
      expect(radToDeg(0)).toBe(0)
      expect(radToDeg(Math.PI / 2)).toBeCloseTo(90)
      expect(radToDeg(Math.PI)).toBeCloseTo(180)
      expect(radToDeg(2 * Math.PI)).toBeCloseTo(360)
    })

    it('should handle negative radians', () => {
      expect(radToDeg(-Math.PI)).toBeCloseTo(-180)
    })
  })

  describe('toSafeInteger', () => {
    it('should convert to safe integer', () => {
      expect(toSafeInteger(123.45)).toBe(123)
      expect(toSafeInteger(-123.45)).toBe(-124)
    })

    it('should handle string input', () => {
      expect(toSafeInteger('123.45')).toBe(123)
      expect(toSafeInteger('-123.45')).toBe(-124)
    })

    it('should handle NaN', () => {
      expect(toSafeInteger(NaN)).toBe(0)
    })

    it('should handle Infinity', () => {
      expect(toSafeInteger(Infinity)).toBe(Number.MAX_SAFE_INTEGER)
      expect(toSafeInteger(-Infinity)).toBe(-Number.MAX_SAFE_INTEGER)
    })

    it('should handle values beyond safe integer range', () => {
      expect(toSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER)
      expect(toSafeInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(Number.MIN_SAFE_INTEGER)
    })
  })

  describe('isSafeInteger', () => {
    it('should identify safe integers', () => {
      expect(isSafeInteger(123)).toBe(true)
      expect(isSafeInteger(0)).toBe(true)
      expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
      expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true)
    })

    it('should identify non-safe integers', () => {
      expect(isSafeInteger(123.45)).toBe(false)
      expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
      expect(isSafeInteger(Infinity)).toBe(false)
      expect(isSafeInteger(NaN)).toBe(false)
    })

    it('should handle non-numbers', () => {
      expect(isSafeInteger('123')).toBe(false)
      expect(isSafeInteger(null)).toBe(false)
    })
  })

  describe('truncate', () => {
    it('should truncate to integer by default', () => {
      expect(truncate(3.9)).toBe(3)
      expect(truncate(-3.9)).toBe(-3)
      expect(truncate(3.1)).toBe(3)
    })

    it('should truncate to specified precision', () => {
      expect(truncate(3.999, 2)).toBe(3.99)
      expect(truncate(-3.999, 2)).toBe(-3.99)
      expect(truncate(1234.5678, -2)).toBe(1200)
    })

    it('should handle zero', () => {
      expect(truncate(0)).toBe(0)
    })
  })

  describe('abs', () => {
    it('should return absolute value', () => {
      expect(abs(5)).toBe(5)
      expect(abs(-5)).toBe(5)
      expect(abs(0)).toBe(0)
      expect(abs(3.14)).toBe(3.14)
      expect(abs(-3.14)).toBe(3.14)
    })
  })

  describe('sign', () => {
    it('should return sign of number', () => {
      expect(sign(5)).toBe(1)
      expect(sign(-5)).toBe(-1)
      expect(sign(0)).toBe(0)
      expect(sign(3.14)).toBe(1)
      expect(sign(-3.14)).toBe(-1)
    })
  })

  describe('pow', () => {
    it('should calculate power', () => {
      expect(pow(2, 3)).toBe(8)
      expect(pow(3, 2)).toBe(9)
      expect(pow(5, 0)).toBe(1)
      expect(pow(2, 10)).toBe(1024)
    })

    it('should handle negative exponents', () => {
      expect(pow(2, -1)).toBe(0.5)
      expect(pow(10, -2)).toBe(0.01)
    })

    it('should handle fractional exponents', () => {
      expect(pow(4, 0.5)).toBe(2)
      expect(pow(8, 1 / 3)).toBeCloseTo(2)
    })
  })

  describe('sqrt', () => {
    it('should calculate square root', () => {
      expect(sqrt(4)).toBe(2)
      expect(sqrt(9)).toBe(3)
      expect(sqrt(16)).toBe(4)
      expect(sqrt(2)).toBeCloseTo(1.4142135623730951)
    })

    it('should handle zero', () => {
      expect(sqrt(0)).toBe(0)
    })
  })

  describe('cbrt', () => {
    it('should calculate cube root', () => {
      expect(cbrt(8)).toBe(2)
      expect(cbrt(27)).toBe(3)
      expect(cbrt(64)).toBe(4)
    })

    it('should handle negative numbers', () => {
      expect(cbrt(-8)).toBe(-2)
      expect(cbrt(-27)).toBe(-3)
    })

    it('should handle zero', () => {
      expect(cbrt(0)).toBe(0)
    })
  })

  describe('log', () => {
    it('should calculate natural logarithm by default', () => {
      expect(log(Math.E)).toBeCloseTo(1)
      expect(log(1)).toBeCloseTo(0)
      expect(log(Math.E * Math.E)).toBeCloseTo(2)
    })

    it('should calculate logarithm with custom base', () => {
      expect(log(100, 10)).toBeCloseTo(2)
      expect(log(8, 2)).toBeCloseTo(3)
      expect(log(27, 3)).toBeCloseTo(3)
    })
  })

  describe('log10', () => {
    it('should calculate base-10 logarithm', () => {
      expect(log10(10)).toBeCloseTo(1)
      expect(log10(100)).toBeCloseTo(2)
      expect(log10(1000)).toBeCloseTo(3)
      expect(log10(1)).toBeCloseTo(0)
    })
  })

  describe('log2', () => {
    it('should calculate base-2 logarithm', () => {
      expect(log2(2)).toBeCloseTo(1)
      expect(log2(4)).toBeCloseTo(2)
      expect(log2(8)).toBeCloseTo(3)
      expect(log2(1)).toBeCloseTo(0)
    })
  })

  describe('exp', () => {
    it('should calculate e^x', () => {
      expect(exp(0)).toBeCloseTo(1)
      expect(exp(1)).toBeCloseTo(Math.E)
      expect(exp(2)).toBeCloseTo(Math.E * Math.E)
    })
  })

  describe('sin', () => {
    it('should calculate sine', () => {
      expect(sin(0)).toBeCloseTo(0)
      expect(sin(Math.PI / 2)).toBeCloseTo(1)
      expect(sin(Math.PI)).toBeCloseTo(0)
      expect(sin(3 * Math.PI / 2)).toBeCloseTo(-1)
    })
  })

  describe('cos', () => {
    it('should calculate cosine', () => {
      expect(cos(0)).toBeCloseTo(1)
      expect(cos(Math.PI / 2)).toBeCloseTo(0)
      expect(cos(Math.PI)).toBeCloseTo(-1)
      expect(cos(3 * Math.PI / 2)).toBeCloseTo(0)
    })
  })

  describe('tan', () => {
    it('should calculate tangent', () => {
      expect(tan(0)).toBeCloseTo(0)
      expect(tan(Math.PI / 4)).toBeCloseTo(1)
    })
  })

  describe('asin', () => {
    it('should calculate arcsine', () => {
      expect(asin(0)).toBeCloseTo(0)
      expect(asin(1)).toBeCloseTo(Math.PI / 2)
      expect(asin(-1)).toBeCloseTo(-Math.PI / 2)
    })
  })

  describe('acos', () => {
    it('should calculate arccosine', () => {
      expect(acos(1)).toBeCloseTo(0)
      expect(acos(0)).toBeCloseTo(Math.PI / 2)
      expect(acos(-1)).toBeCloseTo(Math.PI)
    })
  })

  describe('atan', () => {
    it('should calculate arctangent', () => {
      expect(atan(0)).toBeCloseTo(0)
      expect(atan(1)).toBeCloseTo(Math.PI / 4)
      expect(atan(-1)).toBeCloseTo(-Math.PI / 4)
    })
  })

  describe('atan2', () => {
    it('should calculate arctangent of quotient', () => {
      expect(atan2(1, 1)).toBeCloseTo(Math.PI / 4)
      expect(atan2(1, 0)).toBeCloseTo(Math.PI / 2)
      expect(atan2(0, 1)).toBeCloseTo(0)
      expect(atan2(-1, -1)).toBeCloseTo(-Math.PI * 0.75)
    })
  })
})
