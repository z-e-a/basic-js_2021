import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(date===undefined){return 'Unable to determine the time of year!'}
  // if(isNaN(Date.parse(date))){throw('The `date` argument is invalid!');}
  if(isNaN(Date.parse(date))){throw new Error('Invalid date!');}
  // if(Object.prototype.toString.call(date) != '[object Date]') {throw('The `date` argument is invalid!');}
  if(Object.prototype.toString.call(date) != '[object Date]') {throw new Error('Invalid date!');}

  // testDate = new Date(
  //   date.getFullYear(),
  //   date.getMonth(),
  //   date.getDate(),
  //   date.getHours(),
  //   date.getMinutes(),
  //   date.getSeconds(),
  //   date.getMilliseconds(),
  // );

  // if (date != testDate) {throw new Error('Invalid date!');}

  // if (typeof(date.getTime) !== 'function') {throw new Error('Invalid date!');}
  // if (typeof(date.getTime) === 'undefined') {throw new Error('Invalid date!');}

  if(Object.keys(date).length != Object.keys(new Date()).length) {throw new Error('Invalid date!');}

  let month=date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    case 8:
    case 9:
    case 10:
      return 'autumn';
      break;
        
    default:
      break;
  }

}
