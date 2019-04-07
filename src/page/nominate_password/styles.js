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
      alignItems: 'flex-start',
      flex: 2,
      height: 240,
        paddingTop: 16,
    },
      logoText: {
          fontSize: 20,
          fontWeight: 'bold',

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
