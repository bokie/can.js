/**
 * template - 简单的模板引擎
 * @param {string} tpl -填充模板
 * @param {object} data -填充数据
 *
 * @sample:
 * let tpl = '{{name}}, {{age}}';
 * let data = {
 *     'name': 'x',
 *     'age': 20,
 * };
 * let result = template(tpl, data);
 * // output: 'x, 20'
 *
*/
function template (tpl, data) {
	return tpl.replace(/{{([^}}]+)?}}/g, function ($0, $1) {
		return data[$1]
	})
}

export default template

