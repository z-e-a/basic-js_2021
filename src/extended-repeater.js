import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = '' + str;
  if (!(options.addition === undefined)) {
    options.addition = '' + options.addition;
    if (options.additionRepeatTimes === undefined){
      options.additionRepeatTimes=1;
    }
  }
  if (options.separator=='' || options.separator === undefined ){options.separator='+'}
  if (options.additionSeparator=='' || options.additionSeparator===undefined){options.additionSeparator='|'}
  

  let outString = str

  for (let i = 0; i < options.repeatTimes-1; i++) {
    if(options.additionRepeatTimes>0){
      outString += options.addition;
      for (let j = 0; j < options.additionRepeatTimes-1; j++) {
        outString = outString + options.additionSeparator + options.addition;
      }
    }
    outString =  outString + options.separator + str;    
  }
  
  if(options.additionRepeatTimes>0){
    outString += options.addition;
    for (let j = 0; j < options.additionRepeatTimes-1; j++) {
      outString = outString + options.additionSeparator + options.addition;
    }
  }

  return outString;
}
