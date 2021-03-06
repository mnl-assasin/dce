import React from 'react'
import { Padding, Tab, TabContent } from '../../../layout'
import { WALLET } from '../../../constants/storage'
import { FabButton, CardWallet } from '../../../components'

export default ({ wallets = [], onPress, totalCoins, coinPrice }) => (
  <Tab
    title="coins"
    subTitle={totalCoins}
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
    <TabContent direction="column">
      {Object.keys(wallets).map((_id, index) => (
        <CardWallet
          key={_id}
          amount={wallets[_id][WALLET.WALLET_AMOUNT]}
          userName={wallets[_id][WALLET.WALLET_USERNAME]}
          basePrice={coinPrice}
          componentIcon={
            <FabButton color="red" type="third" size="small">
              E
            </FabButton>
          }
          onPress={onPress}
          param={wallets[_id]}
        />
      ))}
    </TabContent>
  </Tab>
)
