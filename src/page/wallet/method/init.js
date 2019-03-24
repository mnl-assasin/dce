import { setBlockNumber, setEtherPrice, setBalance } from '../../../hof'
import * as storage from '../../../constants/storage'
/**
 * @require this.setState
 * @require this.storage
 * @require this.setBlockNumber
 * @require this.props.AppContext
 * @require this.setBlockNumber
 **/

export default appContext => {
  const _setBlockNumber = setBlockNumber(appContext)
  const _setEtherPrice = setEtherPrice(appContext)
  const _setBalance = setBalance(appContext)

  return wallet => {
    _setBlockNumber(appContext[storage.ACTIVE_PROVIDER_ID])
    _setEtherPrice()
    // get balance of wallet and set to state for update
    _setBalance(
      appContext[storage.ACTIVE_PROVIDER_ID],
      wallet[storage.WALLET_ADDRESS],
      value => {} // context.setState({ amount: value })
    )
    return () => {}
  }
}
