import { Transaction } from 'dapper-js'

//
// setBlockNumber
// @this.storage

export default (context) => async (ACTIVE_PROVIDER_ID, onSuccess, onError) => {
  try {
    if (!ACTIVE_PROVIDER_ID) {
      throw new Error('invalid provider')
    }
    const request = await Transaction.ethers.blockNumber({
      network: ACTIVE_PROVIDER_ID
    })
    if (request.code === 200) {
      // context.setState({blockNumber: String(request.data.blockNumber)})
      return onSuccess(request.data.blockNumber)
    } else {
      throw new Error('code not 200')
    }
  } catch (e) {
    console.log('error in getting blockNumber: ', e)
    return onError(e)
  }
}
