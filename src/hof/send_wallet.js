import { Transaction } from 'dapper'
import { emptyMethod } from '../helper/function'

/**
 *
 * @require this.storage
 * @require this.props.AppContext
 * @require this.props.AppContext
 *
 */

 // request.network,
 // request.privateKey,
 // request.address,
 // request.value,
 // request.gasLimit,
 // request.data
 //
 // async estimateFees(request) {
 //   console.log(request);
 //   if (isUndefined(request)) {
 //     throw errors.UNDEFINED;
 //   } else {
 //     let data = await ethers.estimateFees(
 //       request.network,
 //       request.address,
 //       request.value
 //     );
 //
 //     return result.build(data);
 //   }
 //
// send wallet
export default (context) => async (
  params,
  onSuccess = emptyMethod,
  onError = emptyMethod) => {
  try {
  console.log('send wallet: ', params)
    if (!params.network || !params.privateKey || !params.address || !params.value || !params.gasLimit) {
      throw new Error('invalid params')
    }

    const request = await Transaction.ethers.send(params)

    if (request.code === 200) {
      // converted amount price is a component value.
      // so success must handle by the caller
      console.log('send wallet: ', request)
      return onSuccess(request.data)
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in sending balance: ', e)
    return onError(e)
  }
}
