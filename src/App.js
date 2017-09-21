import React, { Component } from 'react'
import './App.css'
import CountDownBtn from './components/CountDownBtn'

class App extends Component {
  render() {
    return (
      <CountDownBtn
        seconds={5}
      />
    )
  }
}

export default App
