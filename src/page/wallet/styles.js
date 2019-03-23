export default theme => ({
  root: {},
  header: {},
  headerHolder: {
    display: 'flex'
  },
  headerProvider: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  headerCoin: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 2
  },
  headerUser: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'right'
  },
  contentHolder: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2
  },
  amountHolder: {
    paddingTop: theme.spacing.unit * 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right'
  },
  valueHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'right'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonHolder: {
    marginTop: theme.spacing.unit ,
    display: 'flex',
    flexDirection: 'column'
  }
})
