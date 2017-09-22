
## React Countdown Component

A simple react countdown button component

### Quick Start
```bash

run in node v4.0.0+

# First Step
$ npm install

# start webpack compiling and dev server
$ npm start
open http://localhost:3000/ in Browser

# run test cases
$ npm test

```


### Component API
| Property | Description | Type | Default |
| ---------| --------- | ---- | --------- |
| seconds | The counting seconds | number | 60 |
| initContent | The init button content | string | 获取验证码 |
| waitingContent | The content when waiting | string | {seconds}s后可再次发送 |
| onSubmit | The handler function to send request | function | - |
| validation | The validation status of the content of input or other components | boolean | - |

`resetBtn` is an exposed function of this component, which can reset the button to init status (e.g., `this.refs.countDownBtn.resetBtn()`)


### Technology Stack
- ECMAScript® 2015
- React


### Code Standards
Use `.eslint` to uniform code style, some key points:
- no semicolon
- no unnecessary white space and blank lines(no more than two lines)
- camel case
- no varible which is defined but never used
- attribute value in html/jsx sholud be single quotes
- use `===` instead of `==`