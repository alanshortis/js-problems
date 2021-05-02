const isPalindrome = require('./problem.js');

test('Palindrome: function is defined', () => {
  expect(isPalindrome).toBeDefined();
});

test("Palindrome: 'level' is a palindrome", () => {
  expect(isPalindrome('level')).toBe(true);
});

test("Palindrome: 'uneven' is not a palindrome", () => {
  expect(isPalindrome('uneven')).toBe(false);
});
