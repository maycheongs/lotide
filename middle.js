


const middle = array => {
  let result = [];

  let midIndex = (array.length - 1) / 2;
  if (Math.floor(midIndex)) {
    if (Number.isInteger(midIndex)) {
      result.push(array[midIndex]);
    } else {
      result.push(array[Math.floor(midIndex)], array[Math.ceil(midIndex)]);
    }
  } return result;
};


module.exports = middle;

