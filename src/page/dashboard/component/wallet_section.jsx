import React from 'react'
import { Padding, Tab, TabContent } from '../../../layout'
import { WALLET } from '../../../constants/storage'
import { FabButton, CardWallet, Icon } from '../../../components'
import { Add, CoinMenu, WalletViolet, icon } from '../../../asset'

export default ({ wallets = [], onPress, totalCoins, coinPrice }) => (
  <Tab
    title="coins"
    subTitle={totalCoins}
    renderButton={
      <React.Fragment>
        <Padding horizontal={4}>
          <Icon src={Add} size={50} />
        </Padding>
        <Padding horizontal={4}>
          <Icon src={CoinMenu} size={50} />
        </Padding>
        <Padding horizontal={4}>
          <Icon src={WalletViolet} size={50} />
        </Padding>
      </React.Fragment>
    }
  >
    <TabContent direction="column">
      {Object.keys(wallets).map((_id, index) => (
        <CardWallet
          key={_id}
          amount={wallets[_id][WALLET.WALLET_AMOUNT]}
          userName=""
          // userName={wallets[_id][WALLET.WALLET_USERNAME]}
          basePrice={coinPrice}
          componentIcon={
            <Icon src={icon.ETHER} size={28} />
          }
          onPress={onPress}
          param={wallets[_id]}
        />
      ))}
    </TabContent>
  </Tab>
)
