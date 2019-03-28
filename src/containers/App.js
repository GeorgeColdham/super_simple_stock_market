import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm } from '../actions/newTradeForm'
import NewTradeForm from '../components/NewTradeForm'

class App extends Component {
  render () {
    return <NewTradeForm {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    stockSymbol: state.newTradeForm.stockSymbol,
    price: state.newTradeForm.price,
    numberOfShares: state.newTradeForm.numberOfShares
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
