// 实现发布订阅模式

class EventEmitter{
  constructor() {
    // 维护回调函数数组
    this.callbacks = {}
  }
  // 订阅
  on(name, cb) {
    if(!this.callbacks[name]) {
      this.callbacks[name] = []
    }
    this.callbacks[name].push(cb)
  }
  // 发布
  emit(name) {
    if(this.callbacks[name]) {
      this.callbacks[name].forEach(cb => {
        cb()
      });
    }
  }
  // 取消订阅
  off(name, cb) {
    if(name && cb) {
      const index = this.callbacks[name].findIndex(fn => fn === cb)
      this.callbacks[name].splice(index, 1)
    }else {
      this.callbacks[name] = []
    }
  }
  // 订阅一次后取消
  once(name, cb) {
    this.on(name, () => {
      cb()
      this.off(name, cb)
    })
  }
}

let count = 0
const emitter = new EventEmitter()
emitter.on('add', () => {
  console.log('emit add', ++count);
})
emitter.on('minus', () => {
  console.log('emit minus', --count);
})

// emitter.emit('add')
// emitter.emit('minus')
// emitter.off('add')
// emitter.off('minus')
// emitter.emit('add')
// emitter.emit('minus')

emitter.once('add', () => {
  console.log('emit once add', ++count);
})
emitter.emit('add')
emitter.emit('add')