class LocalStorage {
  set(key, value) {
    return new Promise( (resolve) => {
      window.localStorage.setItem(key, JSON.stringify(value))

      resolve(true)
    })
  }

  get(key) {
    //TODO:  must be match for chrome-storge
    try {
      const result =  JSON.parse(window.localStorage.getItem(key));
      return Promise.resolve(result || null)
    } catch (e) {
      console.log('error in getting stroge: key:', key, ' error: ', e)
      return Promise.resolve(null)
    }
  }

  setObject(key, value) {
    return new Promise( (resolve) => {
      window.localStorage.setItem(key, JSON.stringify(value));

      resolve(true);
    })
  }

  getObject(key) {
    return new Promise( (resolve) => {
      let value = window.localStorage.getItem(key) || '{}';

      resolve(JSON.parse(value));
    })
  }

  remove(key) {
    window.localStorage.removeItem(key)

    return Promise.resolve(true)
  }

  clear() {
    window.localStorage.clear();

    return Promise.resolve(true)
  }
}


export default new LocalStorage()
