import { SUBMIT_FORM } from '../constants/action-types'
import { defaultProps } from '../propTypes/formulasTable'
import { CommonDividendYield, PreferedDividendYield, PERatio, VolumeWeightedStockPrice, GeometricMean } from '../formulas'
import bevData from '../gbceData.json'

const initialState = defaultProps

export const submitForm = (state, values) => {
  const stockData = bevData.find(element => {
    return element.stockSymbol === values.stockSymbol
  })

  const dividendYeild = stockData
    ? stockData.type === 'Common'
      ? CommonDividendYield(values.price, stockData.lastDividend)
      : PreferedDividendYield(values.price, stockData.fixedDividend, stockData.parValue)
    : stockData.dividendYeild

  const peRatio = stockData
    ? PERatio(values.price, stockData.lastDividend)
    : stockData.peRatio

  const vwsp = stockData
    ? VolumeWeightedStockPrice(values.price, values.numberOfShares, state.pqTotal, state.qTotal)
    : stockData.VWSP

  const geometricMean = stockData
    ? GeometricMean(state.productOfPrices, values.price, state.numberOfTrades + 1)
    : state.GeometricMean

  const newArr = state.formulasTableRows
    .concat({
      DividendYeild: dividendYeild,
      PERatio: peRatio,
      GeometricMean: geometricMean,
      VWSP: vwsp.VWSP
    })

  return {
    ...state,
    formulasTableRows: newArr,
    pqTotal: vwsp.newPQTotal,
    qTotal: vwsp.newQTotal,
    numberOfTrades: state.numberOfTrades + 1,
    productOfPrices: state.productOfPrices * values.price
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return submitForm(state, action.values)
    default:
      return state
  }
}
