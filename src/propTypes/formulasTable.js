import {
  number,
  arrayOf,
  shape
} from 'prop-types'

export const defaultProps = {
  tableRows: [
    {
      DividendYeild: 12345,
      PERatio: 0.25,
      GeometricMean: 1232,
      VWSP: 1243
    },
    {
      DividendYeild: 3,
      PERatio: 5,
      GeometricMean: 67,
      VWSP: 33
    },
    {
      DividendYeild: 0.11,
      PERatio: 0.001,
      GeometricMean: 876,
      VWSP: 1
    }
  ]
}

export default {
  tableRows: arrayOf(shape({
    DividendYeild: number,
    PERatio: number,
    GeometricMean: number,
    VWSP: number
  }))
}
