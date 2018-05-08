// import { arrUnique } from '../scripts/array'
const arrUnique = require('../scripts/array')

let arr = [1, 2, 3, 3]
let result = [1, 3]

test('unique array test', () => {
	expect(arrUnique(arr)).toEqual(result);
});