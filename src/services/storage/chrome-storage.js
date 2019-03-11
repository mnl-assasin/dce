class ChromeStorage {
  set(key, value) {
    return new Promise( (resolve) => {
      window.chrome.storage.local.set({[key]: JSON.stringify(value) }, function() {
        resolve(true)
      })
    })
  }

  get(key) {
    return new Promise( (resolve) => {
      console.log(key);

      window.chrome.storage.local.get([key], function(result) {
        resolve(JSON.parse(result[key]));
      });
    })
  
  }

  setObject(key, value) {
    this.set(key, value);
  }

  getObject(key) {
    return this.get(key);
  }

  remove(key) {
    return new Promise( (resolve) => {
      window.chrome.storage.local.remove(key);

      resolve(true);
    })
  }

  clear() {
    window.chrome.storage.local.clear();

    return Promise.resolve(true)
  }
}


export default new ChromeStorage()