import {
  number,
  string,
  arrayOf,
  shape
} from 'prop-types'

export const defaultProps = {
  tableRows: [
    {
      stockSymbol: 'SYM',
      price: 0,
      numberOfShares: 0,
      timeStamp: 0
    },
    {
      stockSymbol: 'BOL',
      price: 10,
      numberOfShares: 15,
      timeStamp: 88
    }
  ]
}

export default {
  tableRows: arrayOf(shape({
    stockSymbol: string,
    price: number,
    numberOfShares: number,
    timeStamp: number
  }))
}
