const assert = require('assert');
const map = require('../index');

it('should return thrice the given array', () => {
  const result = map([2, 4, 6, 8], (value) => {
    return value * 3;
  });

  assert.deepStrictEqual(result, [6, 12, 18, 24]);
});
