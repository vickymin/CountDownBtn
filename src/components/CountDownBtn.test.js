import React from 'react'
import ReactDOM from 'react-dom'
import CountDownBtn from './CountDownBtn'
import { shallow } from 'enzyme'

it('disabled when validation false', () => {
  const countDownBtn = shallow(
    <CountDownBtn
      ref='theTimerBtn'
      seconds={5}
      initContent='获取验证码'
      validation={true}
      waitingContent='请耐心等待{seconds}s'
      onSubmit={() => {}}
    />
  )
  expect(countDownBtn.props().disabled).toBe(false)
})