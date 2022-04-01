const object_keys = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const big = arr[i].split(",");
    const small = big[0].split(" ");

    obj[small[0]] = { second_name: small[1], age: big[1] };
  }

  console.log(obj);
};

const arr = [
  "Patrick wayne, 30",
  "lil wayne, 32",
  "Eric mimi, 21",
  "Dodos deck, 21",
  "Alien Dwine, 22",
];

object_keys(arr);
