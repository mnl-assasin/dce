import { makeStyles } from '@material-ui/styles'
import { TextStyles  } from '../../constants/style'

export const styles = theme => ({
  root: {},
    pageHeader:{
      paddingTop: 16,
    },
    pageHeaderTitle: {
      ...TextStyles.style1
    },
    pageHeaderSubTitle: {
      ...TextStyles.style2,
    },
    coinCard: {
      marginTop: '.5rem',
      marginBottom:'.5rem',
      padding: '1rem .75rem 1rem .75rem',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    coinTitleContainer: {
      paddingBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    coinTitleHeader: {
      ...TextStyles.style1,
      fontSize: TextStyles.sizes.size2,
    },
    coinTileValue: {
      ...TextStyles.style1,
     display: 'flex',
     justifyContent: 'flex-end',
     flexDirection: 'column'
    },
    cardContentHolder: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    address: {
      ...TextStyles.style2,
      fontSize: TextStyles.sizes.size2,
    },
    date: {
      ...TextStyles.style2,
      textTransform:"uppercase"
    },
  logo: {
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  	flex: 2,
  	height: 200
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
