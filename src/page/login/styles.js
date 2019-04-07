import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2,
    paddingTop: 20,

    height: 240,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
    logoText:{
      fontWeight: 'bolder',
      fontSize:20,
      },
    buttonHolder: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
  },
  spacer: {
    height: 30,
  },
  fixBottom: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})

export default makeStyles(styles)
