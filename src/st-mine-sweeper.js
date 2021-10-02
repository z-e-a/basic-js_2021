import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = [];
  let mines = 0;
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      mines = 0;
      for (let di = -1; di < 2; di++) {
        for (let dj = -1; dj < 2; dj++) {
          if (
            i + di >= 0
            && i + di < matrix.length - 1
            && j + dj >= 0
            && j + dj < matrix[i].length - 1
            && !((di === 0) && (dj === 0))
          ) {
            // if(di !== 0 && dj !== 0)
            if (matrix[i + di][j + dj]) {
              mines++;
            }
          }
        }
      }
      result[i][j] = mines;
    }
  }
  return result;
}
