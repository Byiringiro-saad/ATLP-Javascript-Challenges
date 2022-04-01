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

const primeNumbers = (arr) => {
  let filtered = new Array();

  arr.forEach((el) => {
    if (isPrime(el)) {
      filtered.push(el);
    }
  });

  return filtered;
};

console.log(primeNumbers([34, 56, 3, 56, 4, 343, 68, 56]));
