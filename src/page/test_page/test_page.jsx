import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/styles'
import { Wallet, Transaction } from 'dapper'

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

import { boxShadow } from '../../constants/style'
import { ContentCopy, Add } from '../../asset'
import { Page, Padding, Tab, TabContent } from '../../layout'
import { Row } from '../../common'
import WalletHeader from '../../page/wallet/component/WalletHeader'
import Fab from '@material-ui/core/Fab'
// 0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2
class TestPage extends BasePage {
  render() {
    const { classes } = this.props
    return (
      <Page containerProps={{ style: { paddingLeft: 0, paddingRight: 0 } }}>
        <div>
          <WalletHeader
            classes={classes}
            networkName="MAINNET"
            networkNumber="6784369"
            coinPrice="123.2"
            // userName={props.wallet[storage.WALLET_USERNAME]}
            userName="@BLOCKBUSTER"
            coinBase="ETH"
          />
        </div>
      </Page>
    )
  }
}
const Divider = props => <span style={{ padding: '0.3rem' }} />

export const styles = theme => ({
  headerHolder: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerProvider: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  headerCoin: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 2,
  },
  headerUser: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'right',
  },
})
// TestPage.propTypes = {
//   AppContext: PropTypes.object.isRequired, // withAppContext
//   // classes: PropTypes.object.isRequired // withStyles
// };

export default withAppContext(withStyles(styles)(TestPage))
