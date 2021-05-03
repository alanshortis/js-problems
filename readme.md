# JavaScript problems

> Data Structures and Algorithms in JavaScript, for practice or interview prep. Very in progress.

## Set up

Install dependencies:

- [Node.js](https://nodejs.org/en/), which includes NPM.
- [Jest](https://jestjs.io/), installed globally: `npm i -g jest`.

## Solving problems

Within each problem's folder, there are three files:

- **problem.js** contains a brief description of the problem to be solved, and an empty function in which to add your solution.
- **test.js** contains Jest tests to verify that your solution does what's expected. It's a good idea to read the tests before starting to get a better idea of the expectations rather than making assumptions from the description.
- **solution.js** contains at least one solution to the problem. Try not to look in here until you've written your own solution or you're really stuck.

## Running tests

To verify that your solutions do what's expected, tests are run against `problem.js` for each problem. Tests will fail for each problem until a passing solution is added.

- To run tests for a specific problem on save: `jest <folder name>/test.js --watch`.
- To run tests for all problems: `jest`.

## Adding problems

To add a new problem to the repo, there is a small CLI to help create the required folder and files with a barebones function and test. Run `node new-problem.js` and follow the prompts.

## Problems

| Problem               | Description                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Common Character | Write a function to determine which character in a given string appears the most times.                                                             |
| Palindrome            | Write a function to determine if a given string is a palindrome. A palindrome is a word or phrase that can be read the same forwards and backwards. |
| Reverse Integer       | Write a function that reverses an integer while retaining its sign (positive/negative).                                                             |
