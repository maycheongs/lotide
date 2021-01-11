
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
  
  
module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);