import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/tradesTable'
import TradeRow from './TradeRow'

export default class TradesTable extends Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th>TimeStamp</th>
            <th>Stock Symbol</th>
            <th>Price</th>
            <th>Number of shares</th>
          </tr>
          {this.props.tradesTableRows && this.props.tradesTableRows
            .sort((a, b) => b.timeStamp - a.timeStamp)
            .map((row, index) =>
              <TradeRow {...row} key={`TradeRow${index}`} />
            )}
        </tbody>
      </table>
    )
  }
}

TradesTable.propTypes = propTypes
TradesTable.defaultProps = defaultProps
