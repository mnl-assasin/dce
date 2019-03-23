import React from 'react'
import PropTypes from 'prop-types'

import { Wallet, Transaction } from 'dapper'

import BasePage from '../../common/BasePage'
import { goTo } from '../../services/navigation'
import { PrimaryButton, SmallButton } from '../../components'
import Button from '@material-ui/core/Button'
import { withAppContext } from '../../services/Providers/AppStateContext'

import FabButton from '../../components/FabButton'
import CardWallet from '../../components/CardWallet'
import CardDapp from '../../components/CardDapp'
import { Text } from '../../components'

import Page from '../../layout/Page'
import Padding from '../../layout/Padding'
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
              <Padding horizontal={4}>
                <FabButton color="red" type="pink" size="medium">
                  +
                </FabButton>
              </Padding>
              <Padding horizontal={4}>
                <FabButton color="red" type="primary" size="medium">
                  l
                </FabButton>
              </Padding>
              <Padding horizontal={4}>
                <FabButton color="red" type="third" size="medium">
                  A
                </FabButton>
              </Padding>
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
              <Padding horizontal={4}>
                <FabButton type="green" size="medium">
                  A
                </FabButton>
              </Padding>
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

        <Padding vertical={12} />
        <Padding vertical={8}>
          <PrimaryButton fullWidth type="primary">
            record recovery
          </PrimaryButton>
        </Padding>
        <Padding vertical={8}>
          <PrimaryButton fullWidth type="secondary">
            backup on chain
          </PrimaryButton>
        </Padding>
      </Page>
    )
  }
}

// TestPage.propTypes = {
//   AppContext: PropTypes.object.isRequired, // withAppContext
//   // classes: PropTypes.object.isRequired // withStyles
// };

export default withAppContext(TestPage)
