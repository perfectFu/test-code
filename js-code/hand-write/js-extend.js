function Animal(species) {
  this.species = species // 种类
}
Animal.prototype.notice = function() {
  console.log(`${this.species} ${this.voice}`);
}

function Cat(species, voice) {
  Animal.call(this, species)
  this.voice = voice
}

// 寄生组合方式继承
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

const cat = new Cat('小猫', '喵喵喵~~~~~')
cat.notice()


