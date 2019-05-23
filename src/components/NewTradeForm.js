import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/newTradeForm'
import {
  STOCK_SYMBOL_LABEL_TEXT,
  PRICE_LABEL_TEXT,
  NUMBER_OF_SHARES_LABEL_TEXT,
  CHECKBOX_LABEL_TEXT
} from '../constants/newTradeForm'

export default class NewTradeForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stockSymbol: this.props.stockSymbol,
      price: this.props.price,
      numberOfShares: this.props.numberOfShares,
      resetOnSubmit: false
    }

    this.handleStockSymbolChange = this.handleStockSymbolChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleNumberOfSharesChange = this.handleNumberOfSharesChange.bind(this)
    this.handleResetOnSubmitChange = this.handleResetOnSubmitChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStockSymbolChange (event) {
    this.setState({ stockSymbol: event.target.value })
  }

  handlePriceChange (event) {
    this.setState({ price: event.target.value })
  }

  handleNumberOfSharesChange (event) {
    this.setState({ numberOfShares: event.target.value })
  }

  handleResetOnSubmitChange (event) {
    this.setState({ resetOnSubmit: !this.state.resetOnSubmit })
  }

  resetForm () {
    this.setState({
      stockSymbol: defaultProps.stockSymbol,
      price: defaultProps.price,
      numberOfShares: defaultProps.numberOfShares
    })
  }

  handleSubmit (event) {
    const timeStamp = new Date()
    this.props.submitForm({
      stockSymbol: this.state.stockSymbol,
      price: this.state.price,
      numberOfShares: this.state.numberOfShares,
      timeStamp
    })
    this.state.resetOnSubmit && this.resetForm()
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} id='new-trade-form' className='tile'>
        <label>
          {STOCK_SYMBOL_LABEL_TEXT}
          <input
            type='text'
            value={this.state.stockSymbol}
            onChange={this.handleStockSymbolChange}
          />
        </label>
        <label>
          {PRICE_LABEL_TEXT}
          <input
            type='number'
            step='any'
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </label>
        <label>
          {NUMBER_OF_SHARES_LABEL_TEXT}
          <input
            type='number'
            value={this.state.numberOfShares}
            onChange={this.handleNumberOfSharesChange}
          />
        </label>
        <label id='reset-on-submit-checkbox'>
          <input type='checkbox'
            value={this.state.resetOnSubmit}
            onChange={this.handleResetOnSubmitChange}
          />
          {CHECKBOX_LABEL_TEXT}
        </label>
        <input className='submit button' type='submit' value='Submit' />
      </form>
    )
  }
}

NewTradeForm.propTypes = propTypes
NewTradeForm.defaultProps = defaultProps
