const takeUntil = function(array, callback) {
  const output = [];
  for (let ele of array) {
    if (callback(ele)) {
      return output;
    }
    output.push(ele);
  }

  return output;
};

module.exports = takeUntil;

/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

console.log(takeUntil(data1, x => x < 0));

assertArraysEqual(takeUntil([1,2,3,4,5,6,7,8,9,10], x => x > 10), [1,2,3,4,5,6,7,8,9,10]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]); */