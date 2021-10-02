import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(isDirect){
        if (isDirect == false){
          this.isReverse = true;  
        } else {
          this.isReverse = false;  
        }
      }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (arguments.length < 2){
      throw new Error('Incorrect arguments!')
    }
    if ((message === undefined) || (key === undefined)){
      throw new Error('Incorrect arguments!')
    }
    let factor = message.length / key.length;
    let keyStr = key.repeat(Math.ceil(factor)).slice(0,message.length).toUpperCase();
    message = message.toUpperCase();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let outStr = '';

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])){
        let index = alphabet.indexOf(message[i],0)+alphabet.indexOf(keyStr[i],0);
        index %= 26;
        outStr += alphabet[index];
      } else {
        outStr += message[i];
        keyStr = keyStr.slice(0, i) + message[i] + keyStr.slice(i);
      }
    }
   if (this.isReverse){
    outStr = outStr.split('').reverse().join('');
  }
    return outStr;

  }
  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (arguments.length < 2){
      throw new Error('Incorrect arguments!')
    }
    if ((message === undefined) || (key === undefined)){
      throw new Error('Incorrect arguments!')
    }
    let factor = message.length / key.length;
    let keyStr = key.repeat(Math.ceil(factor)).slice(0,message.length).toUpperCase();
    message = message.toUpperCase();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let outStr = '';

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])){
        let index = alphabet.indexOf(message[i],0)-alphabet.indexOf(keyStr[i],0)+26;
        index %= 26;
        outStr += alphabet[index];
      } else {
        outStr += message[i];
        keyStr = keyStr.slice(0, i) + message[i] + keyStr.slice(i);
      }
    }
    if (this.isReverse){
      outStr = outStr.split('').reverse().join('');
    }
    return outStr;
  }
}
