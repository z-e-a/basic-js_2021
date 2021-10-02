import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],  
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(value===undefined) {
      this.arr.push('');
    } else {
      this.arr.push(value);
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(position===undefined ||
      position < 1 ||
      position > this.arr.length ||
      !Number.isInteger(position)
      // isNaN(parseInt(position))
      ){
        this.arr = [];
        throw new Error("You can\'t remove incorrect link!");
      } else{
        this.arr.splice(position-1, 1);
      }
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let outString = '';
    for (let i = 0; i < this.arr.length; i++) {
      outString += '( ' + this.arr[i] + ' )';
      outString += (i<(this.arr.length-1)) ? '~~' : '';
    }
    this.arr = [];
    return outString;
  }
};
