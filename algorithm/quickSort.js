function quickSort(arr) {
    if(arr.length <= 1) return arr
    let flag = arr.shift()
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > flag) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(flag, quickSort(right))
}
console.log(quickSort([10, 2, 4, 7, 5, 0]));

// 原地快排
function quickSort2(arr, low = 0, high = arr.length - 1) {
    if(arr.length <= 1) return arr
    let left = low
    let right = high
    let flag = arr[0]
    while(low < high) {
        // 从右边找比flag小的
        if(low < high && flag < arr[right]) {
            right--
        }
        arr[right] = arr[left]
        if(low < high && flag > arr[left]) {
            left--
        }
        arr[left] = arr[right]
    }
    flag = arr[left]
    quickSort2(arr, 0, left - 1)
    quickSort2(arr, left+1, high)
    return arr
}

console.log(quickSort2([10, 2, 4, 7, 5, 0]));
