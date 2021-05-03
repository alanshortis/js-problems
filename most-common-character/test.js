const mostCommonChar = require('./problem.js');

test('Most Common Character: function is defined', () => {
  expect(mostCommonChar).toBeDefined();
});

test("Most Common Character: 'banana', a ", () => {
  expect(mostCommonChar('banana')).toBe('a');
});

test("Most Common Character: 'apple', p ", () => {
  expect(mostCommonChar('apple')).toBe('p');
});
