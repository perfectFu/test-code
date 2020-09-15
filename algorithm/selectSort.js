// 选择排序

// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 重复第二步，直到所有元素均排序完毕。

function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// 找出最小数索引
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		// 将min存放到数组起始位置
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}

console.log(selectSort([10, 4, 7, 1, 9, 0]));
