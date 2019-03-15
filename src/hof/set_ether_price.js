import { Transaction } from 'dapper-js'
import { emptyMethod } from '../helper/function'

/**
 *
 * @require this.storage
 * @require this.props.AppContext
 * @require this.props.AppContext
 *
 */

export default (context) => async (onSuccess = emptyMethod, onError = emptyMethod) => {
  try {
    const request = await Transaction.ethers.etherPrice()
    if (request.code === 200) {
      context.props.AppContext.set({
        [context.storage.ETHER_PRICE]: String(request.data.price)
      })
      return onSuccess(request.data.price)

    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting ether price: ', e)
    return onError(e)
  }
}
