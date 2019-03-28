import { ADD_NUMBER } from '../constants/action-types'

const INITIAL_VALUE = 0

const initialState = {
  value: INITIAL_VALUE
}

export const addNumber = (state, number) => Object.assign({}, state, { value: state.value + number })

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return addNumber(state, action.value)
    default:
      return state
  }
}
