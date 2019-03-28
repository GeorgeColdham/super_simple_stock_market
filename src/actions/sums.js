import { ADD_NUMBER } from '../constants/action-types'

export const addNumber = number => {
  return {
    type: ADD_NUMBER,
    value: number
  }
}
