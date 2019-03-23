import React from 'react'
import PropTypes from 'prop-types'

import { Wallet, Transaction } from 'dapper'
import Typography from '@material-ui/core/Typography'

import BasePage from '../../common/BasePage'
import { goTo } from '../../services/navigation'
import { PrimaryButton, SmallButton } from '../../components'
import Button from '@material-ui/core/Button'
import { withAppContext } from '../../services/Providers/AppStateContext'

import FabButton from '../../components/FabButton'
import CardWallet from '../../components/CardWallet'
import CardDapp from '../../components/CardDapp'
import Page from '../../layout/Page'
import Padder from '../../layout/Padder'
import Tab from '../../layout/Tab'
import TabContent from '../../layout/TabContent'

import Fab from '@material-ui/core/Fab'

class TestPage extends BasePage {
  render() {
    return (
      <Page>
        <Tab
          title="coins"
          subTitle="$3214.23"
          renderButton={
            <React.Fragment>
              <Padder size={1} horizontal>
                <FabButton color="red" type="pink" size="medium">
                  +
                </FabButton>
              </Padder>
              <Padder size={1} horizontal>
                <FabButton color="red" type="primary" size="medium">
                  l
                </FabButton>
              </Padder>
              <Padder size={1} horizontal>
                <FabButton color="red" type="third" size="medium">
                  A
                </FabButton>
              </Padder>
            </React.Fragment>
          }
        >
          <CardWallet
            title="$231231.3123"
            subTitle="@jaylordTorres"
            componentIcon={
              <FabButton color="red" type="third" size="small">
                l
              </FabButton>
            }
          />
          <CardWallet
            title="$2311.312233"
            subTitle="@Torresjaylord"
            componentIcon={
              <FabButton color="red" type="third" size="small">
                l
              </FabButton>
            }
          />
        </Tab>

        <Tab
          title="dapps"
          renderButton={
            <React.Fragment>
              <Padder size={1} horizontal>
                <FabButton type="green" size="medium">
                  A
                </FabButton>
              </Padder>
            </React.Fragment>
          }
        >
          <TabContent direction="row">
            <CardDapp
              isActive
              textTransform="uppercase"
              title="new dapp"
              componentIcon={
                <FabButton color="red" type="third" size="large">
                  l
                </FabButton>
              }
            />
            <CardDapp
              title="Dapper"
              componentIcon={
                <FabButton color="red" type="third" size="large">
                  l
                </FabButton>
              }
            />
            <CardDapp
              title="Contacts"
              componentIcon={
                <FabButton color="red" type="third" size="large">
                  l
                </FabButton>
              }
            />
          </TabContent>
        </Tab>

        <Padder size={3} vertical />
        <Padder size={2} vertical>
          <PrimaryButton fullWidth type="primary">
            record recovery
          </PrimaryButton>
        </Padder>
        <Padder size={2} vertical>
          <PrimaryButton fullWidth type="secondary">
            backup on chain
          </PrimaryButton>
        </Padder>
      </Page>
    )
  }
}

// TestPage.propTypes = {
//   AppContext: PropTypes.object.isRequired, // withAppContext
//   // classes: PropTypes.object.isRequired // withStyles
// };

export default withAppContext(TestPage)
