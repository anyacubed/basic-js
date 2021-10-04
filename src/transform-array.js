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
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }

  let newArr = Array.from(arr);
  let res = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      if (newArr[i+1] !== undefined) {
        newArr[i+1] = "discarded";
      }
      continue;
    }

    if (newArr[i] === "--discard-prev") {
      if (newArr[i-1] !== undefined && newArr[i-1] !== "discarded") {
        newArr[i-1] = "discarded";
        res.pop()
      }
      continue;
    }
    
 
    if (newArr[i] === "--double-next") {
      if (newArr[i+1] !== undefined) {
        res.push(newArr[i+1]);
      }
      continue;
    }

    if (newArr[i] === "--double-prev") {
      if (newArr[i-1] !== undefined && newArr[i-1] !== "discarded") {
        res.push(newArr[i-1]);
      }
      continue;
    }

    if (newArr[i] === "discarded") {
      continue;
    }

    res.push(newArr[i]);
  }   
  return res;
}
