'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function () {
    if (this.length === 0) {
      return undefined;
    }
    const removedElement = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    };
    this.length--;
    return removedElement;
  };
}

module.exports = applyCustomShift;
