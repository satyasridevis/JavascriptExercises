function stringIncrementor(str) {
  let regex = /\d+/g;
  var matches = str.match(regex);
    console.log(matches);
    


  if (matches) {
    for (let n of matches) {
      let integer = parseInt(n);
      console.log(str + integer++);
    }
  } else {
    console.log(str + 1);
  }
}

stringIncrementor("foo34");
//stringIncrementor("foo");
