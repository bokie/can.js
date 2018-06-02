/**
 * 常用的谓词函数
*/

/**
 * getType -查询变量类型
 * @return {string}
*/
function getType (param) {
	if (param === null) {
		return 'null'
	}
	let type = typeof(param)
	if (type !== 'object') {
		return type
	}
    // eg: '[object Array]'' => 'array'
	let objType = toString.call(param).slice(8, -1).toLowerCase
	return objType
}

function isArray (param) {
	return (
		Array.isArray
	    ?
	    Array.isArray(param)
	    :
	    (getType(param) === 'array')
	)
}

function isString (param) {
	return (getType(param) === 'string')
}

function isObject (param) {
	return (getType(param) === 'object')
}

function isTrue (param) {
	return (param == true)
}

export { isString, isArray, isObject }
