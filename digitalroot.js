const digitalRoot = (n) => {
  let sum = 0;
  //covert number to array
  let array = String(n)
    .split("")
    .map((num) => {
      return Number(num);
    });

  console.log(array);
  // sum of digits
  for (let i of array) {
    sum = sum + i;
  }

  // length of sum;

  let len = sum.toString().length;
  console.log(len);
  // if length of git is greater than 1
  // call digitRoot function else return sum
  let finalResult = len > 1 ? digitalRoot(sum) : sum;
  return finalResult;
};

console.log(digitalRoot(96));
console.log(digitalRoot(458));

//   let arr = string.split("");

//   let resultArray = arr.map((i, num, sum) => {
//     num = Number(i);
//   });
//   console.log(resultArray);

//   for (let i of resultArray) {
//     sum = sum + i;
//   }
//   console.log(sum);
