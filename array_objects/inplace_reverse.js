function inplace_reverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  console.log(originalArray);
}

let numbers = [1, 2, 3, 4, 5];
inplace_reverse(numbers);
