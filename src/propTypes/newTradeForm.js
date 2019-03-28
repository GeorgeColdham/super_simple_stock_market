import {
  func,
  number,
  string
} from 'prop-types'

export const defaultProps = {
  stockSymbol: '',
  price: 0,
  numberOfShares: 0
}

export default {
  stockSymbol: string,
  price: number,
  numberOfShares: number,
  submitForm: func.isRequired
}
