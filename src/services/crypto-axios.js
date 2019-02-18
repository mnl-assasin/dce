import axios from 'axios';
// import crypto from './crypto';

// temporary mock crypto
let crypto = {
  encrypt(key) {
      return key;
  },

  decrypt(key) {
      return key;
  }
}

class CryptoAxios {
  constructor() {
    this.axios = axios.create()

    this.axios.interceptors.request.use((config) => {
      let data = config.data;

      if(data && typeof data === 'object') {
        Object.keys(data).map((key, index) => {
          data[key] = crypto.encrypt(data[key]);

          return data[key];
        });
      }

      return config;
    }, (error) => {
      // Do something with request error
      return Promise.reject(error);
    });


    // Add a response interceptor
    this.axios.interceptors.response.use((response) => {
      let data = response.data;

      if(data && typeof data === 'object') {
        Object.keys(data).map((key, index) => {
          data[key] = crypto.decrypt(data[key]);

          return data[key];
        });
      }

      return response;
    }, (error) => {
      return Promise.reject(error);
    });
  }

  get(url) {
    return this.axios({
      url: url,
      method: 'get'
    })
  }

  post(url, data = {}, config = {}) {
    return this.axios({
      method: 'post',
      url,
      data,
      ...config
    })
  }
}

export default new CryptoAxios();