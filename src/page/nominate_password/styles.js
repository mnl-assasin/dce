import { makeStyles } from '@material-ui/styles'

export const styles = theme => {
  console.log(theme)
  return {
    root: {},
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
      alignItems: 'center',
      flex: 2,
      height: 200,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    buttonHolder: {
      marginTop: theme.spacing.unit,
      display: 'flex',
      flexDirection: 'column',
    },
    description: {
      paddingBottom: theme.spacing.unit,
    },
  }
}

export default makeStyles(styles)
