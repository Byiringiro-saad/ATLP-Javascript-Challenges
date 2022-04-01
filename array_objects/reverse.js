function reverseArr(input) {
  let ret = new Array();
  for (let i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

console.log(reverseArr([3, 5, 7, 8]));
