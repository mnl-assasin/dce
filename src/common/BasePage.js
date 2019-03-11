import React from 'react'

import Storage from './../services/storage/storage'
// this will cause circular import
// cause navigation file imports components that use this file
// import { goTo } from './../services/navigation'

import * as route from './../constants/route'
import * as storage from './../constants/storage'
import * as defaults from './../constants/defaults'

class BasePage extends React.Component {
  title = ''

  static constants = {
    route,
    storage,
    defaults
  }

  // navigation implementation from services
  // navigate = goTo
  static store = Storage

  render () {
    return null
  }
}

export default BasePage
