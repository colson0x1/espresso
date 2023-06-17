const fs = require('fs');
const path = require('path');
const importChalk = async () => {
  try {
    const chalk = await import('chalk');
    return chalk.default;
  } catch (error) {
    console.error('Failed to import chalk:', error);
    process.exit(1);
  }
};

const forbiddenDirs = ['node_modules'];
class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTests() {
    for (let file of this.testFiles) {
      const chalk = await importChalk();
      const testSuccess = chalk.hex('#1DB954');
      const testFailed = chalk.hex('#E50914');

      const espresso = chalk.hex('#FFA500');

      console.log(
        `${chalk.bold(
          `${chalk.grey('Running')} ${espresso('ESPRESSO')} 🔥 ${chalk.grey(
            'on'
          )} ${chalk.grey(file.shortName)}`
        )}`
      );

      const beforeEaches = [];
      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };

      global.it = (desc, fn) => {
        beforeEaches.forEach((func) => func());
        try {
          fn();
          console.log(
            testSuccess(`\t(✔) ${chalk.bold('Test Passed')} - ${desc}`)
          );
        } catch (err) {
          const message = err.message.replace(/\n/g, '\n\t\t');
          console.log(
            testFailed(`\t(✘) ${chalk.bold('Test Failed')} - ${desc}`)
          );
          console.log(`\t${message}`);
        }
      };

      try {
        require(file.name);
      } catch (err) {
        console.log(
          testFailed(
            `(✘) ${chalk.bold('\tTest Failed')} - Error Loading File ${
              file.name
            }`
          )
        );
        console.log(testFailed(err));
      }
    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filepath, shortName: file });
      } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);

        files.push(...childFiles.map((f) => path.join(file, f)));
      }
    }
  }
}

module.exports = Runner;
