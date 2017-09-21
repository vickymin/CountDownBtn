## Countdown

#### Quick Start
```bash
# First Step
$ npm install

# start webpack compiling and dev server
$ npm start
open http://localhost:3000/ in Browser

# start mock api if needed
$ npm run api

# run test cases

```

#### Technology Stack
- ECMAScript® 2015
- React

#### Code Standards
Use `.eslint` to uniform code style, some key points:
- no semicolon
- no unnecessary white space and blank lines(no more than two lines)
- camel case
- no varibles which is defined but never used
- attribute value in html/jsx sholud be single quotes
- use `===` instead of `==`

#### GIT Commit Msg:
Msg layout: `[<type>](<scope>)`

`<type>`:
- done (finish new feature for the user, not a new feature for build script)
- WIP (work in progress)
- fix (bug fix for the user, not a fix to a build script)
- doc (changes to the documentation)
- style (formatting, missing semi colons, etc; no production code change)
- refactor (refactoring production code, eg. renaming a variable)
- test (adding missing tests, refactoring tests, update mock api etc; no production code change)
- chore (updating build script etc; no production code change)
- Merge (merge with somebody)

`<scope>`:
- init
- core
- util
- runner
- module
- player
- config
- mockAPI