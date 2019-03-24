import { Transaction } from 'dapper'
import { emptyMethod } from '../helper/function'
import { ACTIVE_PROVIDER_BlOCKNUMBER } from '../constants/storage'
//
// setBlockNumber
// @this.storage

export default appContext => async (
  ACTIVE_PROVIDER_ID,
  onSuccess = emptyMethod,
  onError = emptyMethod
) => {
  try {
    if (!ACTIVE_PROVIDER_ID) {
      throw new Error('invalid provider')
    }
    const request = await Transaction.ethers.blockNumber({
      network: ACTIVE_PROVIDER_ID,
    })
    if (request.code === 200) {
      appContext.persist({
        [ACTIVE_PROVIDER_BlOCKNUMBER]: String(request.data.blockNumber),
      })
      onSuccess(request.data.blockNumber)
      return request.data.blockNumber
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting blockNumber: ', e)
    onError(e)
    return null
  }
}
