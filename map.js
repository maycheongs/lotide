const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

const results1 = map(words, word => word[0]);
console.log(results1);

//assertArraysEqual
const eqArrays = function(firstArray, secArray) {
  if (firstArray === secArray) {
    return true;
  }
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



assertArraysEqual(map([1,2,3,4,5,6], num => num * 2), [2,4,6,8,10,12]);