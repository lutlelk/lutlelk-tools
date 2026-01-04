# @lutlelk/number

A comprehensive number utility library for TypeScript/JavaScript with validation, formatting, conversion, and mathematical operations.

## Installation

```bash
npm install @lutlelk/number
# or
pnpm add @lutlelk/number
# or
yarn add @lutlelk/number
```

## Usage

### Import the entire package

```typescript
import { clamp, random, format, toCurrency } from '@lutlelk/number'

clamp(5, 0, 10) // => 5
clamp(15, 0, 10) // => 10
```

### Import specific functions (tree-shaking supported)

```typescript
import { randomInt, toBytes, isPrime } from '@lutlelk/number'

randomInt(1, 10) // => random integer between 1 and 10
toBytes(1024) // => "1.00 KB"
isPrime(17) // => true
```

## API

### Validation

#### `isInteger(value: unknown): value is number`

Check if value is an integer.

```typescript
isInteger(5) // => true
isInteger(5.5) // => false
isInteger('5') // => false
```

#### `isFloat(value: unknown): value is number`

Check if value is a float.

```typescript
isFloat(5.5) // => true
isFloat(5) // => false
```

#### `isPositive(value: unknown): value is number`

Check if value is a positive number.

```typescript
isPositive(5) // => true
isPositive(-5) // => false
isPositive(0) // => false
```

#### `isNegative(value: unknown): value is number`

Check if value is a negative number.

```typescript
isNegative(-5) // => true
isNegative(5) // => false
```

#### `isZero(value: unknown): boolean`

Check if value is zero.

```typescript
isZero(0) // => true
isZero(0.0) // => true
isZero(1) // => false
```

#### `isEven(value: number): boolean`

Check if number is even.

```typescript
isEven(4) // => true
isEven(5) // => false
```

#### `isOdd(value: number): boolean`

Check if number is odd.

```typescript
isOdd(5) // => true
isOdd(4) // => false
```

#### `isPrime(n: number): boolean`

Check if number is prime.

```typescript
isPrime(17) // => true
isPrime(18) // => false
```

#### `isSafeInteger(value: unknown): value is number`

Check if value is a safe integer.

```typescript
isSafeInteger(9007199254740991) // => true
isSafeInteger(9007199254740992) // => false
```

### Range & Random

#### `clamp(value: number, min: number, max: number): number`

Clamp a number between min and max values.

```typescript
clamp(5, 0, 10) // => 5
clamp(15, 0, 10) // => 10
clamp(-5, 0, 10) // => 0
```

#### `random(min: number = 0, max: number = 1): number`

Generate a random number between min and max (inclusive).

```typescript
random() // => random number between 0 and 1
random(1, 10) // => random number between 1 and 10
```

#### `randomInt(min: number, max: number): number`

Generate a random integer between min and max (inclusive).

```typescript
randomInt(1, 10) // => random integer between 1 and 10
```

#### `range(start: number, end: number, step: number = 1): number[]`

Generate an array of numbers from start to end with given step.

```typescript
range(1, 5) // => [1, 2, 3, 4, 5]
range(1, 10, 2) // => [1, 3, 5, 7, 9]
range(5, 1, -1) // => [5, 4, 3, 2, 1]
```

### Rounding & Precision

#### `round(value: number, precision: number = 0): number`

Round a number to specified precision.

```typescript
round(3.14159, 2) // => 3.14
round(3.14159, 4) // => 3.1416
```

#### `ceil(value: number, precision: number = 0): number`

Round up a number to specified precision.

```typescript
ceil(3.14, 0) // => 4
ceil(3.14159, 2) // => 3.15
```

#### `floor(value: number, precision: number = 0): number`

Round down a number to specified precision.

```typescript
floor(3.99, 0) // => 3
floor(3.14159, 2) // => 3.14
```

#### `truncate(value: number, precision: number = 0): number`

Truncate a number to specified precision (no rounding).

```typescript
truncate(3.999, 2) // => 3.99
truncate(3.14159, 2) // => 3.14
```

#### `toFixed(value: number, digits: number = 0): string`

Format a number with fixed decimal places.

```typescript
toFixed(3.14159, 2) // => "3.14"
toFixed(3, 2) // => "3.00"
```

