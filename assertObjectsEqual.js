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

const eqObjects = function(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  eqObjects(actual, expected) ? console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❗Assertion Failed"${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = {
  a: 'hello',
  b: [1,2]
};

const ba = {
  b: [1,2],
  a: 'hello'
};

assertObjectsEqual(ab,ba);