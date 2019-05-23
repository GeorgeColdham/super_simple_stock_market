import {
  number,
  string,
  arrayOf,
  shape,
  oneOfType
} from 'prop-types'

export const defaultProps = {
  tradesTableRows: []
}

export default {
  tradesTableRows: arrayOf(shape({
    stockSymbol: oneOfType([number, string]),
    price: oneOfType([number, string]),
    numberOfShares: oneOfType([number, string]),
    timeStamp: oneOfType([number, string])
  }))
}
