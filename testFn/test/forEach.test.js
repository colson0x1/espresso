const assert = require('assert');
const { forEach } = require('../index');

let numbers;
beforeEach(() => {
  // setup phase
  numbers = [2, 4, 6, 8, 4];
});

it('should sum an array', () => {
  // exercise phase
  let total = 0;
  forEach(numbers, (value) => {
    total += value;
  });

  // verify phase
  assert.strictEqual(total, 24);

  // teardown phase
  numbers.push(5);
  numbers.push(5);
  numbers.push(5);
  numbers.push(5);
  numbers.push(5);
  numbers.push(5);
  numbers.push(5);
});

it('beforeEach is ran each time', () => {
  assert.strictEqual(numbers.length, 5);
});