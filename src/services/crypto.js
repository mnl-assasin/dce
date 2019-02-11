import crypto from 'crypto'
import configApi from '../configs/api'

const {KEY, SECRET} = configApi

class Crypto {
    decrypt(text){
      let keySecret = `${KEY}:${SECRET}` 
      let cc = crypto.createDecipher('aes-128-ecb',  new Buffer(keySecret, 'base64'));
      let decrypted = Buffer.concat([cc.update(text, 'base64'), cc.final()]).toString('utf8');
      
      return decrypted; 
    }

    encrypt(text){
      let keySecret = `${KEY}:${SECRET}` 
      let cc = crypto.createCipher('aes-128-ecb',  new Buffer(keySecret, 'base64'));
      let encrypted = Buffer.concat([cc.update(text, 'utf8'), cc.final()]).toString('base64');
      
      return encrypted;
    }
}


export default new Crypto()