import { expect } from 'chai'
import {
  submitForm
} from '../../src/reducers/newTradeForm'
import { defaultProps } from '../../src/propTypes/newTradeForm'

const populatedState = {
  stockSymbol: 'abc',
  price: 123,
  numberOfShares: 10
}
const values = {
  stockSymbol: 'a',
  price: 1,
  numberOfShares: 2,
  timeStamp: 54321
}

describe('newTradeForm actions', () => {
  it('should return an object', () => {
    expect(typeof submitForm(defaultProps, values)).to.equal('object')
  })
  it('should return the object passed in with default state provided', () => {
    expect(submitForm(defaultProps, values)).to.deep.equal(values)
  })
  it('should return the object passed in with populated state provided', () => {
    expect(submitForm(populatedState, values)).to.deep.equal(values)
  })
})
