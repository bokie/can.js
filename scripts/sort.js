
/**
 * 排序算法的 js 实现 - sorting algorithm with JavaScript
 * @author bokie
 * @date 2018/03/05
*/

/**
 * 冒泡排序 - bubble sort
 * 不稳定
*/
function bubbleSort (arr) {
	for (let i = 0; i < arr.length; ++i) {
	    let current = arr[i]
		for (let j = i + 1; j < arr.length; ++j) {
			if ( arr[i] > arr[j] ) {
			    let tmp = arr[j]
			    arr[j] = arr[i]
			    arr[i] =tmp
			}
		}
	}
	return arr
}

/**
 * 快速排序 - quick sort
*/
function quickSort (arr) {

}

/* 堆排序 - heap sort
*/
function heapSort (arr) {

}

/**
 * 插入排序 - insert sort
*/
function insertSort (arr) {

}

/**
 * 基数排序 - cardinal sort
*/
function cardinalSort (arr) {

}

/**
 * 归并排序 - merge sort
*/
function mergeSort (arr) {

}

/**
  * 选择排序 - select sort
*/
function selectSort (arr) {

}

/**
 * 希尔排序 - hill sort
*/
function hillSort (arr) {

}

/**
 * 计数排序 - counting sort
*/
function countingSort (arr) {

}


export { * as sort }