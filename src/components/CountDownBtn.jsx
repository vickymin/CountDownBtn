import React, { Component } from 'react'

export default class CountDownBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnContent: this.props.seconds
    }
  }

  countDown = () => {
    const { seconds } = this.props
    let leftSeconds = seconds
    const timer = setInterval(() => {
      if (leftSeconds <= 0) {
        clearInterval(timer)
      } else {
        leftSeconds--
      }
      this.setState({
        btnContent: leftSeconds
      })
    }, 1000)
  }

  render() {
    return(
      <button
        onClick={this.countDown}
      >
        {this.state.btnContent}
      </button>
    )
  }
}