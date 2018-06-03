import {
    isString,
    isArray,
    isObject,
    isTrue
} from '../scripts/is.js'

const chai = require('chai')
chai.should()

describe('Predicate Function Test', () => {

    describe('#isString()', () => {
        const result = isString(5)
        it('should return false when a number given', () => {
            result.should.equal(false)
        })
    })

    describe('#isArray()', () => {
        const result = isArray(6)
        it('should return false when a number given', () => {
            result.should.equal(false)
        })
    })

    describe('#isObject()', () => {
        const result = isObject(5)
        it('should return false when a number given', () => {
            result.should.equal(false)
        })
    })

    describe('#isTrue()', () => {
        const result = isTrue(1)
        it('should return true', () => {
            result.should.equal(true)
        })
    })

})
