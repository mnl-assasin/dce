export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 3
  },
  content: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    display: 'flex'
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
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column'
  },
  spacer:{
		height: 30,
  },
  fixBottom: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
  	justifyContent: 'flex-end',
  	alignItems: 'flex-end',
  }
})
