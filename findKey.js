
const findKey = (Object, callback) => {
  for (let key in Object) {
    if (callback(Object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

/* const list = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(list, x => x.stars === 2), "noma");
assertEqual(findKey(list, x => x.stars === 0), undefined);
 */