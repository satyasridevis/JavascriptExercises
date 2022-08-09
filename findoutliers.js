function findOutlier(integers) {
  const evenIntegers = integers.filter((n) => n % 2 == 0);
  //   console.log(evenIntegers.length);
  const oddIntegers = integers.filter((n) => n % 2 !== 0);
  //   console.log(oddIntegers.length);
  let output;
  if (evenIntegers.length == 1) {
    output = evenIntegers;
  } else {
    output = oddIntegers;
  }
  console.log(output);
  for (let outlier of output) {
    console.log(outlier);
  }
}

findOutlier([0, 1, 2]);
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
findOutlier([1, 2, 3]);
findOutlier([2, 6, 8, 10, 3]);
findOutlier([0, 0, 3, 0, 0]);
findOutlier([1, 1, 0, 1, 1]);
