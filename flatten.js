const eqArrays = function(firstArray, secArray) {
  if (firstArray === secArray) {
    return true;
  } else if (firstArray.length !== secArray.length) {
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

const flatten = array => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        result.push(element[j]);
      }
    } else {
      result.push(element);
    }
  } return result;
};
  
  


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
