
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

module.exports = letterPositions;

/* assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
assertArraysEqual(letterPositions("lighthouse in the house")[' '], undefined);
assertArraysEqual(letterPositions("hellothere").e, [1,7,9]); */