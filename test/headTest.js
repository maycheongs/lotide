const assert = require('chai').assert;
const head = require('../head');


describe ('#head', () => {
  it ('returns 1 for [1, 2, 3]', () => {
    const fnInput = [1,2,3];
    const expectedOutput = 1;
    assert.strictEqual(head(fnInput), expectedOutput)
  });

  it ('returns "5" for ["5"]', () => {
    const fnInput = ['5'];
    const expectedOutput = '5';
    assert.strictEqual(head(fnInput), expectedOutput)
  })
})