# @fe-utils/number

数字处理工具函数集合。

## 安装

```bash
pnpm add @fe-utils/number
```

## 使用

```ts
import {
  clamp,
  random,
  range,
  round,
  format,
  sum,
  average,
  toCurrency,
  toBytes
} from '@fe-utils/number'
```

## API

### 验证函数

#### isInteger

检查值是否为整数。

```ts
isInteger(value: unknown): value is number
```

**示例**

```ts
isInteger(123) // true
isInteger(1.5) // false
```

#### isFloat

检查值是否为浮点数。

```ts
isFloat(value: unknown): value is number
```

**示例**

```ts
isFloat(1.5) // true
isFloat(123) // false
```

#### isPositive

检查值是否为正数。

```ts
isPositive(value: unknown): value is number
```

**示例**

```ts
isPositive(123) // true
isPositive(-123) // false
```

#### isNegative

检查值是否为负数。

```ts
isNegative(value: unknown): value is number
```

**示例**

```ts
isNegative(-123) // true
isNegative(123) // false
```

#### isEven

检查数字是否为偶数。

```ts
isEven(value: number): boolean
```

**示例**

```ts
isEven(2) // true
isEven(3) // false
```

#### isOdd

检查数字是否为奇数。

```ts
isOdd(value: number): boolean
```

**示例**

```ts
isOdd(3) // true
isOdd(2) // false
```

### 范围函数

#### clamp

将数字限制在指定范围内。

```ts
clamp(value: number, min: number, max: number): number
```

**示例**

```ts
clamp(5, 0, 10) // 5
clamp(-5, 0, 10) // 0
clamp(15, 0, 10) // 10
```

#### random

生成随机数。

```ts
random(min?: number, max?: number): number
randomInt(min: number, max: number): number
```

**示例**

```ts
random() // 0 到 1 之间的随机数
random(0, 10) // 0 到 10 之间的随机数
randomInt(0, 10) // 0 到 10 之间的随机整数
```

#### range

生成数字范围。

```ts
range(start: number, end: number, step?: number): number[]
```

**示例**

```ts
range(0, 5) // [0, 1, 2, 3, 4, 5]
range(0, 10, 2) // [0, 2, 4, 6, 8, 10]
```

### 四舍五入函数

#### round

四舍五入。

```ts
round(value: number, precision?: number): number
```

**示例**

```ts
round(1.234, 2) // 1.23
round(1.236, 2) // 1.24
```

#### ceil

向上取整。

```ts
ceil(value: number, precision?: number): number
```

**示例**

```ts
ceil(1.234, 2) // 1.24
```

#### floor

向下取整。

```ts
floor(value: number, precision?: number): number
```

**示例**

```ts
floor(1.234, 2) // 1.23
```

### 格式化函数

#### format

格式化数字。

```ts
format(value: number, options?: FormatOptions): string
```

**示例**

```ts
format(1234.567, { decimals: 2 }) // '1,234.57'
format(1234.567, { decimals: 2, prefix: '$' }) // '$1,234.57'
```

#### toFixed

转换为固定小数位数的字符串。

```ts
toFixed(value: number, digits?: number): string
```

**示例**

```ts
toFixed(1.234, 2) // '1.23'
```

#### toCurrency

转换为货币格式。

```ts
toCurrency(value: number, options?: CurrencyOptions): string
```

**示例**

```ts
toCurrency(1234.56) // '$1,234.56'
toCurrency(1234.56, { currency: 'CNY', locale: 'zh-CN' }) // '¥1,234.56'
```

#### toBytes

转换为字节单位。

```ts
toBytes(value: number, decimals?: number): string
```

**示例**

```ts
toBytes(1024) // '1.00 KB'
toBytes(1048576) // '1.00 MB'
```

#### toPercent

转换为百分比字符串。

```ts
toPercent(value: number, decimals?: number): string
```

**示例**

```ts
toPercent(0.1234) // '12.34%'
```

### 统计函数

#### sum

求和。

```ts
sum(...values: number[]): number
```

**示例**

```ts
sum(1, 2, 3, 4, 5) // 15
```

#### average

求平均值。

```ts
average(...values: number[]): number
```

**示例**

```ts
average(1, 2, 3, 4, 5) // 3
```

#### max

求最大值。

```ts
max(...values: number[]): number
```

**示例**

```ts
max(1, 2, 3, 4, 5) // 5
```

#### min

求最小值。

```ts
min(...values: number[]): number
```

**示例**

```ts
min(1, 2, 3, 4, 5) // 1
```

#### median

求中位数。

```ts
median(...values: number[]): number
```

**示例**

```ts
median(1, 2, 3, 4, 5) // 3
median(1, 2, 3, 4) // 2.5
```

### 数学函数

#### percent

计算百分比。

```ts
percent(value: number, total: number, decimals?: number): number
```

**示例**

```ts
percent(25, 100) // 25
```

#### gcd

计算最大公约数。

```ts
gcd(a: number, b: number): number
```

**示例**

```ts
gcd(12, 18) // 6
```

#### lcm

计算最小公倍数。

```ts
lcm(a: number, b: number): number
```

**示例**

```ts
lcm(4, 6) // 12
```

#### factorial

计算阶乘。

```ts
factorial(n: number): number
```

**示例**

```ts
factorial(5) // 120
```

#### fibonacci

计算斐波那契数。

```ts
fibonacci(n: number): number
```

**示例**

```ts
fibonacci(10) // 55
```

#### isPrime

检查是否为质数。

```ts
isPrime(n: number): boolean
```

**示例**

```ts
isPrime(7) // true
isPrime(8) // false
```

### 三角函数

#### degToRad

角度转弧度。

```ts
degToRad(degrees: number): number
```

**示例**

```ts
degToRad(180) // 3.141592653589793
```

#### radToDeg

弧度转角度。

```ts
radToDeg(radians: number): number
```

**示例**

```ts
radToDeg(Math.PI) // 180
```

### 进制转换

#### toHex

转换为十六进制。

```ts
toHex(value: number, prefix?: boolean): string
```

**示例**

```ts
toHex(255) // '0xff'
toHex(255, false) // 'ff'
```

#### fromHex

从十六进制转换。

```ts
fromHex(hex: string): number
```

**示例**

```ts
fromHex('ff') // 255
```

#### toBinary

转换为二进制。

```ts
toBinary(value: number, prefix?: boolean): string
```

**示例**

```ts
toBinary(5) // '0b101'
```

#### fromBinary

从二进制转换。

```ts
fromBinary(binary: string): number
```

**示例**

```ts
fromBinary('101') // 5
```

### 其他函数

#### abs

绝对值。

```ts
abs(value: number): number
```

**示例**

```ts
abs(-5) // 5
```

#### sign

符号函数。

```ts
sign(value: number): number
```

**示例**

```ts
sign(5) // 1
sign(-5) // -1
sign(0) // 0
```

#### pow

幂运算。

```ts
pow(base: number, exponent: number): number
```

**示例**

```ts
pow(2, 3) // 8
```

#### sqrt

平方根。

```ts
sqrt(value: number): number
```

**示例**

```ts
sqrt(16) // 4
```
