


const map = function(array, callback) {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

module.exports = map;

/* const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map([1,2,3,4,5,6], num => num * 2), [2,4,6,8,10,12]); */