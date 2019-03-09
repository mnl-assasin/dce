import React from 'react';
import PropTypes from 'prop-types';

import Storage from './../services/storage/storage'
import { goTo } from './../services/navigation'
import { Page } from './../common'
import * as route from './../constants/route'
import * as storage from './../constants/storage'

class BasePage extends React.Component {
  title = "Network"


  constructor(props) {
    super(props);
  }
  constants = {
    route,
    storage
  }
  // navigation implementation from services
  navigate = goTo
  store = Storage
  render () {
    return null
  }
}

export default BasePage
