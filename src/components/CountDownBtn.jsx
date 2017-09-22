import React, { Component } from 'react'
import '../styles/CountDownBtn.css'

export default class CountDownBtn extends Component {
  constructor(props) {
    super(props)
    const { seconds, initContent } = this.props
    this.state = {
      seconds: seconds,
      content: initContent,
      disabled: false,
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  resetBtn = ()=> {
    const { initContent } = this.props
    clearInterval(this.timer)
    this.setState({
      content: initContent,
      disabled: false,
    })
  }

  countDown = () => {
    const { seconds, waitingContent, onSubmit } = this.props
    let leftSeconds = seconds
    const formatWaitingContent = ''.replace.bind(waitingContent, '{seconds}')
    this.setState({
      disabled: true,
      content: formatWaitingContent(leftSeconds),
    })
    onSubmit()
    this.timer = setInterval(() => {
      leftSeconds--
      this.setState({
        content: formatWaitingContent(leftSeconds),
      })
      if (leftSeconds <= 0) {
        this.resetBtn()
      }
    }, 1000)
  }

  render() {
    // eslint-disable-next-line
    const { validation, seconds, initContent, onSubmit, waitingContent, ...other} = this.props
    const { content, disabled } = this.state

    return (
      <button
        disabled={ !validation || disabled }
        onClick={ this.countDown }
        {...other}
      >
        { content }
      </button>
    )
  }
}