// 函数防抖

function debounce(fn, wait) {
  let timer
  return (...args) => {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, wait)
  }
}



/**
 * 节流
 * @param {*} fn 
 * @param {*} wait 
 */
function throttle(fn, wait) {
  let timer
  return function(...args) {
    if(!timer) {
      timer = setTimeout(() => {
        console.log('函数执行了');
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}


// 测试代码
const fn = throttle(() => {
  console.log('函数执行了');
}, 1000)

let count = 0
let timer = setInterval(() => {
  if(count === 50) {
    clearInterval(timer)
  }
  console.log('-------每500ms触发一次fn---------')
  fn()
  count++
}, 500)