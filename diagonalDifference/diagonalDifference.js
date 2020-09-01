//Given a square matrix, calculate the absolute
//difference between the sums of its diagonals.

const matrix = [
  [1, 2, 1],
  [4, 1, 6],
  [2, 8, 9],
];

const matrix2 = [
  [0, 15, 2, 1],
  [8, 9, 8, 5],
  [3, 3, 16, 7],
  [12, 5, 22, 5],
];

function diagonalDifference(matrix) {
  const length = matrix.length - 1;
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let x = 0;
  let y = 0;
  let rightConditional = 0;
  for (x = 0; x <= length; x++) {
    for (y = 0; y <= length; y++) {
      rightConditional = x + y;
      if (x === y) {
        leftDiagonal += matrix[x][y];
      }
      if (rightConditional === length) {
        rightDiagonal += matrix[x][y];
        //rightDiagonal += matrix[x][y];
        //console.log(x + y, length - 1);
        //console.log(matrix[x][y]);
        //console.log(x, " ", y);
      }
    }
  }
  console.log(leftDiagonal);
  console.log(rightDiagonal);
  return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference(matrix2));

module.exports = diagonalDifference;
