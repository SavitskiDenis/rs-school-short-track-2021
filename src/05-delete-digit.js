/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -1;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    max = Math.max(max, Number.parseInt(str.substr(0, i) + str.substr(i + 1), 10));
  }
  return max;
}

module.exports = deleteDigit;
