class LocalStorage {
  set(key, value) {
    return new Promise( (resolve) => {
      window.localStorage.setItem(key, value)

      resolve(true)
    })
  }

  get(key) {
    return Promise.resolve(window.localStorage.getItem(key) || null);
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