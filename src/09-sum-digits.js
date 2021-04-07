/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  let str = n.toString();
  while (str.length > 1) {
    str = [...str]
      .reduce((sum, el) => Number.parseInt(sum, 10) + Number.parseInt(el, 10))
      .toString();
  }
  return Number.parseInt(str, 10);
}

module.exports = getSumOfDigits;
