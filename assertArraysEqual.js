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

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} is equal ${expected}`) : console.log(`❗Assertion Failed: ${actual} does not equal ${expected} (Check Type)`);

};


assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,'3']);