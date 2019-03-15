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
  buttonGroup: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
    justifyContent: 'center'
  }
})
