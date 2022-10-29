const digitalRoot = (n) => {
  let sum = 0;
  let array = String(n)
    .split("")
    .map((num) => {
      return Number(num);
    });
  console.log(array);
  //   let arr = string.split("");

  //   let resultArray = arr.map((i, num, sum) => {
  //     num = Number(i);
  //   });
  //   console.log(resultArray);

  //   for (let i of resultArray) {
  //     sum = sum + i;
  //   }
  //   console.log(sum);

  let result = array.forEach((i) => {
    sum = sum + i;
    console.log(sum);
  });
  console.log(result);
};

digitalRoot(16);
