// A utility for adding a new problem - creates required folder and files.

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const problem = title => `// ${title} (add more of a description here)

function fnName() {}

module.exports = fnName;
`;

const test = title => `const fnName = require('./problem.js');

test('${title}: test condition', () => {
  expect(fnName()).toBe(true);
});
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("🤔   \x1B[34mWhat's the name of the problem? \033[37m", title => {
  const slug = encodeURIComponent(title.split(' ').join('-').toLowerCase());

  if (fs.existsSync(slug)) {
    console.error('🤬   \x1b[33mProblem/folder already exists!');
    process.exit(1);
  }

  fs.mkdirSync(path.join(__dirname, `/${slug}`));

  fs.writeFileSync(path.join(__dirname, `/${slug}/problem.js`), problem(title));
  fs.writeFileSync(path.join(__dirname, `/${slug}/solution.js`), '');
  fs.writeFileSync(path.join(__dirname, `/${slug}/test.js`), test(title));
  rl.close();
});

rl.on('close', () => {
  console.log('🎉   \x1b[32mFolder and files created!');
  process.exit(0);
});
