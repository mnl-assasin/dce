import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
  root: {},
    pageHeader:{
      paddingTop: 16,
    },
    pageHeaderTitle:{
        fontSize: 12,
        fontWeight: 'bold',
    },
    pageHeaderSubTitle:{
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gray',

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
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
    },
    coinTileValue: {
     fontSize: 12,
     fontWeight: 'bold',
     color: 'black',
     display: 'flex',
     justifyContent: 'flex-end',
     flexDirection: 'column'
    },
    cardContentHolder: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    address:{
      color: 'gray',
      fontSize: 14,
      fontWeight: 'bold'
    },
    date:{
        color:'gray',
        fontSize: 12,
        fontWeight: 'bold',
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
