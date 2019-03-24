import { Wallet } from 'dapper'
import { emptyMethod } from '../helper/function'

/**
 *
 * @require this.storage
 * @require this.props.AppContext
 * @require this.props.AppContext
 *
 */

export default context => async (
  ACTIVE_PROVIDER_ID,
  WALLET_ADDRESS,
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    if (!ACTIVE_PROVIDER_ID) {
      throw new Error('invalid provider')
    }
    if (!ACTIVE_PROVIDER_ID) {
      throw new Error('invalid provider')
    }
    const request = await Wallet.ethers.balance({
      provider: ACTIVE_PROVIDER_ID,
      address: WALLET_ADDRESS,
    })
    if (request.code === 200) {
      // converted amount price is a component value.
      // so success must handle by the caller
      onSuccess(request.data.balance)
      return request.data.balance
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting wallet balance: ', e)
    return onError(e)
  }
}
