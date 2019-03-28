import React, { Component } from 'react'
import TitleBar from '../components/TitleBar'
import { connect } from 'react-redux'
import { addNumber } from '../actions/sums'

class App extends Component {
  render () {
    return <TitleBar {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    value: state.sums.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: number => {
      dispatch(addNumber(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
