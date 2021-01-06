const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(ab, ba);

console.log(eqObjects(ab, ba));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false