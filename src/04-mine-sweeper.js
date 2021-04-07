/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getMinesCountAroundByPosition (matrix, i, j) {
  let count = 0;
  for (let a = -1; a < 2; a++) {
    for (let b = -1; b < 2; b++) {
      if ((i !== i + a || j !== j + b) && matrix[i + a] && matrix[i + a][j + b]) {
        count++;
      }
    }
  }
  return count;
}

function minesweeper(matrix) {
  const result = [];
  matrix.forEach((arr, i) => {
    result.push([]);
    arr.forEach((_, j) => {
      result[i][j] = getMinesCountAroundByPosition(matrix, i, j);
    });
  });
  return result;
}

module.exports = minesweeper;
