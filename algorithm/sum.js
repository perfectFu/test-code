// 使用递归函数求和

function sum(arr) {
    if(arr.length === 0 ) return 0
    if(arr.length === 1) return arr[0]
    return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]));


// 递归函数计算列表包含的元素数
function calLength(arr) {
    if(arr.length === 0) return 0
    if(arr.length === 1) return 1
    return 1 + calLength(arr.slice(1))
}

console.log(calLength([1, 2, 3, 4, 5]));

// 递归函数找出数组最大值
function getMax(arr) {
    if(arr.length === 1) return arr[0]
    return arr[0] - getMax(arr.slice(1)) > 0 ? arr[0] : getMax(arr.slice(1))
}
console.log(getMax([3, 4, 1, 8, 5]));
