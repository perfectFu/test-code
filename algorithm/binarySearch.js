// 1、二分查找
function binarySearch(arr, guess) {
    let low = 0
    let high = arr.length - 1
    let mid
    while(low <= high) {
        mid = Math.floor((low + high) / 2)
        if(arr[mid] === guess) {
            return mid
        } else if (arr[mid] < guess) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return null
}

const guess = 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], guess));