const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
  return input
    .map(val => val
      .filter(val2 => val2 % 5 == 0 && Number(val2) === val2)
      .map(val3 => Math
        .pow(2, val3)));
}
console.log(divisibleByFiveTwoToThePower([
  ['one', 'two', 'five'],
  ['5', '10', '15'],
  [5]
]));
