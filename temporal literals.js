const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

  const failureItems = [];
  let i=0;
  while(i<arr)
  {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`);
    i++;
  }
  return failureItems;
}

const failuresList = makeList(3);
console.log(failuresList);