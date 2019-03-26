import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/TitleBar'

export default class TitleBar extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.titleText}</h1>
        <h2>{this.props.description}</h2>
      </header>
    )
  }
}

TitleBar.propTypes = propTypes
TitleBar.defaultProps = defaultProps
