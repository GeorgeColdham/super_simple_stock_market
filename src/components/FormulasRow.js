import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/formulasRow'

export default class FormulasRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.DividendYeild}</td>
        <td>{this.props.PERatio}</td>
        <td>{this.props.GeometricMean}</td>
        <td>{this.props.VWSP}</td>
      </tr>
    )
  }
}

FormulasRow.propTypes = propTypes
FormulasRow.defaultProps = defaultProps
