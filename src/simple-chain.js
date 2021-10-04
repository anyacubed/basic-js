import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  currentChains: [],
  getLength() {
    return this.currentChains.length;
  },
  addLink(value) {
    this.currentChains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.currentChains[position-1] || !Number.isInteger(position)) {
      this.currentChains = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.currentChains.splice(position -1,1);
    return this;
  },
  reverseChain() {
    this.currentChains.reverse();
    return this;
  },
  finishChain() {
    let finalChains = this.currentChains.join("~~");
    this.currentChains = [];
    return finalChains;
  }
};
