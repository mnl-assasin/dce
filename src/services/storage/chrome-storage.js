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
      let result = null;
      chrome.storage.local.get(key, function (res){
        console.log('haha f dis', res,JSON.stringify(res))
        result =  JSON.stringify(res);
      })

      console.log(result, 'res')
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
