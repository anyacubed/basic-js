import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  let dreamTeam = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    } else {
      result.push(members[i].toUpperCase().trim());
    }
  }
  result.sort();
  for (let j = 0; j < result.length; j++) {
    dreamTeam += result[j].charAt(0);
  }
  return dreamTeam;
}