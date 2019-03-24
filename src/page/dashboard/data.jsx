import { WALLET } from '../../constants/storage'

// test account
export const wallets = {
  '0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2': {
    [WALLET.WALLET_COINBASE]: 'ETH',
    [WALLET.WALLET_USERNAME]: '@jaylordTorres',
    [WALLET.WALLET_AMOUNT]: '2.2',
    [WALLET.WALLET_MNEMONIC]:
      'scrub slam warrior bamboo jacket swing cattle antique toy brand dynamic lunch',
    [WALLET.WALLET_ADDRESS]: '0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2',
    [WALLET.WALLET_PRIVATE_KEY]:
      '0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36',
    [WALLET.WALLET_PUBLIC_KEY]: '',
  },
  '0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2TEST': {
    [WALLET.WALLET_COINBASE]: 'BIT',
    [WALLET.WALLET_USERNAME]: '@test2',
    [WALLET.WALLET_AMOUNT]: '3.3',
    [WALLET.WALLET_MNEMONIC]:
      'crunch soldier universe crunch flight clip urge chalk giant silver rug tank',
    [WALLET.WALLET_ADDRESS]: '0x0598aC83C088f126B3043059FCfd2E7A5F0886FF',
    [WALLET.WALLET_PRIVATE_KEY]:
      '0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36',
    [WALLET.WALLET_PUBLIC_KEY]: '',
  },
}
//   {
//     _id: '0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2', // crypto address
//     value: '$234123.33',
//     title: '@jaylordTorres',
//     iconName: 'ETHER',
//     hash: 'werwexwrwrxw',
//
//   },
//   // {
//   //   value: '$434123.33',
//   //   title: '@j3aylordTorres',
//   //   iconName: 'ETHER',
//   //   hash: 'werwex1wrwrxw',
//   //   data: {},
//   // },
//   // {
//   //   value: '$434123.33',
//   //   title: '@j3aylordTorres',
//   //   iconName: 'ETHER',
//   //   hash: 'werwex1wrwrx1w',
//   //   data: {},
//   // },
// ]
//
// export const walletItems = [
//   {
//     model: {},
//     isWallet: true,
//     amount: 'test value',
//     value: '0.123432',
//     iconComponent: <ThemeIcon src={icon.ETHER} size={70} />,
//     onClick: model => {
//       navigate('Wallet', model)
//     },
//   },
//   {
//     model: {},
//     isWallet: true,
//     amount: '0.123432',
//     value: '0.123432',
//     iconComponent: <ThemeIcon size={70} src={icon.ETHER} />,
//     onClick: model => {
//       navigate('Wallet', model)
//     },
//   },
//   {
//     model: {},
//     isWallet: true,
//     amount: '2.123432',
//     value: '0.123432',
//     iconComponent: <ThemeIcon size={70} src={icon.ETHER} />,
//     onClick: model => {
//       navigate('Wallet', model)
//     },
//   },
//   {
//     model: {},
//     isWallet: true,
//     amount: '4.123432',
//     value: '100.123432',
//     iconComponent: <ThemeIcon size={70} src={icon.BIT} />,
//     onClick: model => {
//       navigate('Wallet', model)
//     },
//   },
// ]
