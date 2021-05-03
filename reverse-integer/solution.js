// Using array 'reverse' and math sign methods.
function reverseInteger(n) {
  const sign = Math.sign(n);
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * sign;
}
