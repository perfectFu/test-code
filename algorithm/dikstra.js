// 迪克斯特拉算法  求最短路径

// 存储节点以及节点的邻居
const graph = {}
// 起点
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2
// 节点a
graph['a'] = {}
graph['a']['fin'] = 1
// 节点b
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
// 终点
graph['fin'] = {}

// 存储每个节点的开销
const infinity = Number.POSITIVE_INFINITY // 无穷大
const costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

// 存储父节点
const parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = 'None'

// 记录已经处理过的节点
const processed = []

// 查找的算法
function search() {
    let node = find_lowest_node()
    // console.log('node------', node);
    while(node) {
        let cost = costs[node] // 当前节点的最低开销
        let neighbors = graph[node] // 当前节点的邻居
        for(let n in neighbors) {
            let new_cost = cost + neighbors[n]
            if(costs[n] > new_cost) {
                costs[n] = new_cost
                parents[n] = node
            }
        }
        processed.push(node) // 将节点标记为已处理
        node = find_lowest_node() // 找出下一个要处理的节点
    }
}

// 在开销列表中找到开销最小且未处理过的节点key
function find_lowest_node() {
    let lowest_cost = Number.POSITIVE_INFINITY
    let lowest_cost_node = null
    for(let c in costs) {
        // 找到开销最小且没有处理过的节点, fin终点也要排除
        if(c !== 'fin' && costs[c] < lowest_cost && !processed.includes(c)) {
            lowest_cost = costs[c]
            lowest_cost_node = c
            console.log('lowest_cost_node', lowest_cost_node);

        }
    }
    return lowest_cost_node
}

search() // 执行完成后，costs['fin']中的值即为最小值
console.log('最短路径：', costs['fin']);
// 根据fin回溯完整的路径
let fullpath = getFullPath()
console.log('fullpath:', fullpath);
function getFullPath() {
    let p = parents['fin']
    let path = []
    while(p !== 'start') {
        path.push(p)
        p = parents[p]
    }
    path.push('start')
    path = path.reverse()
    path.push('fin')
    return path.join(' -> ')
}