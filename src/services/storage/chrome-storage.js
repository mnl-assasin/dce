/*global chrome*/

class ChromeStorage {
  set(key, value) {
    return new Promise(resolve => {
      chrome.storage.local.set({ [key]: JSON.stringify(value) }, function() {
        resolve(true)
      })
    })
  }

  get(key) {
    try {
      const result = JSON.parse(chrome.storage.local.get(key))
      return Promise.resolve(result || null)
    } catch (e) {
      console.log('error in getting stroge: key:', key, ' error: ', e)
      return Promise.resolve(null)
    }
  }

  setObject(key, value) {
    this.set(key, value)
  }

  getObject(key) {
    return this.get(key)
  }

  remove(key) {
    return new Promise(resolve => {
      chrome.storage.local.remove(key)

      resolve(true)
    })
  }

  clear() {
    chrome.storage.local.clear()

    return Promise.resolve(true)
  }
}

export default new ChromeStorage()
