//Given a square matrix, calculate the absolute
//difference between the sums of its diagonals.

const matrix = [
  [1, 2, 1],
  [4, 1, 6],
  [2, 8, 9],
];

function diagonalDifference(matrix) {
  const length = matrix.length;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (x === y) {
        leftDiagonal += matrix[x][y];
        //console.log(x);
      } else if (x + y === length - 1) {
        console.log(true);
        //rightDiagonal += matrix[x][y];
        //console.log(x + y, length - 1);
        //console.log(matrix[x][y]);
        //console.log(x, " ", y);
      }
      console.log(x, " ", y);
    }
  }
  //console.log(leftDiagonal);
  //console.log(rightDiagonal);
}

diagonalDifference(matrix);

module.exports = diagonalDifference;
