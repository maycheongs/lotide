
const without = function(source, itemsToRemove) {
  let filtered = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    filtered = filtered.filter(item => item !== itemsToRemove[i]);
  }
  return filtered;
};

module.exports = without

/* assertArraysEqual(without(['gum', 'chocolate', 'sweets'], [1, 'gum']), ['chocolate', 'sweets']);
assertArraysEqual(without([1,2,3,3,4,4,5,6], [3,'2',6]), [1,2,4,4,5]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

 */

