import { orderObjectByKey } from '../helper/function'
import setBalance from './set_balance'
import {
  WALLET_ADDRESS,
  USER_WALLETS,
  WALLET_AMOUNT,
  USER_WALLETS_BALANCE,
} from '../constants/storage'

//store.WALLET FORMAT
export default (appContext, ACTIVE_PROVIDER_ID) => async (wallets = []) => {
  let newWallet = {}
  const _setBalance = setBalance(appContext)
  await Promise.all(
    Object.keys(wallets).map(async key => {
      newWallet[key] = {
        ...wallets[key],
        [WALLET_AMOUNT]: await _setBalance(
          ACTIVE_PROVIDER_ID,
          wallets[key][WALLET_ADDRESS]
        ),
      }

      return true
    })
  )

  appContext.set({ [USER_WALLETS_BALANCE]: orderObjectByKey(newWallet) })
  // return not the result because what will return is a promise. and a promise is not good in lifecycle hooks
  return true
}
