const fs = require('fs');
const path = require('path');
const readline = require('readline');

const problem = title => `/**
* ${title}.
* @param {string} str - The argument passed.
* @returns {string} The return value.
*/
function fnName() {}

module.exports = fnName;
`;

const test = title => `const fnName = require('./problem.js');

test('${title}: function is defined', () => {
  expect(fnName).toBeDefined();
});
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("🤔   \x1B[34mWhat's the name of the problem? \033[37m", title => {
  const slug = encodeURIComponent(title.split(' ').join('-').toLowerCase());
  const location = path.join(__dirname, `/${slug}`);

  if (fs.existsSync(slug)) {
    console.error('🤬   \x1b[33mProblem/folder already exists!');
    process.exit(1);
  }

  fs.mkdirSync(location);
  fs.writeFileSync(`${location}/problem.js`, problem(title));
  fs.writeFileSync(`${location}/solution.js`, '');
  fs.writeFileSync(`${location}/test.js`, test(title));
  rl.close();
});

rl.on('close', () => {
  console.log('😁   \x1b[32mFolder and files created!');
  process.exit(0);
});
