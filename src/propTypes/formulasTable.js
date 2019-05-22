import {
  number,
  arrayOf,
  shape
} from 'prop-types'

export const defaultProps = {
  formulasTableRows: [],
  pqTotal: 0,
  qTotal: 0,
  numberOfTrades: 0,
  productOfPrices: 1
}

export default {
  formulasTableRows: arrayOf(shape({
    DividendYeild: number,
    PERatio: number,
    GeometricMean: number,
    VWSP: number
  })),
  pqTotal: number,
  qTotal: number,
  numberOfTrades: number,
  productOfPrices: number
}
