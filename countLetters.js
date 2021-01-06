const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❗Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters =  function(sentence) {

  let count = {};
  const noSpaces = sentence.split(' ').join('');

  for (let letter of noSpaces) {
    count[letter] ? count[letter] += 1 : count[letter] = 1;
  }

  return count;
};


console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house")['h'], 4);