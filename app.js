const findMax = (matrix) => {
  // Solution code here...
  return matrix.reduce((acc, val) => {
    let max = val.reduce((acc2, val2) => acc2 > val2 ? acc2 : val2, 0);
    return acc > max ? acc : max;
  }, 0);
};
console.log(findMax([
  [13, 24, 24, 2],
  [2, 5, 6],
  [2, 3]
]));
