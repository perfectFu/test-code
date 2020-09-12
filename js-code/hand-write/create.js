// 手动实现create函数
function create(prototype) {
  if(typeof prototype !== 'object' || prototype === null) {
    throw new TypeError(`请传入一个对象`)
  }
  function Temp() {}
  Temp.prototype = prototype
  Temp.prototype.constructor = Temp
  return new Temp()
}
const proto = {type: 1}
const child = create(proto)
child.name = 'child'
console.log(child.type);