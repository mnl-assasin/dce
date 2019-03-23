import { makeStyles } from '@material-ui/styles'

export const styles =  theme => ({
  root: {
  },
  logo: {
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  	flex: 2,
  	height: 200
  },
  buttonGroup: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
})

export default makeStyles(styles)