export default theme => ({
  root: {
  },
  container: {
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
  buttonGroup: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
})
