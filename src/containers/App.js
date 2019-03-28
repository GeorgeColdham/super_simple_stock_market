import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm } from '../actions/newTradeForm'
import NewTradeForm from '../components/NewTradeForm'
import TradesTable from '../components/TradesTable'

class App extends Component {
  render () {
    return (
      <div>
        <NewTradeForm {...this.props} />
        <TradesTable {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stockSymbol: state.newTradeForm.stockSymbol,
    price: state.newTradeForm.price,
    numberOfShares: state.newTradeForm.numberOfShares,
    timeStamp: state.newTradeForm.timeStamp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: values => {
      dispatch(submitForm(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
