/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const zeroIndexex = new Set();
  matrix.forEach((arr) => {
    arr.forEach((value, index) => {
      if (value !== 0 && !zeroIndexex.has(index)) {
        sum += value;
      } else if (value === 0 && !zeroIndexex.has(index)) {
        zeroIndexex.add(index);
      }
    });
  });
  return sum;
}

module.exports = getMatrixElementsSum;
