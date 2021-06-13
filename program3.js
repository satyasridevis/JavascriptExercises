// Write a javascript program to create  a new string adding " New!" in front of  a given string if the given string begins with "new!"  already then return the original string.
let str = "New!World";
let substr = str.substring(0,4);
console.log(substr);
substr.length;
console.log(substr.length);


if(substr === "New!")
{
    console.log(str);
}
else
{
    var str1 = "New!" + " " + str.substring(str.length - 5, str.length);
    console.log(str1);
    
}

