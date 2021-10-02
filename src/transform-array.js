import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(arr===undefined || !Array.isArray(arr)){throw new Error("'arr' parameter must be an instance of the Array!");}
  let result = [];
  let discardedIndexes = [];
  let nextElemDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': // исключает следующий за ней элемент исходного массива из преобразованного массива.     
        nextElemDiscarded = true;
      break;

      case '--discard-prev': // исключает предшествующий ей элемент исходного массива из преобразованного массива.
         if (!discardedIndexes.includes(i-1)){
          result.pop();
         }
      break;

      case '--double-next': // удваивает следующий за ней элемент исходного массива в преобразованном массиве.
        if ((i<=arr.length-2)){
          result.push(arr[i+1]);
        }
      break;
        
      case '--double-prev': // удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
        if ((i>0) && (arr[i-1][0]!='-') && (!discardedIndexes.includes(i-1))){
          result.push(arr[i-1]);
        }
      break;

      default:
        if (!nextElemDiscarded) {
          result.push(arr[i]);
        } else {
          discardedIndexes.push(i);
          nextElemDiscarded = false;
        }
        break;
    }
    
  }
  return result;
}
