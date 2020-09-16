// 广度优先搜索

// 使用散列表来描述图
let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

// 数组模拟实现队列
class Queue{
    constructor() {
        this.list = []
    }
    // 入队单个
    push(item) {
        this.list.push(item)
    }
    // 入队多个，参数为数组
    pushMany(arr) {
        this.list = this.list.concat(arr)
    }
    // 出对
    pop() {
        return this.list.shift()
    }
}

// 判断这个人是否是供应商，名字以m结尾
function isSeller(name) {
    return name.endsWith('m')
}

// 在我的朋友中查找最近的供应商
function search(name) {

    // 将最先需要查找的人入队
    const searchQueue = new Queue()
    searchQueue.pushMany(graph[name])
    // 记录已经检查过的人
    const searched = []
    while(searchQueue.list.length) {
        let person = searchQueue.pop()
        // 仅当这个人没检查过时才需要检查
        if(searched.indexOf(person) < 0) {
            // 判断是否是供应商
            if(isSeller(person)) {
                console.log(person + ' is a mango seller!');
                return true
            } else {
                // 将这个人关联的朋友全部入队
                searchQueue.pushMany(graph[person])
                // 标记这个人已经检查过
                searched.push(person)
            }
        }
    }
    return false
}

search('you')