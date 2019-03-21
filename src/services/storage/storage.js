import configDB from '../../configs/db'
import ChromeStorage from './chrome-storage'
import LocalStorage from './local-storage'

class Storage {
  constructor() {
    switch (configDB.DRIVER) {
      case 'localStorage':
        return LocalStorage
      case 'chrome':
      default:
        return ChromeStorage
    }
  }
}

export default new Storage()
