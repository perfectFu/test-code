// 数组扁平化

Array.prototype.flat = function() {
  let arr = []
  this.forEach(item => {
    if(Array.isArray(item)) {
      arr = arr.concat(item.flat())
    } else {
      arr.push(item)
    }
  })
  return arr
}

const arr = [1, 2, [3, 4, [5]]]
console.log(arr.flat());