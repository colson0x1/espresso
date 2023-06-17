# Espresso

A lightweight testing framework for JavaScript applications (CLI + Web).

## Description

Espresso is a simple and intuitive testing framework designed for JavaScript applications. It allows you to write and execute tests with ease, providing clear feedback on test results. With Espresso, you can ensure the quality and reliability of your codebase by easily running tests and validating expected behaviors.

![espresso - testFn passed the test](https://i.imgur.com/3IlcU7N.png)

## Features

- Support for running tests across multiple files
- BeforeEach and afterEach hooks for test setup and teardown
- Colorful and formatted console output for test results
- Support for testing browser-based JavaScript using jsdom
- Integration with Chalk library for customizable and stylized output

## Installation

To use Espresso in your project, follow these steps:

1. Clone the Espresso repository:

   ```bash
   git clone https://github.com/colson0x1/espresso.git
   ```

2. Navigate to the project directory:

   ```bash
   cd espresso
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Alias

You can use the alias `esp` for `espresso`.


## Usage

To run the tests using Espresso, follow these steps:

1. Open a terminal and navigate to the Espresso project directory.

2. Run the tests:

   ```bash
   esp
   ```

   This command will execute all the test files in the project and display the results in the console.

## Test Structure

Espresso follows a simple test structure that consists of test files containing individual test cases. Each test case is defined using the `it` function and should encapsulate a specific behavior or functionality to be tested.

Here's an example of a test case:

```javascript
it('should sum an array', () => {
  // Test logic goes here
});
```

Within the test case, you can use assertion libraries like `assert` to validate the expected behavior of your code.

## Contributing

Contributions to Espresso are welcome! If you encounter any issues, have suggestions, or would like to contribute code improvements, please create an issue or submit a pull request on the [Espresso GitHub repository](https://github.com/colson0x1/espresso).

## License

The Espresso project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Screenshoots

### espresso - testFn fails the test
![espresso - testFn fails the test](https://i.imgur.com/UiXilhr.png)

### espresso - testFn passed the test
![espresso - testFn passed the test](https://i.imgur.com/3IlcU7N.png)

### espresso - testWeb failed the test returning different message upon correct email
![espresso - testWeb failed the test returning different message upon submit than expected](https://i.imgur.com/4rdBu9L.png)

### espresso - testWeb failed the test returning different message upon incorrect email
![espresso - testWeb failed the test returning different message upon incorrect email](https://i.imgur.com/ALaMVUe.png)

## espresso - testWeb passed the test
![espresso - testWeb passed the test](https://i.imgur.com/q6dBlI9.png)

