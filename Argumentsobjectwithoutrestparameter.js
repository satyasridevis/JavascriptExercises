function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    // console.log(arguments[k]);
    console.log(arr.indexOf(arguments[k]));

    if (arr.indexOf(num) === -1) {
      // console.log(arr.indexOf(num));
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
//console.log(containsAll(x, 6, 4, 9));