#### `toPrecision(value: number, precision: number): string`

Format a number to specified precision.

```typescript
toPrecision(123.456, 4) // => "123.5"
toPrecision(0.0012345, 2) // => "0.0012"
```

### Formatting

#### `format(value: number, options: FormatOptions = {}): string`

Format a number with custom options.

```typescript
format(1234.5678, { decimals: 2 }) // => "1,234.57"
format(1234.5678, { decimals: 2, prefix: '$' }) // => "$1,234.57"
format(1234.5678, { decimals: 2, suffix: ' USD' }) // => "1,234.57 USD"
format(1234.5678, { decimals: 2, thousandsSeparator: ' ', decimalSeparator: ',' }) // => "1 234,57"
```

#### `toCurrency(value: number, options: CurrencyOptions = {}): string`

Format a number as currency.

```typescript
toCurrency(1234.56) // => "$1,234.56"
toCurrency(1234.56, { currency: 'EUR', locale: 'de-DE' }) // => "1.234,56 €"
toCurrency(1234.56, { currency: 'CNY', locale: 'zh-CN' }) // => "¥1,234.56"
```

#### `toPercent(value: number, decimals: number = 2): string`

Convert a decimal to percentage string.

```typescript
toPercent(0.1234) // => "12.34%"
toPercent(0.5) // => "50.00%"
```

#### `fromPercent(percent: string): number`

Convert a percentage string to decimal.

```typescript
fromPercent('12.34%') // => 0.1234
fromPercent('50%') // => 0.5
```

#### `toBytes(value: number, decimals: number = 2): string`

Convert bytes to human-readable format.

```typescript
toBytes(1024) // => "1.00 KB"
toBytes(1048576) // => "1.00 MB"
toBytes(1073741824) // => "1.00 GB"
```

#### `fromBytes(str: string): number`

Convert human-readable byte string to bytes.

```typescript
fromBytes('1 KB') // => 1024
fromBytes('1.5 MB') // => 1572864
```

#### `toOrdinal(value: number): string`

Convert a number to ordinal string.

```typescript
toOrdinal(1) // => "1st"
toOrdinal(2) // => "2nd"
toOrdinal(3) // => "3rd"
toOrdinal(4) // => "4th"
toOrdinal(21) // => "21st"
```

#### `pad(value: number, length: number = 2, padChar: string = '0'): string`

Pad a number with leading zeros.

```typescript
pad(5) // => "05"
pad(5, 4) // => "0005"
pad(-5, 4) // => "-005"
```

### Statistics

#### `sum(...values: number[]): number`

Calculate the sum of numbers.

```typescript
sum(1, 2, 3, 4, 5) // => 15
sum(1, 2, 3) // => 6
```

#### `average(...values: number[]): number`

Calculate the average of numbers.

```typescript
average(1, 2, 3, 4, 5) // => 3
average(10, 20) // => 15
```

#### `max(...values: number[]): number`

Get the maximum value.

```typescript
max(1, 5, 3, 9, 2) // => 9
```

#### `min(...values: number[]): number`

Get the minimum value.

```typescript
min(1, 5, 3, 9, 2) // => 1
```

#### `median(...values: number[]): number`

Get the median value.

```typescript
median(1, 3, 5) // => 3
median(1, 2, 3, 4) // => 2.5
```

#### `percent(value: number, total: number, decimals: number = 2): number`

Calculate percentage of value relative to total.

```typescript
percent(25, 100) // => 25
percent(1, 3) // => 33.33
```

### Math Operations

#### `gcd(a: number, b: number): number`

Calculate greatest common divisor.

```typescript
gcd(12, 18) // => 6
gcd(24, 36) // => 12
```

#### `lcm(a: number, b: number): number`

Calculate least common multiple.

```typescript
lcm(4, 6) // => 12
lcm(3, 5) // => 15
```

#### `factorial(n: number): number`

Calculate factorial of a number.

```typescript
factorial(5) // => 120
factorial(0) // => 1
```

#### `fibonacci(n: number): number`

Get the nth Fibonacci number.

```typescript
fibonacci(0) // => 0
fibonacci(1) // => 1
fibonacci(10) // => 55
```

