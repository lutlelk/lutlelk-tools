export function curry<T extends (...args: any[]) => any>(
  fn: T,
  arity: number = fn.length
): any {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= arity) {
      return fn.apply(this, args)
    }
    return (...nextArgs: any[]) => curried.apply(this, [...args, ...nextArgs])
  }
}

export function curryRight<T extends (...args: any[]) => any>(
  fn: T,
  arity: number = fn.length
): any {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= arity) {
      return fn.apply(this, args)
    }
    return (...nextArgs: any[]) => curried.apply(this, [...nextArgs, ...args])
  }
}
