import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
  throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  // constructor() {
  //   this.maxDepth = 1;
  // }

  // calculateDepth(arr) {

  //   if (!arrayEquals(arr.flat(), arr)) {
  //     this.maxDepth++;
  //     arr = arr.flat()
  //     this.calculateDepth(arr);
  //   }
    
  //   return this.maxDepth;
  // }
}
}



// let test = new DepthCalculator()
// let arr = [1,2,3,[4,5]]
// let flatted = [1,2,3,4,5]

// console.log(test.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))

// function arrayEquals(a, b) {
//   return Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }