// 遍历对象属性的方法
// 1、for...in  遍历对象自身和原型链上的所有可枚举的属性
// 2、Object.keys 遍历对象自身的可枚举的属性，返回包含所有key的数组
// 3、Object.getOwnPropertyNames 输出自身的可枚举和和不可枚举的属性数组，不包括原型链上的属性
// 4、Reflect.ownKeys 输出自身的所有属性，包括可枚举、不可枚举、symbol属性

/**
 * 浅克隆
 * @param {Object} target 
 */
function shallowClone(target) {
  if(typeof target === 'object' && target !== null) {
    const cloneObj = Array.isArray(target) ? [] : {}
    for(let key in target) {
      // 遍历自身属性
      if(target.hasOwnProperty(key)) {
        console.log(key);
        cloneObj[key] = target[key]
      }
    }
    return cloneObj
  } else {
    return target
  }
}

/**
 * 深克隆
 * @param {Object} target 
 */
function deepClone(target) {
  if(target === null) return null
  if(typeof target !== 'object') return target
  const cloneObj = Array.isArray(target) ? [] : {}
  for(let prop in target) {
    if(target.hasOwnProperty(prop)) {
      cloneObj[prop] = deepClone(target[prop])
    }
  }
  return cloneObj
}



console.log('-------cloneObj------');
const target = {foo: 'foo~~~', bar: {foo: 'foo~~~~'}}
// const target = ['a', 'b', 'c']
// console.log(Object.getOwnPropertyNames(target));
// console.log(Reflect.ownKeys(target));
const cloneObj = shallowClone(target)
// const cloneObj = deepClone(target)
target.bar.foo = 'bar~~~~~'
console.log(cloneObj);
console.log('-------cloneObj------');
