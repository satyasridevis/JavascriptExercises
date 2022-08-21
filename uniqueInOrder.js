function uniqueInOrder(str) {
  let arr = str.split("");
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
      console.log(true);
    }
  }
}

uniqueInOrder("AAAABBBCCDAAABB");
