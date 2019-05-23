import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm } from '../actions/newTradeForm'
import { initLoad } from '../actions/app'
import NewTradeForm from '../components/NewTradeForm'
import TradesTable from '../components/TradesTable'
import FormulasTable from '../components/FormulasTable'

class App extends Component {
  render () {
    return (
      <div>
        <title>Super Simple Stock Market</title>
        <h1>Super Simple Stock Market</h1>
        <NewTradeForm {...this.props} />
        <FormulasTable {...this.props} />
        <TradesTable {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tradesTableRows: state.tradesTable.tradesTableRows,
    formulasTableRows: state.formulasTable.formulasTableRows
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: values => {
      dispatch(submitForm(values))
    },
    initLoad: values => {
      dispatch(initLoad(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
