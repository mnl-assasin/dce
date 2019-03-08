export default (theme) => ({
	root: {
	},
	container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 3, 
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
		buttonHolder: {
			marginTop: theme.spacing.unit,
			display: 'flex',
			flexDirection: 'column'

		}
});