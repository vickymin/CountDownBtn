import React, { Component } from 'react'
import './styles/App.css'
import CountDownBtn from './components/CountDownBtn'
import { getCaptcha } from './mockApi'

class App extends Component {

  constructor() {
    super()
    this.state = {
      validation: false,
    }
  }

  submit = ()=> {
    // 参数可为fail/success, 分别模拟后端返回状态
    getCaptcha('success')
    .catch(() => {
      this.refs.countDownBtn.resetBtn()
    })
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({
      validation: this.validatePhone(value),
    })
  }

  validatePhone(value) {
    const phoneRegExp = /^1[34578]\d{9}$/
    return value && phoneRegExp.test(value)
  }

  render() {
    const { validation } = this.state
    return (
      <div className='app-main'>
        <input
          onChange={this.handleChange}
        ></input>
        <CountDownBtn
          ref='countDownBtn'
          seconds={5}
          initContent={'获取验证码'}
          validation={validation}
          onSubmit={this.submit}
          waitingContent={'{seconds}s后可再次发送'}
        />
      </div>
    )
  }
}

export default App
