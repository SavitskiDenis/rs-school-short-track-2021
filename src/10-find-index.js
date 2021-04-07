/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let len = array.length - 1;
  let j;
  while (i <= len) {
    j = Math.floor((i + len) / 2);
    if (array[j] < value) {
      i = j + 1;
    } else if (array[j] > value) {
      len = j - 1;
    } else {
      return j;
    }
  }
  return -1;
}

module.exports = findIndex;
