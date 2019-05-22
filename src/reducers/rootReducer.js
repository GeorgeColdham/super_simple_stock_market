import { combineReducers } from 'redux'
import newTradeForm from './newTradeForm'
import tradesTable from './tradesTable'

export default combineReducers({
  newTradeForm,
  tradesTable
})
