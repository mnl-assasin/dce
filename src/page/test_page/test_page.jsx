import React from 'react'
import PropTypes from 'prop-types'

import { Wallet, Transaction } from 'dapper'

import BasePage from '../../common/BasePage'
import { goTo } from '../../services/navigation'
import { PrimaryButton, SmallButton } from '../../components'
import Button from '@material-ui/core/Button'
import { withAppContext } from '../../services/Providers/AppStateContext'

import { Text, Icon, CardDapp, InputTextBox } from '../../components'
import { boxShadow } from '../../constants/style'
import { ContentCopy } from '../../asset'
import { Page, Padding, Tab, TabContent } from '../../layout'

import Fab from '@material-ui/core/Fab'
// 0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2
class TestPage extends BasePage {
  render() {
    return (
      <Page>
        <Tab title="SEND">
          <TabContent direction="column">
            <div style={style.cardstyle}>
              <div>
                <Text style={style.title}>YOUR ADDRESS</Text>
                <Text style={style.address}>
                  0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2
                </Text>
              </div>
              <Icon src={ContentCopy} size={15} />
            </div>
          </TabContent>
        </Tab>
        <InputTextBox />
      </Page>
    )
  }
}

const style = {
  cardstyle: {
    borderRadius: 10,
    backgroundColor: 'white',
    boxShadow: boxShadow,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
  },
  title: { fontSize: 9, fontWeight: 'bold', color: 'gray' },
  address: { fontSize: 10.3, fontWeight: 'bold' },
}

// TestPage.propTypes = {
//   AppContext: PropTypes.object.isRequired, // withAppContext
//   // classes: PropTypes.object.isRequired // withStyles
// };

export default withAppContext(TestPage)
