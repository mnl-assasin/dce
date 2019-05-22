import React from 'react'
import { Padding, Tab, TabContent } from '../../../layout'
import { FabButton, CardDapp, Icon } from '../../../components'
import { DappInactive, DappActive, WalletGreen } from '../../../asset'
import { DAPP } from '../../../constants/storage'

export default ({ onAddDapp, dapps = [], onDappItem }) => {
  return (
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
      <TabContent direction="row" style={{ overflowX: 'auto', justifyContent: 'start' }}>
        <CardDapp
          // onAddDapp={onAddDapp}
          onPress={onAddDapp}
          isActive
          textTransform="uppercase"
          title="new dapp"
          componentIcon={<Icon src={DappActive} size={56} />}
        />
        {Object.keys(dapps).map((_id, index) => (
          <CardDapp
            key={_id}
            textTransform="uppercase"
            param={_id}
            onPress={onDappItem}
            title={dapps[_id] && dapps[_id][DAPP.DAPP_NAME]}
            componentIcon={<Icon src={DappInactive} size={56} />}
          />
        ))}
      </TabContent>
    </Tab>
  )
}
