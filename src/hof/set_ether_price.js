import { Transaction } from 'dapper'
import { emptyMethod } from '../helper/function'
import { ETHER_PRICE } from '../constants/storage'

/**
 *
 * @require this.storage
 * @require this.props.AppContext
 * @require this.props.AppContext
 *
 */

export default appContext => async (
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    const request = await Transaction.ethers.etherPrice()
    if (request.code === 200) {
      appContext.set({
        [ETHER_PRICE]: String(request.data.price),
      })
      onSuccess(request.data.price)
      return request.data.price
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting ether price: ', e)
    onError(e)
    return null
  }
}
