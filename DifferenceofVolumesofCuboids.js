function findDifference(a, b) {
  let volumeOfA = 1,
    volumeOfB = 1;

  let diffVolumeCuboid;
  for (let i of a) {
    volumeOfA *= i;
  }
  for (let i of b) {
    volumeOfB *= i;
  }

  if (volumeOfB > volumeOfA) {
    let diffVolumeCuboid = volumeOfB - volumeOfA;
    return diffVolumeCuboid;
  } else {
    let diffVolumeCuboid = volumeOfA - volumeOfB;
    return diffVolumeCuboid;
  }
}

findDifference([3, 2, 5], [1, 4, 4]);
findDifference([9, 7, 2], [5, 2, 2]);
findDifference([11, 2, 5], [1, 10, 8]);
