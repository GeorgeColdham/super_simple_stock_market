import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/formulasRow'

export default class FormulasRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.stockSymbol}</td>
        <td>{this.props.dividendYield}</td>
        <td>{this.props.peRatio}</td>
        <td>{this.props.geometricMean}</td>
        <td>{this.props.VWSP}</td>
      </tr>
    )
  }
}

FormulasRow.propTypes = propTypes
FormulasRow.defaultProps = defaultProps
