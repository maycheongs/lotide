const assertEqual = require('./assertequal.js');

const eqArrays = function(firstArray, secArray) {
  if (firstArray.length !== secArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secArray[i]) {
      return false;
    }
  } return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);