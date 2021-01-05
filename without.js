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

const without = function(source, itemsToRemove) {
  let filtered = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    filtered = filtered.filter(item => item !== itemsToRemove[i]);    
  };
  return filtered;
};

assertArraysEqual(without(['gum', 'chocolate', 'sweets'], [1, 'gum']), ['chocolate', 'sweets']);
assertArraysEqual(without([1,2,3,3,4,4,5,6], [3,'2',6]), [1,2,4,4,5]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



