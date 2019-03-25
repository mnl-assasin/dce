import React from 'react'
import { Padding, Tab, TabContent } from '../../../layout'
import { FabButton, CardDapp, Icon } from '../../../components'
import { DappInactive, DappActive, WalletGreen } from '../../../asset'

export default props => (
  <Tab
    title="dapps"
    renderButton={
      <React.Fragment>
        <Padding horizontal={4}>
          <Icon src={WalletGreen} size={50} />
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
          <Icon src={DappActive} size={56} />
        }
      />
      <CardDapp
        title="Dapper"
        componentIcon={
          <Icon src={DappInactive} size={56} />
        }
      />
      <CardDapp
        title="Contacts"
        componentIcon={
          <Icon src={DappInactive} size={56} />
        }
      />
    </TabContent>
  </Tab>
)
