import template from '../scripts/template.js'

const chai = require('chai')
const expect = chai.expect

describe('Template Function Test', () => {

    const tpl = 'name: {{name}}, age: {{age}}'
    const data = {
        'name': 'bokie',
        'age': 18
    }
    const result = template(tpl, data)

    it('1. template function should return a string', () => {
        expect(result).to.be.a('string')
    })

})
