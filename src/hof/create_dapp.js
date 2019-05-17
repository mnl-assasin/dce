// import { Wallet } from 'dapper'
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
          ...appContext[storage.USER_DAPP],
          [wallet.address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.DAPP_NAME]: name,
            [storage.DAPP_ADDRESS]: address,
            [storage.DAPP_ABI]: abi,
            [storage.DAPP_NETWORK]: network,
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
