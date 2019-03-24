export const items = [
  {
    model: {},
    isWallet: true,
    amount: 'test value',
    value: '0.123432',
    iconComponent: <ThemeIcon src={EtherImage} size={70} />,
    onClick: model => {
      goTo('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '0.123432',
    value: '0.123432',
    iconComponent: <ThemeIcon size={70} src={EtherImage} />,
    onClick: model => {
      goTo('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '2.123432',
    value: '0.123432',
    iconComponent: <ThemeIcon size={70} src={EtherImage} />,
    onClick: model => {
      goTo('Wallet', model)
    },
  },
  {
    model: {},
    isWallet: true,
    amount: '4.123432',
    value: '100.123432',
    iconComponent: <ThemeIcon size={70} src={BitImage} />,
    onClick: model => {
      goTo('Wallet', model)
    },
  },
]
