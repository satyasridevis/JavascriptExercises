function one() {
  var one = 1;
  return one;
}
function two() {
  var two = 2;
  return two;
}
function plus() {
  let output = two() + one();
}
plus();

console.log(two(plus(one())));
