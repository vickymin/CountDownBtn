import React from 'react'
import CountDownBtn from './CountDownBtn'
import { shallow } from 'enzyme'
import { getCaptcha } from '../mockApi'

it('disabled when validation false', () => {
  const countDownBtn = shallow(
    <CountDownBtn
      ref='countDownBtn'
      seconds={5}
      initContent='获取验证码'
      waitingContent='请耐心等待{seconds}s'
      validation={true}
      onSubmit={() => {}}
    />
  )
  expect(countDownBtn.props().disabled).toBe(false)
})

it('enabled when validation true', () => {
  const countDownBtn = shallow(
    <CountDownBtn
      ref='countDownBtn'
      seconds={5}
      initContent='获取验证码'
      waitingContent='请耐心等待{seconds}s'
      validation={false}
      onSubmit={() => {}}
    />
  )
  expect(countDownBtn.props().disabled).toBe(true)
})

it('reset btn after countdown', (done) => {
  const initContent = '获取验证码'
  const waitingContent = '请耐心等待{seconds}s'
  const seconds = 1
  const submit = jest.fn()
  const countDownBtn = shallow(
    <CountDownBtn
      ref='countDownBtn'
      seconds={seconds}
      initContent={initContent}
      waitingContent={waitingContent}
      validation={true}
      onSubmit={submit}
    />
  )

  expect(countDownBtn.text()).toBe(initContent)
  countDownBtn.simulate('click')
  expect(countDownBtn.text()).toBe(waitingContent.replace('{seconds}', seconds))
  setTimeout(() => {
    try {
      expect(countDownBtn.prop('disabled')).toBe(false)
      expect(countDownBtn.text()).toBe(initContent)
      done()
    } catch (err) {
      done.fail(err)
    }
  }, seconds * 1000 + 100)
  expect(submit.mock.calls.length).toBe(1)
})

it('reset when submit request failed', (done) => {
  const initContent = '获取验证码'
  let countDownBtn
  const submit = () => {
    getCaptcha('fail')
    .catch(() => {
      countDownBtn.instance().resetBtn()
      try {
        expect(countDownBtn.prop('disabled')).toBe(false)
        expect(countDownBtn.text()).toBe(initContent)
        done()
      } catch (err) {
        done.fail(err)
      }
    })
  }
  countDownBtn = shallow(
    <CountDownBtn
      ref='countDownBtn'
      seconds={4}
      initContent={initContent}
      waitingContent='请耐心等待{seconds}s'
      validation={true}
      onSubmit={submit}
    />
  )
  countDownBtn.simulate('click')
})

it('did unmount', () => {
  const countDownBtn = shallow(
    <CountDownBtn
      seconds={5}
      initContent='获取验证码'
      waitingContent='请耐心等待{seconds}s'
      validation={true}
      onSubmit={() => {}}
    />
  )
  const spy = jest.spyOn(countDownBtn.instance(), 'clearTimer')
  countDownBtn.simulate('click')
  countDownBtn.unmount()

  expect(spy).toHaveBeenCalledTimes(1)
})