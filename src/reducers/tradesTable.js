import { SUBMIT_FORM } from '../constants/action-types'
import { defaultProps } from '../propTypes/tradesTable'
import { formatDate } from '../formulas'

const initialState = defaultProps

export const submitForm = (state, values) => {
  const newArr = state.tradesTableRows
    .concat({
      stockSymbol: values.stockSymbol,
      price: values.price,
      numberOfShares: values.numberOfShares,
      timeStamp: formatDate(values.timeStamp)
    })
  return {
    ...state,
    tradesTableRows: newArr
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