#### `abs(value: number): number`

Get absolute value.

```typescript
abs(-5) // => 5
abs(5) // => 5
```

#### `sign(value: number): number`

Get the sign of a number.

```typescript
sign(-5) // => -1
sign(0) // => 0
sign(5) // => 1
```

#### `pow(base: number, exponent: number): number`

Calculate base to the power of exponent.

```typescript
pow(2, 3) // => 8
pow(10, 2) // => 100
```

#### `sqrt(value: number): number`

Calculate square root.

```typescript
sqrt(9) // => 3
sqrt(2) // => 1.4142135623730951
```

#### `cbrt(value: number): number`

Calculate cube root.

```typescript
cbrt(27) // => 3
cbrt(8) // => 2
```

#### `log(value: number, base: number = Math.E): number`

Calculate logarithm.

```typescript
log(100, 10) // => 2
log(Math.E) // => 1
```

#### `log10(value: number): number`

Calculate base-10 logarithm.

```typescript
log10(100) // => 2
log10(1000) // => 3
```

#### `log2(value: number): number`

Calculate base-2 logarithm.

```typescript
log2(8) // => 3
log2(16) // => 4
```

#### `exp(value: number): number`

Calculate e raised to the power of value.

```typescript
exp(1) // => 2.718281828459045
exp(2) // => 7.38905609893065
```

### Trigonometry

#### `degToRad(degrees: number): number`

Convert degrees to radians.

```typescript
degToRad(180) // => 3.141592653589793
degToRad(90) // => 1.5707963267948966
```

#### `radToDeg(radians: number): number`

Convert radians to degrees.

```typescript
radToDeg(Math.PI) // => 180
radToDeg(Math.PI / 2) // => 90
```

#### `sin(value: number): number`

Calculate sine.

```typescript
sin(0) // => 0
sin(Math.PI / 2) // => 1
```

#### `cos(value: number): number`

Calculate cosine.

```typescript
cos(0) // => 1
cos(Math.PI) // => -1
```

#### `tan(value: number): number`

Calculate tangent.

```typescript
tan(0) // => 0
tan(Math.PI / 4) // => 1
```

#### `asin(value: number): number`

Calculate arcsine.

```typescript
asin(0) // => 0
asin(1) // => 1.5707963267948966
```

#### `acos(value: number): number`

Calculate arccosine.

```typescript
acos(1) // => 0
acos(0) // => 1.5707963267948966
```

#### `atan(value: number): number`

Calculate arctangent.

```typescript
atan(0) // => 0
atan(1) // => 0.7853981633974483
```

#### `atan2(y: number, x: number): number`

Calculate arctangent of y/x.

```typescript
atan2(1, 1) // => 0.7853981633974483
atan2(-1, -1) // => -2.356194490192345
```

### Base Conversion

#### `toHex(value: number, prefix: boolean = true): string`

Convert number to hexadecimal string.

```typescript
toHex(255) // => "0xff"
toHex(255, false) // => "ff"
toHex(-255) // => "-0xff"
```

#### `fromHex(hex: string): number`

Convert hexadecimal string to number.

```typescript
fromHex('ff') // => 255
fromHex('0xff') // => 255
```

#### `toBinary(value: number, prefix: boolean = true): string`

Convert number to binary string.

```typescript
toBinary(10) // => "0b1010"
toBinary(10, false) // => "1010"
```

#### `fromBinary(binary: string): number`

Convert binary string to number.

```typescript
fromBinary('1010') // => 10
fromBinary('0b1010') // => 10
```

#### `toOctal(value: number, prefix: boolean = true): string`

Convert number to octal string.

```typescript
toOctal(10) // => "0o12"
toOctal(10, false) // => "12"
```

#### `fromOctal(octal: string): number`

Convert octal string to number.

```typescript
fromOctal('12') // => 10
fromOctal('0o12') // => 10
```

### Utility

#### `toSafeInteger(value: unknown): number`

Convert value to safe integer.

```typescript
toSafeInteger(3.2) // => 3
toSafeInteger(NaN) // => 0
toSafeInteger(Infinity) // => 9007199254740991
```

## License

MIT
