import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
  },
  header: {},
  headerHolder: {
    display: 'flex',
  },
  headerProvider: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  headerCoin: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 2,
  },
  headerUser: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'right',
  },
  contentHolder: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
  },
  amountHolder: {
    paddingTop: theme.spacing.unit * 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  valueHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'right',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 3,
  },
  textField: {
    marginBottom: theme.spacing.unit * 2,
    flexBasis: 200,
    fontSize: 10,
    // marginRight: theme.spacing.unit
  },
  buttonHolder: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
  },
  sendTo: {},
  addIcon: {
    fontSize: 56,
    color: 'dimgray',
    cursor: 'pointer',
  },
  amount: {
    marginRight: theme.spacing.unit,
  },
  usd: {
    marginLeft: theme.spacing.unit,
  },
  gasLimit: {
    // marginLeft: theme.spacing.unit,
  },
  gasIcon: {
    fontSize: 56,
    color: 'dimgray',
  },
  transaction: {
    display: 'flex',
    flex: 1,
  },
})

export default makeStyles(styles)
