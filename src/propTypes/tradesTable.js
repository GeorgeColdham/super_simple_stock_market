import {
  number,
  string,
  arrayOf,
  shape
} from 'prop-types'

export const defaultProps = {
  tradesTableRows: []
}

export default {
  tradesTableRows: arrayOf(shape({
    stockSymbol: string,
    price: number,
    numberOfShares: number,
    timeStamp: string
  }))
}
