const persistence = (n) => {
  count = 0;
  let times = 1,
    array;
  let numberLength = n.toString().length;
  array = String(n)
    .split("")
    .map((num) => Number(num));
  console.log(array);

  // numberLength > 1 ? array.map((i) => (times *= i)) : "0";
  console.log(times);

  // if (numberLength === 1) {
  //   return 0;
  // } else if (numberLength > 1) {
  //   array = String(n)
  //     .split("")
  //     .map((num) => {
  //       return Number(num);
  //     });
  //   console.log(array);
  //   for (let i of array) {
  //     times *= i;
  //   }
  //   // console.log(times);
  //   let len = times.toString().length;
  //   let finalResult = len > 1 ? persistence(times) : times;
  // }
  console.log(++count);
};

persistence(48);
// persistence(39);
// persistence(25);
// persistence(999);
