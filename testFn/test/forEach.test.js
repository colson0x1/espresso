const assert = require('assert');
const { forEach } = require('../index');

it('should sum an array', () => {
  const numbers = [2, 4, 6, 8, 4];

  let total = 0;
  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 24);
});
