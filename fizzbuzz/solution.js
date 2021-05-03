// Solution 1 - Nice and verbose.
function fizzBuzzVerbose(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Solution 2 - Smart, but hard to understand.
function fizzBuzzOneLine(n) {
  for (let i = 0; i < n; console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i));
}
