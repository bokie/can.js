
/* 数组相关的函数
 * @author bokie
 * @date 2018/03
*/


/**
 * 数组去重
 * @param {array} arr
 * @return {array}
 *
 * **Note**
 * 对于,可以利用ES6 Set 元素唯一的特性，
*/
function arrUnique (arr) {
	var result = [];
    for (let i = 0; i < arr.length; ++i ) {
        if ( result.indexOf(arr[i]) < 0 ) {
            result.push(arr[i])
        }
    }
    return result;
}


export { arrUnique }