const numbersA = [1, 2, 3, 4];
const numbersB = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

// 1 + 2 + 3 + 4
console.log(numbersA.reduce(reducer)); // 10

// 5 + 1 + 2 + 3 + 4
console.log(numbersB.reduce(reducer, 5)); // 15