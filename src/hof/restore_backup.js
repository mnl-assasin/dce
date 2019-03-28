import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'
import * as storage from '../constants/storage'
import * as route from '../constants/route'

/**
 *
 * @require appContext
 * @require navigate
 * @require alertDialog
 *
 */

export default (
  appContext,
  navigate = emptyMethod,
  alertDialog = emptyMethod
) => async (phrase, onSuccess = emptyMethod, onError = emptyMethod) => {
  let wallet
  try {
    wallet = await Wallet.ethers.restore({ mnemonic: phrase })
    if (wallet.code === 200) {
      appContext.persist({
        [storage.USER_WALLETS]: {
          ...appContext[storage.USER_WALLETS],
          [wallet.data.address]: {
            [storage.WALLET_COINBASE]: 'ETH',
            [storage.WALLET_ADDRESS]: wallet.data.address,
            [storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
            [storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey,
            [storage.WALLET_MNEMONIC]:  wallet.data.mnemonic,
          },
        },
        [storage.IS_SET_MNEMONIC]: true,
        // [storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
        // [storage.WALLET_ADDRESS]: wallet.data.address,
        // [storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
        // [storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey
      })
      // redir
      navigate(route.NOMINATED_PASSWORD, wallet)
    } else {
      throw new Error('no valid wallet data')
    }
  } catch (e) {
    console.log('error in restoring backup', e)
    alertDialog({
      title: 'Oopss',
      message:
        'It seems like you have entered a wrong mnemonic phrase. please try again'
    })
  }
}
