// 实现new方法

// new 关键字做了什么
// 1、创建一个空对象
// 2、将这个空对象的原型指向构造函数的prototype属性
// 3、将这个空对象赋值给this，执行构造函数
// 注意：如果构造函数返回一个对象，那么这个对象就作为构造函数的返回值，否则返回new 创建的空对象
function _new(Func, ...args) {
  // __proto__不支持ie
  // const obj = {}
  // obj.__proto__ = Func.prototype

  // 兼容写法
  const obj = Object.create(Func.prototype)
  let ret = Func.call(obj, ...args)
  // 判断函数的返回值
  if(ret !== null && (/^(object|function)$/).test(typeof ret)) {
    return ret
  }
  return obj
}

function Animal(type) {
  this.type = type
}
Animal.prototype.getName = function() {
  console.log(`我的种类是：${this.type}`);
}

const cat = _new(Animal, '喵咪')
console.log(cat);
cat.getName()
console.log(cat instanceof Animal);