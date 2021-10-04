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
  throw new NotImplementedError('Not implemented');
  // let exactMonth = date.getMonth();
  // if (exactMonth == 11 || exactMonth == 0 || exactMonth == 1) {
  //   return 'winter';
  // } else if (exactMonth == 2 || exactMonth == 3 || exactMonth == 4) {
  //   return 'spring';
  // } else if (exactMonth == 5 || exactMonth == 6 || exactMonth == 7) {
  //   return 'summer'
  // } else {
  //   return 'autumn';
  // }
}
