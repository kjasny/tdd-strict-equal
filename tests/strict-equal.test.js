let describe = require('mocha').describe

let it = require('mocha').it

let expect = require('chai').expect

let strictEqual = require('../strict-equal.js')

describe('Test suite: strict-equal.js', () => {
  describe('Compared data return strictly equal', () => {
    it('Tests if data values are the same', () => {
      let data1 = '5'
      let data2 = 5
      let expectedResult = true

      let actualResult = strictEqual(data1,data2)

      expect(actualResult).to.equal(expectedResult)
    })
    it('Tests if data type is the same', () => {
      let data1 = 'b'
      let data2 = 'b'
      let expectedResult = true

      let actualResult = strictEqual(data1,data2)

      expect(actualResult).to.equal(expectedResult)
    })
  })
  describe('Compared data does not return strictly equal', () => {
    it('Tests if data values are not the same', () => {
      let data1 = 5
      let data2 = 6
      let expectedResult = false

      let actualResult = strictEqual(data1,data2)

      expect(actualResult).to.equal(expectedResult)
    })
    it('Tests is data types are not the same', () => {
      let data1 = 5
      let data2 = 'a'
      let expectedResult = false

      let actualResult = strictEqual(data1,data2)

      expect(actualResult).to.equal(expectedResult)
    })
  })
})
