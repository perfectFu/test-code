// 实现instanceof方法

function _instanceOf(obj, classFunc) {
  // 1、获取原型对象
  classFunc = classFunc.prototype
  let proto = obj.__proto__
  // 2、遍历检测对象整个原型链
  while(true) {
    if(proto === classFunc) return true
    if(proto === null) return false
    proto = proto.__proto__
  }
}


// 兼容处理，使用getProtottypeOf 获取对象的原型
function _instanceOf_2(obj, classFunc) {
  classFunc = classFunc.prototype
  let proto = Object.getPrototypeOf(obj)
  while(true) {
    if(proto === null) return false
    if(proto === classFunc) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(_instanceOf([], Array));
console.log(_instanceOf_2({}, Object));
