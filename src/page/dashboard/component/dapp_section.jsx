import React from 'react'
import { Page, Padding, Tab, TabContent } from '../../../layout'
import {
  PrimaryButton,
  SmallButton,
  FabButton,
  CardWallet,
  CardDapp,
  Navbar,
  Text,
} from '../../../components'

export default props => (
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
)
