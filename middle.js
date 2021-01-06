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

const middle = array => {
  let result = [];

  let midIndex = (array.length - 1) / 2;
  if (Math.floor(midIndex)) {
    if (Number.isInteger(midIndex)) {
      result.push(array[midIndex]);
    } else {
      result.push(array[Math.floor(midIndex)], array[Math.ceil(midIndex)]);
    }
  } return result;
};




assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);