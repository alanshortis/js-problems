// Solution 1 - Using array 'reverse' method.
function isPalindromeReverse(str) {
  return str.split('').reverse().join('') === str;
}

// Solutuon 2 - Using 'reduce'.
function isPalindromeReduce(str) {
  return str.split('').reduce((reversed, char) => char + reversed) === str;
}
