

const eqArrays = function(firstArray, secArray) {
  if (firstArray === secArray) return true; // works for undefined

  if (!Array.isArray(firstArray)) return false;

  if (firstArray.length !== secArray.length) return false;
  for (let index in firstArray) {
    if (Array.isArray(firstArray[index])) {
      if (!eqArrays(firstArray[index], secArray[index])) {
        return false;
      }
    } else if (firstArray[index] !== secArray[index]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;