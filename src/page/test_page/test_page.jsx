import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/styles'
import BasePage from '../../common/BasePage'
import { goTo } from '../../services/navigation'
import {
  Text,
  Icon,
  CardDapp,
  InputTextBox,
  PrimaryButton,
  SmallButton,
} from '../../components'
import Button from '@material-ui/core/Button'
import { withAppContext } from '../../services/Providers/AppStateContext'

import Radio from '@material-ui/core/Radio'
import { boxShadow } from '../../constants/style'
import { ContentCopy, Add } from '../../asset'
import { Page, Padding, Tab, TabContent } from '../../layout'
import { Row } from '../../common'
import WalletHeader from '../../page/wallet/component/WalletHeader'
import Fab from '@material-ui/core/Fab'
// 0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2
import * as storage from '../../constants/storage'
import createHDWallet from '../../hof/create_hd_wallet'
import { propertyCount } from '../../helper/function'

class TestPage extends BasePage {
  start = () => {
    createHDWallet(this.props.AppContext)(
      // wallet mnemonic
      'talk cook energy elite dragon mom copy dirt wall kangaroo poem true',
      // path
      0
      // propertyCount(this.props.AppContext[storage.USER_WALLETS])
    )
  }
  render() {
    console.log(this.props.AppContext)
    return (
      <Page containerProps={{ style: { paddingLeft: 0, paddingRight: 0 } }}>
        CREATE WALLET
        <PrimaryButton type="primary" onClick={this.start}>
          create
        </PrimaryButton>
      </Page>
    )
  }
}

// export default withAppContext(withStyles(styles)(TestPage))
export default withAppContext(TestPage)
