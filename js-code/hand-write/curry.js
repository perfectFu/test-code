// 函数柯理化

function add(a, b, c, d) {
  return a + b + c + d
}

function curry(fn, ...args) {
  if(fn.length === args.length) {
    return fn(...args)
  } else {
    return function(...newArgs) {
      // 收集每次传递的参数
      let allArgs = [...args, ...newArgs]
      return curry(fn, ...allArgs)
    }
  }
}
let fn = curry(add, 1, 2)
fn = fn(3)
console.log(fn(4));