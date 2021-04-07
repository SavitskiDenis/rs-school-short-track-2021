/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr.filter((el) => el !== -1).sort((a, b) => {
    let result = 0;
    if (a < b) {
      result = -1;
    } else if (a > 1) {
      result = 1;
    }
    return result;
  });
  const result = [];
  arr.forEach((el, i) => {
    if (el !== -1) {
      result[i] = sorted.shift();
    } else {
      result[i] = el;
    }
  });
  return result;
}

module.exports = sortByHeight;
