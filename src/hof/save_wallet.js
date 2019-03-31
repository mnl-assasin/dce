import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'
import { displayTypes } from '../constants/types'
import * as storage from '../constants/storage'

export default appContext => async (
  wallet,
  displayBy = displayTypes.default,
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    return appContext.persist(
      {
        [storage.USER_WALLETS]: {
          ...appContext[storage.USER_WALLETS],
          [wallet.address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.WALLET_ADDRESS]: wallet.address,
            [storage.WALLET_PRIVATE_KEY]: wallet.privateKey,
            [storage.WALLET_PUBLIC_KEY]: wallet.publicKey,
            [storage.WALLET_MNEMONIC]: wallet.mnemonic,
            [storage.WALLET_PATH]: 0,
            [storage.WALLET_DISPLAY_BY]: displayTypes.default,
          },
        },
      },
      onSuccess
    )
  } catch (e) {
    console.log('error in getting ether price: ', e)
    onError(e)
    return null
  }
}
