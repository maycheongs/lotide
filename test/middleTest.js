const assert = require('chai').assert;
const middle = require('../middle');


describe ('#middle', () => {
  it ('should return an empty array when passed [1]', () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput)
  });
  
  it ('should return an empty array when passed [1,2]', () => {
    const input = [1,2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput)
  });
  it ('should return [2] when passed [1,2,3]', () => {
    const input = [1,2,3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput)
  });
  it ('should return [2,3] when passed [1,2,3,4]', () => {
    const input = [1,2,3,4];
    const expectedOutput = [2,3];
    assert.deepEqual(middle(input), expectedOutput)
  });
  
  
})

