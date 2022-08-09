var isSquare = function (n) {
  var value = Math.sqrt(n);
  if (value * value == n) return true;
  else return false;
};

const isSquare = (number) => {
  let value = Math.sqrt(number);
  return value * value == number;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
