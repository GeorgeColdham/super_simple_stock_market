import React, { Component } from 'react'
import propTypes, { defaultProps } from '../propTypes/TitleBar'
import Kiwi from '../assets/kiwi.svg'

export default class TitleBar extends Component {
  render () {
    return (
      <header id='titleBar'>
        <img src={Kiwi} />
        <h1 id='titleBar_title'>{this.props.titleText}</h1>
        <h2 id='titleBar_description'>{this.props.description}</h2>
        <p>{this.props.value}</p>
        <button onClick={() => this.props.add(2)}>Update</button>
        <button onClick={() => console.log(this.props)}>Print</button>
      </header>
    )
  }
}

TitleBar.propTypes = propTypes
TitleBar.defaultProps = defaultProps
