import {
  number,
  string
} from 'prop-types'

export const defaultProps = {
  DividendYeild: 'SYM',
  PERatio: 0,
  GeometricMean: 0,
  VWSP: 0
}

export default {
  DividendYeild: number,
  PERatio: number,
  GeometricMean: number,
  VWSP: number
}
