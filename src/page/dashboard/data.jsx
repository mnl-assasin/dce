import React from 'react'
import { goTo as navigate } from '../../services/navigation'
import { Icon as ThemeIcon } from '../../common'
import { icon } from '../../asset'

export const wallets = [
  {
    value: '$234123.33',
    title: '@jaylordTorres',
    iconName: 'ETHER',
    hash: 'werwexwrwrxw',
    data: {},
  },
  {
    value: '$434123.33',
    title: '@j3aylordTorres',
    iconName: 'ETHER',
    hash: 'werwex1wrwrxw',
    data: {},
  },
]

export const walletItems = [
  {
    model: {},
    isWallet: true,
    amount: 'test value',
    value: '0.123432',
    iconComponent: <ThemeIcon src={icon.ETHER} size={70} />,
    onClick: model => {
      navigate('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '0.123432',
    value: '0.123432',
    iconComponent: <ThemeIcon size={70} src={icon.ETHER} />,
    onClick: model => {
      navigate('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '2.123432',
    value: '0.123432',
    iconComponent: <ThemeIcon size={70} src={icon.ETHER} />,
    onClick: model => {
      navigate('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '4.123432',
    value: '100.123432',
    iconComponent: <ThemeIcon size={70} src={icon.BIT} />,
    onClick: model => {
      navigate('Wallet', model)
    },
  },
]
