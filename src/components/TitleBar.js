import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/TitleBar'

export default class TitleBar extends Component {
  render () {
    return (
      <header id='titleBar'>
        <h1 id='titleBar_title'>{this.props.titleText}</h1>
        <h2 id='titleBar_description'>{this.props.description}</h2>
      </header>
    )
  }
}

TitleBar.propTypes = propTypes
TitleBar.defaultProps = defaultProps
