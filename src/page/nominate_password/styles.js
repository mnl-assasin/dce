import { makeStyles } from '@material-ui/styles'
import { TextStyles } from '../../constants/style'

export const styles = theme => {
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
    header: {
      display: 'flex',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: 16,
      paddingBottom: 32,
    },

    logoText: {
      ...TextStyles.style1,
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
    desc: {
      justifyContent: 'justify',
      height: 140,
    },
  }
}

export default makeStyles(styles)
