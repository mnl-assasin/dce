import React from 'react'
import { Padding, Tab, TabContent } from '../../../layout'
import { FabButton, CardDapp } from '../../../components'

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
