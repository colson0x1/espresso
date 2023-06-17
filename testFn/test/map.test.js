const assert = require('assert');
const { map } = require('../index');

let numbers;
beforeEach(() => {
  // setup phase
  numbers = [2, 4, 6, 8];
});

it('should return thrice the array', () => {
  // exercise phase
  const result = map(numbers, (value) => {
    return value * 3;
  });

  // verify phase
  assert.deepStrictEqual(result, [6, 12, 18, 24]);

  // teardown phase
  numbers.push(4);
  numbers.push(4);
  numbers.push(4);
  numbers.push(4);
  numbers.push(4);
  numbers.push(4);
  numbers.push(4);
});

it('beforeEach is ran each time', () => {
  assert.strictEqual(numbers.length, 4);
});