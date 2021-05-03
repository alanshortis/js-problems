function mostmostCommon(str) {
  const charMap = {};
  const mostCommon = { count: 0, char: '' };

  for (const char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (const char in charMap) {
    if (charMap[char] > mostCommon.count) {
      mostCommon.count = charMap[char];
      mostCommon.char = char;
    }
  }

  return mostCommon.char;
}
