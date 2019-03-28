import { SUBMIT_FORM } from '../constants/action-types'
import { defaultProps } from '../propTypes/newTradeForm'

const initialState = {
  values: defaultProps
}

export const submitForm = (state, values) => Object.assign(
  {},
  state,
  {
    stockSymbol: values.stockSymbol,
    price: values.price,
    numberOfShares: values.numberOfShares,
    timeStamp: values.timeStamp
  }
)

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return submitForm(state, action.values)
    default:
      return state
  }
}
