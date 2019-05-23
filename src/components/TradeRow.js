import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/tradeRow'

export default class TradeRow extends Component {
  render () {
    return (
      <tr className='trade-row'>
        <td>{this.props.timeStamp}</td>
        <td>{this.props.stockSymbol}</td>
        <td>{this.props.price}</td>
        <td>{this.props.numberOfShares}</td>
      </tr>
    )
  }
}

TradeRow.propTypes = propTypes
TradeRow.defaultProps = defaultProps
