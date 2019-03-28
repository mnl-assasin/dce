import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
  root: {},
  logo: {
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  buttonHolder: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  }
})

export default makeStyles(styles)
