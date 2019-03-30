import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'
import * as storage from '../constants/storage'

export default appContext => async (
  mnemonic = '',
  path = 0,
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    const request = await Wallet.ethers.createHDWallet({
      mnemonic: mnemonic,
      path: path,
    })
    if (request.code === 200) {
      const wallet = request.data
      appContext.persist({
        // add walllet to wallet db
        [storage.USER_WALLETS]: {
          ...appContext[storage.USER_WALLETS],
          [wallet.address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.WALLET_ADDRESS]: wallet.address,
            [storage.WALLET_PRIVATE_KEY]: wallet.privateKey,
            [storage.WALLET_PUBLIC_KEY]: wallet.publicKey,
            [storage.WALLET_MNEMONIC]: wallet.mnemonic,
            [storage.WALLET_PATH]: wallet.path,
          },
        },
      })
      return request.data
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting ether price: ', e)
    onError(e)
    return null
  }
}
