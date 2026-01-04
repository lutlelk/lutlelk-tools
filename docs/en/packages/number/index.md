# @lutlelk/number

Collection of number processing utility functions.

## Installation

```bash
pnpm add @lutlelk/number
```

## Usage

```ts
import { clamp, random, format, toCurrency, isPrime } from '@lutlelk/number'
```

## API

### Validation

#### isInteger

Checks if value is an integer.

```ts
isInteger(value: unknown): value is number
```

**Examples**

```ts
isInteger(5) // true
isInteger(5.5) // false
isInteger('5') // false
```

#### isFloat

Checks if value is a float.

```ts
isFloat(value: unknown): value is number
```

**Examples**

```ts
isFloat(5.5) // true
isFloat(5) // false
```

#### isPositive

Checks if value is a positive number.

```ts
isPositive(value: unknown): value is number
```

**Examples**

```ts
isPositive(5) // true
isPositive(-5) // false
isPositive(0) // false
```

#### isNegative

Checks if value is a negative number.

```ts
isNegative(value: unknown): value is number
```

**Examples**

```ts
isNegative(-5) // true
isNegative(5) // false
```

#### isEven

Checks if number is even.

```ts
isEven(value: number): boolean
```

**Examples**

```ts
isEven(4) // true
isEven(5) // false
```

#### isOdd

Checks if number is odd.

```ts
isOdd(value: number): boolean
```

**Examples**

```ts
isOdd(5) // true
isOdd(4) // false
```

#### isPrime

Checks if number is prime.

```ts
isPrime(n: number): boolean
```

**Examples**

```ts
isPrime(17) // true
isPrime(18) // false
```

### Range & Random

#### clamp

Clamps a number between min and max values.

```ts
clamp(value: number, min: number, max: number): number
```

**Examples**

```ts
clamp(5, 0, 10) // => 5
clamp(15, 0, 10) // => 10
clamp(-5, 0, 10) // => 0
```

#### random

Generates a random number between min and max (inclusive).

```ts
random(min: number = 0, max: number = 1): number
```

**Examples**

```ts
random() // => random number between 0 and 1
random(1, 10) // => random number between 1 and 10
```

#### randomInt

Generates a random integer between min and max (inclusive).

```ts
randomInt(min: number, max: number): number
```

**Examples**

```ts
randomInt(1, 10) // => random integer between 1 and 10
```

#### range

Generates an array of numbers from start to end with given step.

```ts
range(start: number, end: number, step: number = 1): number[]
```

**Examples**

```ts
range(1, 5) // => [1, 2, 3, 4, 5]
range(1, 10, 2) // => [1, 3, 5, 7, 9]
range(5, 1, -1) // => [5, 4, 3, 2, 1]
```

### Rounding & Precision

#### round

Rounds a number to specified precision.

```ts
round(value: number, precision: number = 0): number
```

**Examples**

```ts
round(3.14159, 2) // => 3.14
round(3.14159, 4) // => 3.1416
```

#### ceil

Rounds up a number to specified precision.

```ts
ceil(value: number, precision: number = 0): number
```

**Examples**

```ts
ceil(3.14, 0) // => 4
ceil(3.14159, 2) // => 3.15
```

#### floor

Rounds down a number to specified precision.

```ts
floor(value: number, precision: number = 0): number
```

**Examples**

```ts
floor(3.99, 0) // => 3
floor(3.14159, 2) // => 3.14
```

#### toFixed

Formats a number with fixed decimal places.

```ts
toFixed(value: number, digits: number = 0): string
```

**Examples**

```ts
toFixed(3.14159, 2) // => "3.14"
toFixed(3, 2) // => "3.00"
```

### Formatting

#### format

Formats a number with custom options.

```ts
format(value: number, options: FormatOptions = {}): string
```

**Examples**

```ts
format(1234.5678, { decimals: 2 }) // => "1,234.57"
format(1234.5678, { decimals: 2, prefix: '$' }) // => "$1,234.57"
```

#### toCurrency

Formats a number as currency.

```ts
toCurrency(value: number, options: CurrencyOptions = {}): string
```

**Examples**

```ts
toCurrency(1234.56) // => "$1,234.56"
toCurrency(1234.56, { currency: 'EUR', locale: 'de-DE' }) // => "1.234,56 €"
```

#### toPercent

Converts a decimal to percentage string.

```ts
toPercent(value: number, decimals: number = 2): string
```

**Examples**

```ts
toPercent(0.1234) // => "12.34%"
toPercent(0.5) // => "50.00%"
```

#### toBytes

Converts bytes to human-readable format.

```ts
toBytes(value: number, decimals: number = 2): string
```

**Examples**

```ts
toBytes(1024) // => "1.00 KB"
toBytes(1048576) // => "1.00 MB"
```

### Statistics

#### sum

Calculates the sum of numbers.

```ts
sum(...values: number[]): number
```

**Examples**

```ts
sum(1, 2, 3, 4, 5) // => 15
sum(1, 2, 3) // => 6
```

#### average

Calculates the average of numbers.

```ts
average(...values: number[]): number
```

**Examples**

```ts
average(1, 2, 3, 4, 5) // => 3
average(10, 20) // => 15
```

#### max

Gets the maximum value.

```ts
max(...values: number[]): number
```

**Examples**

```ts
max(1, 5, 3, 9, 2) // => 9
```

#### min

Gets the minimum value.

```ts
min(...values: number[]): number
```

**Examples**

```ts
min(1, 5, 3, 9, 2) // => 1
```

#### median

Gets the median value.

```ts
median(...values: number[]): number
```

**Examples**

```ts
median(1, 3, 5) // => 3
median(1, 2, 3, 4) // => 2.5
```

### Math Operations

#### gcd

Calculates greatest common divisor.

```ts
gcd(a: number, b: number): number
```

**Examples**

```ts
gcd(12, 18) // => 6
gcd(24, 36) // => 12
```

#### lcm

Calculates least common multiple.

```ts
lcm(a: number, b: number): number
```

**Examples**

```ts
lcm(4, 6) // => 12
lcm(3, 5) // => 15
```

#### factorial

Calculates factorial of a number.

```ts
factorial(n: number): number
```

**Examples**

```ts
factorial(5) // => 120
factorial(0) // => 1
```

#### fibonacci

Gets the nth Fibonacci number.

```ts
fibonacci(n: number): number
```

**Examples**

```ts
fibonacci(0) // => 0
fibonacci(1) // => 1
fibonacci(10) // => 55
```
