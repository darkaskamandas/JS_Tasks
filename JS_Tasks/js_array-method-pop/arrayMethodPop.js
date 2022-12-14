'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function () {
    if (this.length > 0) {
      let lastElement = this[this.length - 1];
      this.length--;
      return lastElement;
    }
  };
}

module.exports = applyCustomPop;
