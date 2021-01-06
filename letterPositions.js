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

const letterPositions = function(sentence) {
  const results = {};

  for (let index in sentence) {
    index = Number(index);
    let letter = sentence[index];
    results[letter] ? results[letter].push(index) : results[letter] = [index];
  }

  delete results[' '];
  return results;

};

assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
assertArraysEqual(letterPositions("lighthouse in the house")[' '], undefined);