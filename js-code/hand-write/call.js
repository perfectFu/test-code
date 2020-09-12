// call方法实现 fn.call(this, ...args)

// 通过obj.fn()来指定函数上下文中的this

Function.prototype.call = function(context, ...args) {
  context = context === null ? window : context
  context['fn'] = this // this指向调用call方法的函数
  let ret = context['fn'](...args)
  delete context['fn']
  return ret
}

global.name = '11111'
var obj = {
  name: '22222'
}
function fn() {
  console.log(this.name)
}
fn()
fn.call(obj)