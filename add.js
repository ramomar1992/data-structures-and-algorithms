const totalSumCSV = (str) => {

  // Solution code here...
  return total = str.split(',').reduce((accum, elem) => {
    return accum += parseInt(elem); // accum = 3
  }, 0);

};

console.log(totalSumCSV('147'));