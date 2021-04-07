/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getMapOfCharsAndCountsFromStr (str) {
  const charsAndCount = new Map();
  [...str].forEach((c) => {
    const count = charsAndCount.has(c) ? charsAndCount.get(c) : 0;
    charsAndCount.set(c, count + 1);
  });
  return charsAndCount;
}

function getCommonCharacterCount (s1, s2) {
  const charsAndCountS1 = getMapOfCharsAndCountsFromStr(s1);
  const charsAndCountS2 = getMapOfCharsAndCountsFromStr(s2);
  let count = 0;
  charsAndCountS1.forEach((cCount, c) => {
    if (charsAndCountS2.has(c)) {
      count += Math.min(cCount, charsAndCountS2.get(c));
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
