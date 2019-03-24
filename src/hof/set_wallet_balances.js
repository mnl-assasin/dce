import setBalance from './set_balance'
import {
  WALLET_ADDRESS,
  USER_WALLETS,
  WALLET_AMOUNT,
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
  appContext.set({
    [USER_WALLETS]: newWallet,
  })
  return true
}
