// usera auth
export const IS_LOGGED = 'isLogged'
export const IS_SET_MNEMONIC = 'is_mnemonic_set'
export const IS_SET_PASSWORD = 'is_password_set'
export const PASSWORD = 'password'

// app setting
export const ACTIVE_PROVIDER_ID = 'activeProviderId'
export const ACTIVE_PROVIDER_NAME = 'activeProviderName'
export const ACTIVE_PROVIDER_BlOCKNUMBER = 'activeProviderBlockNumber'

// wallets config
export const USER_MNEMONIC = 'user_mnemonic'
export const USER_WALLETS = 'Wallets' // this is structure

// mutating wallets is not good in useEffect
export const USER_WALLETS_BALANCE = 'WalletsBalance' // this is structure

//
// note: USER_WALLETS.USER_WALLETS or USER_WALLETS[USER_WALLETS]
//       USER_WALLETS is not an array for fastest rendering
//
// USER_WALLETS {
//   WALLET_ADDRESS: {
//     WALLET_USERNAME,
//     WALLET_AMOUNT,
//     WALLET_COINBASE,
//     WALLET_MNEMONIC,
//     WALLET_ADDRESS,
//     WALLET_PRIVATE_KEY,
//     WALLET_PUBLIC_KEY,
//     WALLET_PATH
//   }
// }

export const WALLET_USERNAME = 'userName' // '@jaylordTorres'
export const WALLET_AMOUNT = 'amount' // '22.33345  // ETH'
export const WALLET_COINBASE = 'coinBase' // ETH
export const WALLET_MNEMONIC = 'mnemonic'
export const WALLET_ADDRESS = 'address'
export const WALLET_PRIVATE_KEY = 'privateKey'
export const WALLET_PUBLIC_KEY = 'publicKey'
export const WALLET_PATH = 'path' // use in hd walelt

export const WALLET = {
  WALLET_USERNAME,
  WALLET_AMOUNT,
  WALLET_COINBASE,
  WALLET_MNEMONIC,
  WALLET_ADDRESS,
  WALLET_PRIVATE_KEY,
  WALLET_PUBLIC_KEY,
  WALLET_PATH,
}
//
//

export const ETHER_PRICE = 'ether_price'
