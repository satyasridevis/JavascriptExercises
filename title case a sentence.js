function titleCase(str) {
let newstr = str.split(" ");
console.log(newstr);
  
  for(let first of newstr)
  {
    let uppercase = first.charAt(0).toUpperCase() + first.slice(1);
    newstr = uppercase.toString();
    console.log(newstr);
  }

}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");