function generateHashtag(str) {
  let newarr = str.split(" ");

  let result = "#";

  let string = newarr.map((i) => i.charAt(0).toUpperCase() + i.slice(1));

  result = result + string.toString().replace(/,/g, "");

  if (result.length > 140) {
    return false;
  } else if (result.length == 0 || str == 0) {
    return false;
  } else {
    return result;
  }
}

console.log(generateHashtag("never give up"));
console.log(generateHashtag(""));
console.log(generateHashtag("never give     up"));
console.log(generateHashtag(" no"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

// let stringone = ":insertx: :insertx: :inserty: :inserty: :insertz: :insertz:";
// let newstring = stringone.replace(/:insertx:/g, "hello!");
// console.log(newstring);
