// [1, 2, 3].reduce((prev, next, nextIdx, arr) => {}, [])

// prev参数不存在时，将数组的第一个元素作为prev的默认值
Array.prototype.reduce = function(fn, prev) {
  for(let i = 0; i < this.length; i++) {
    if(prev === undefined) {
      prev = fn(this[i], this[i+1], i+1, this)
      i++
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }
  return prev
}

let ret = [1, 2, 3].reduce(function(prev, next) {
  return prev + next
})
console.log('ret:', ret);