# Espresso Runner (espresso-runner npm)

A lightweight testing framework for JavaScript applications (CLI + Web).

## Description

**Espresso Runner** is a minimal and intuitive, powerful JavaScript testing framework built from scratch. It provides an easy way to write and run tests in your JavaScript projects with zero configuration, offering a simple syntax inspired by popular testing frameworks. This library is designed to keep the testing process lean and efficient while adding a bit of style to your console output.

![espresso runner - testFn passed the test](https://i.imgur.com/3IlcU7N.png)

### Key Features

- Simple syntax for writing tests with `it` and `beforeEach`.
- Colorful and expressive test output using `chalk`.
- Supports both DOM-based tests (via `jsdom`) and regular function tests.
- Lightweight and minimal dependencies.
- Flexible enough to integrate into any project.

## Installation

To install `cols-espresso` as a dependency on the machine, run:

```bash
$ sudo npm install -g espresso-runner
```

## Usage

Once installed, you can add tests to your project by creating `.test.js` files. To run these tests, simply invoke the `espresso` command in your project root.

```shell
$ espresso
OR
$ esp
```

### Writing a Test

Here's an example of a test using `cols-espresso`:

```javascript
const assert = require('assert');

let numbers;
beforeEach(() => {
  numbers = [2, 4, 6, 8];
});

it('should return thrice the array', () => {
  const result = numbers.map((value) => value * 3);
  assert.deepStrictEqual(result, [6, 12, 18, 24]);
});
```

### Running Tests

Once you've written your tests in files that end with `.test.js`, run the following command from the root of your project to execute all tests:

```bash
espresso
```

You’ll see a colorful output that provides clear feedback about passed or failed tests.

### Example Test Output

```bash
Running ESPRESSO 🔥 on map.test.js
  ✔ Test Passed - should return thrice the array
  ✔ Test Passed - beforeEach is ran each time

Running ESPRESSO 🔥 on forEach.test.js
  ✔ Test Passed - should sum an array
  ✔ Test Passed - beforeEach is ran each time
```

### DOM Testing Example

With `cols-espresso`, you can also write DOM tests using `jsdom`:

```javascript
const assert = require('assert');
const render = require('./render'); // Assuming you have a render function

it('has a text input', async () => {
  const dom = await render('index.html');
  const input = dom.window.document.querySelector('input');
  assert(input);
});

it('shows a success message with a valid email', async () => {
  const dom = await render('index.html');
  const input = dom.window.document.querySelector('input');
  input.value = 'test@domain.com';

  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'));

  const h1 = dom.window.document.querySelector('h1');
  assert.strictEqual(h1.innerHTML, 'AWESOME 🔥');
});
```

---

## License

The Espresso project is licensed under the MIT License. See the [[LICENSE]](LICENSE) file for more information.

---

## Screenshoots

### espresso runner - testFn fails the test

![espresso - testFn fails the test](https://i.imgur.com/UiXilhr.png)

### espresso runner - testFn passed the test

![espresso - testFn passed the test](https://i.imgur.com/3IlcU7N.png)

### espresso runner - testWeb failed the test returning different message upon correct email

![espresso - testWeb failed the test returning different message upon submit than expected](https://i.imgur.com/4rdBu9L.png)

### espresso runner - testWeb failed the test returning different message upon incorrect email

![espresso - testWeb failed the test returning different message upon incorrect email](https://i.imgur.com/ALaMVUe.png)

## espresso runner - testWeb passed the test

![espresso - testWeb passed the test](https://i.imgur.com/q6dBlI9.png)
