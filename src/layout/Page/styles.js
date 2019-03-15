export default theme  => ({
  root: {
    width: '100%',
  	height: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    display: 'flex'
  },
})
