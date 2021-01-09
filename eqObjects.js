const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstArray, secArray) {
  if (firstArray === secArray) return true; //support undefined and primitives
  if (!Array.isArray(firstArray)) return false;
  if (firstArray.length !== secArray.length) return false;
  for (let index in firstArray) {
    if (firstArray[index] !== secArray[index]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {

  //test if no. of keys are the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    //recursive object equality
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    //if value is array or primitive
    } else if (!eqArrays(object1[key],object2[key])) {
      return false;
    }
  }
  return true;
};


/* console.log(eqObjects({ a: { z: { h: 1 }}, b: 2 }, { a: { z: { h: 1 }}, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
 */

module.exports = eqObjects;