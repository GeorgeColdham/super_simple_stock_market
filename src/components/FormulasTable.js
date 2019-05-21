import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/formulasTable'
import FormulasRow from './FormulasRow'

export default class FormulasTable extends Component {
  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th>Dividend Yield</th>
            <th>P/E Ratio</th>
            <th>Geometric Mean</th>
            <th>Volume Weighted Stock Price</th>
          </tr>
          {this.props.tableRows
            .map((row, index) =>
              <FormulasRow {...row} key={`FormulasRow${index}`} />
            )}
        </tbody>
      </table>
    )
  }
}

FormulasTable.propTypes = propTypes
FormulasTable.defaultProps = defaultProps
