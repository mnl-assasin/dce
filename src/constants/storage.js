// usera auth
export const IS_LOGGED = 'isLogged'
export const IS_SET_MNEMONIC = 'is_mnemonic_set'
export const IS_SET_PASSWORD = 'is_password_set'
export const PASSWORD = 'password'

// app setting
export const ACTIVE_PROVIDER_ID = 'activeProviderId'
export const ACTIVE_PROVIDER_NAME = 'ropsten'
export const ACTIVE_PROVIDER_BlOCKNUMBER = ''

// wallets config
export const USER_WALLETS = 'Wallets' // this is structure
//
// note: USER_WALLETS.USER_WALLETS or USER_WALLETS[USER_WALLETS]
//       USER_WALLETS is not an array for fastest rendering
//
// USER_WALLETS {
//   WALLET_ADDRESS: {
//     WALLET_MNEMONIC,
//     WALLET_ADDRESS,
//     WALLET_PRIVATE_KEY,
//     WALLET_PUBLIC_KEY
//   }
// }

export const WALLET_MNEMONIC = 'mnemonic'
export const WALLET_ADDRESS = 'address'
export const WALLET_PRIVATE_KEY = 'privateKey'
export const WALLET_PUBLIC_KEY = 'publicKey'

//
//

export const ETHER_PRICE = 'ether_price'
