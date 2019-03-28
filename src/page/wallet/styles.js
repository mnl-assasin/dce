import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
  root: {},
  header: {},
  headerHolder: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
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
    padding: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    borderTop: '1px solid #bdbaba',
  },
  valueHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    textAlign: 'right',
    borderTop: '1px solid #bdbaba',
    borderBottom: '1px solid #bdbaba',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonHolder: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
  },
})

export default makeStyles(styles)
