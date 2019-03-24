import * as storage from '../../constants/storage'
import * as route from '../../constants/route'

export const getIsActive = appContext => network => {
  if (!network._id) return false
  return network._id === appContext[storage.ACTIVE_PROVIDER_ID]
}

export const setIsActive = (
  appContext,
  navigate,
  setBlockNumber,
  setError
) => network => {
  if (!network._id) {
    console.log('invalid network id provided')
    return false
  }

  if (network._id === appContext[storage.ACTIVE_PROVIDER_ID]) {
    return ''
  }
  console.log(network)
  setBlockNumber(
    network._id,
    value =>
      appContext.persist({
        [storage.ACTIVE_PROVIDER_ID]: network._id,
        [storage.ACTIVE_PROVIDER_NAME]: network.title,
        [storage.ACTIVE_PROVIDER_BlOCKNUMBER]: String(value),
      }),
    error => setError('error')
  )
  return navigate(route.SETTING)
}
