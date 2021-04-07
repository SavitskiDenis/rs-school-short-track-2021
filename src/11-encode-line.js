/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  [...str].forEach((c, i) => {
    if (str[i + 1] === c) {
      count++;
    } else {
      result += `${count > 1 ? count : ''}${c}`;
      count = 1;
    }
  });
  return result;
}

module.exports = encodeLine;
