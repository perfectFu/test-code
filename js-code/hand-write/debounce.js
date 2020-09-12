// 函数防抖

/**
 * 
 * @param {*} fn 需要执行的函数
 * @param {*} wait 防抖的间隔时间
 * @param {*} immediate 第一次是否立即执行
 */
function debounce(fn, wait, immediate = false) {
  let timer = null
  return (...args) => {
    let now = immediate && !timer
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, wait)

    now && fn.apply(null, args)
  }
}



/**
 * 节流
 * @param {*} fn 
 * @param {*} wait 
 */
function throttle(fn, wait, immediate = false) {
  let timer
  return function(...args) {
    if(!timer) {
      timer = setTimeout(() => {
        console.log('函数执行了');
        fn.apply(null, args)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}


// 测试代码
const fn = debounce(() => {
  console.log('函数执行了');
}, 1000, true)

let count = 0
let timer = setInterval(() => {
  if(count === 5) {
    clearInterval(timer)
  }
  console.log('-------每500ms触发一次fn---------')
  fn()
  count++
}, 500)