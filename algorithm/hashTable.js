class HashTable{
    constructor() {
        this.data = []
    }

    // 散列函数计算索引
    calHash(key) {
        
    }

    // 获取key对应的值
    get(key) {
        const index = this.calHash(key)
        return this.data[index]
    }

    // 添加数据
    set(key, value) {
        const index = this.calHash(key)
        this.data[index] = value
    }

}