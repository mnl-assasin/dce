/**
 * @require this.setState
 * @require this.storage
 * @require this.setBlockNumber
 * @require this.props.AppContext
 * @require this.setBlockNumber
 **/

export default context => async () => {
  context.setBlockNumber(
    context.props.AppContext[context.storage.ACTIVE_PROVIDER_ID],
    value => {
      context.props.AppContext.persist({
        [context.storage.ACTIVE_PROVIDER_BlOCKNUMBER]: String(value),
      })
      context.setState({ blockNumber: String(value) })
    },
    error => context.setState({ blockNumber: '' })
  )

  // get ether balance and set it to context
  context.setEtherPrice()

  // get balance of wallet and set to state for update
  context.setBalance(
    context.props.AppContext[context.storage.ACTIVE_PROVIDER_ID],
    context.props.wallet[context.storage.WALLET_ADDRESS],
    value => context.setState({ amount: value })
  )
}
