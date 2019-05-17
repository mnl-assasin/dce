import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'
import { ProvidersOptionsDefault } from '../constants/provider'
import * as storage from '../constants/storage'

export default appContext => async (
  name = '',
  address = '',
  abi = '',
  network = ProvidersOptionsDefault._id,
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    // const request = await Wallet.ethers.createHDWallet({
    //   mnemonic: mnemonic,
    //   path: path,
    // })
    // if (request.code === 200) {
    //   const wallet = request.data
    appContext.persist(
      {
        // add walllet to wallet db
        [storage.USER_DAPP]: {
          ...appContext[storage.USER_WALLETS],
          [wallet.address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.WALLET_ADDRESS]: wallet.address,
            [storage.WALLET_PRIVATE_KEY]: wallet.privateKey,
            [storage.WALLET_PUBLIC_KEY]: wallet.publicKey,
            [storage.WALLET_MNEMONIC]: wallet.mnemonic,
            [storage.WALLET_PATH]: wallet.path,
            [storage.WALLET_DISPLAY_BY]: displayBy,
          },
        },
      },
      // () => onSuccess(request.data)
      () => onSuccess()
    )
    return true
    //   return request.data
    // } else {
    //   throw new Error('code not 200')
    // }
  } catch (e) {
    onError(e)
    return null
  }
}
