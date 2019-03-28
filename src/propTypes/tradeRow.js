import {
  number,
  string
} from 'prop-types'

export const defaultProps = {
  stockSymbol: 'SYM',
  price: 0,
  numberOfShares: 0,
  timeStamp: 0
}

export default {
  stockSymbol: string,
  price: number,
  numberOfShares: number,
  timeStamp: number
}
