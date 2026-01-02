export function partial<T extends (...args: any[]) => any>(
  fn: T,
  ...presetArgs: any[]
): (...remainingArgs: any[]) => ReturnType<T> {
  return function (this: any, ...remainingArgs: any[]) {
    return fn.apply(this, [...presetArgs, ...remainingArgs])
  }
}

export function partialRight<T extends (...args: any[]) => any>(
  fn: T,
  ...presetArgs: any[]
): (...remainingArgs: any[]) => ReturnType<T> {
  return function (this: any, ...remainingArgs: any[]) {
    return fn.apply(this, [...remainingArgs, ...presetArgs])
  }
}
