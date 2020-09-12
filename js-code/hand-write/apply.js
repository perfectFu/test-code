// apply函数实现  fn.apply(ctx, args)

Function.prototype.apply = function(context, args) {
  context = context === null ? window : context
  context['fn'] = this
  let ret = context['fn'](args)
  delete context['fn']
  return ret
}

global.name = '1111'
var obj = {
  name: '2222'
}
function fn() {
  console.log(this);
  console.log(this.name);
}
fn()
fn.apply(obj)

