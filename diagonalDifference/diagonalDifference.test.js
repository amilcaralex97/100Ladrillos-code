const diagonalDifference = require("./diagonalDifference");

const matrix1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const matrix2 = [
  [0, 15, 2, 1],
  [8, 9, 8, 5],
  [3, 3, 16, 7],
  [12, 5, 22, 5],
];
test("\n11 2 4 \n4 5 6 \n10 8 -12 \n difference equals to 15", () => {
  expect(diagonalDifference(matrix1)).toBe(15);
});

test("\n0 15 2 1\n8 9 8 5\n3 3 16 7\n12 5 22 5\ndifference equals to 15", () => {
  expect(diagonalDifference(matrix2)).toBe(6);
});
