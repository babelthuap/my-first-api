'use strict';

// arrays may contain non-numbers - ignore them

exports.sum = (arr) => {
  return arr.reduce((tot, x) => {
    if (!isNaN(+x)) {
      return tot + +x;
    } else {
      return tot;
    }
  }, 0);
};
