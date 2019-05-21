// import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'
import { ProvidersOptionsDefault } from '../constants/provider'
import * as storage from '../constants/storage'

export default appContext => async (
  name = '',
  address = '',
  network = ProvidersOptionsDefault._id,
  abi = '',
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {

  // transform abit string to json object
  let jsonAbi = null
  try {
    jsonAbi = JSON.parse(abi)
  } catch (e) {
    onError('abi must be json format')
    return null
  }

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
          [address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.DAPP_NAME]: name,
            [storage.DAPP_ADDRESS]: address,
            [storage.DAPP_ABI]: jsonAbi, // abi,
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
