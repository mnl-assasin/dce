import { USER_WALLETS_BALANCE, WALLET_AMOUNT } from '../constants/storage'

export const getWalletBalance = (appContext, walletAddress) => {
  try {
    const balance =
      appContext[USER_WALLETS_BALANCE][walletAddress][WALLET_AMOUNT]
    return balance
  } catch (e) {
    return ''
  }
}

export const trimAddress = address => {
  return '' + address.slice(0, 8) + '...' + address.slice(-8)
}
