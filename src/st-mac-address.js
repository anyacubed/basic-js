import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  throw new NotImplementedError('Not implemented');
  let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 10) {
      continue;
    } else if (arr.includes(n[i])) {
      continue;
    } else if (n[i] == "-") {
      continue;
      return true;
    } else {
      return false;
    }
  } 
}
