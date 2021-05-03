const reverseInteger = require('./problem.js');

test('Reverse Integer: function is defined', () => {
  expect(reverseInteger).toBeDefined();
});

test('Reverse Integer: positive number', () => {
  expect(reverseInteger(12345)).toBe(54321);
});

test('Reverse Integer: negative number', () => {
  expect(reverseInteger(-25)).toBe(-52);
});

test('Reverse Integer: trim leading zero', () => {
  expect(reverseInteger(50)).toBe(5);
});

test('Reverse Integer: single digit', () => {
  expect(reverseInteger(7)).toBe(7);
});
