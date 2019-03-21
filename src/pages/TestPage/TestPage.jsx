import React from 'react'
import PropTypes from 'prop-types'

import { Wallet, Transaction } from 'dapper'

import BasePage from '../../common/BasePage'
import { goTo } from '../../services/navigation'
import { PrimaryButton, SmallButton } from '../../components'
import Button from '@material-ui/core/Button'
import { withAppContext } from '../../services/Providers/AppStateContext'

class TestPage extends BasePage {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div style={{ width: '250px' }}>
          <SmallButton count="9" title="SmallButton" />
        </div>
        <div style={{ width: '180px' }}>
          <SmallButton count="4" title="PrimaryButton" />
        </div>
        <PrimaryButton fullWidth type="secondary">
          do it later
        </PrimaryButton>
      </div>
    )
  }
}

// TestPage.propTypes = {
//   AppContext: PropTypes.object.isRequired, // withAppContext
//   // classes: PropTypes.object.isRequired // withStyles
// };

export default withAppContext(TestPage)
