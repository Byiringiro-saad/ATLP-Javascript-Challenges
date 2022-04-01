const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
  }
  return true;
};

function custom_sorting(arr) {
  let newArr = arr;
  for (var i = 0; i < newArr.length; i++) {
    for (var j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        var swap = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = swap;
      }
    }
  }
  return newArr;
}

const arr = [1, 3, 5, 7, 8, 9, 45, 68, 57];
console.log(custom_sorting(arr));
