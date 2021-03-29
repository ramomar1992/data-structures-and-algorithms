const replaceZeros = (string) => {
  // Solution code here...
  let strArr = string.split('');
  let newStr = strArr.map(letter => {
    if (/0/.test(letter)) {
      return 'zero'
    } else {
      return letter;
    }
  });
  return newStr.join('');
}

console.log(replaceZeros('301 is s0 much fun!'));
