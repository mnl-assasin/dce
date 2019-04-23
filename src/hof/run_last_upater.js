import { LAST_OPEN } from '../constants/storage'

export default appContext => async () => {
  const updater = () => {
    try {
      appContext.persist({
        [LAST_OPEN]: new Date().getTime(),
      })
    } catch (e) {
      return console.log('erro upadating timestamp: ', e)
    }
  }
  return setInterval(updater, 10000) // 10 seconds
}
