// 用法 fn = fn.bind(obj, ...args)

// fn(arg1, arg2, ...)  当函数fn接收的参数个数与fn函数实际定义的参数个数相等时执行函数

Function.prototype.bind = function(context, ...args) {
  let _this = this // 保存函数到_this上
  return function(...params) {
    return _this.call(context, ...args.concat(params))
  }
}

function fn(a, b) {
  return a + b
}
const fn1 = fn.bind(null, 1)
console.log(fn1(2));

