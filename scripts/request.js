
/**
 * 发送 Ajax 请求
 * @param {object} opt 
 * opt -{
 *     url, method, success, error, header
 * }
*/
function ajax ( opt ) {
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xht.readyState === 4) {  // or 'xhr.readyState === XMLHttpRequest.DONE'
			if (success && typeof(success) === 'function') {
				opt.success()
			}
		}
	}
	xhr.open(opt.method, opt.url)
	xhr.send()
}

}

export { ajax }