function titleCase(str) {
   let newstr,uppercase;
   let newArray =[];
   let array = str.split(" ");//convert string to array
   console.log(array);// [ 'sHoRt', 'AnD', 'sToUt' ]
   for(let word of array)
   {
     uppercase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
     //zero index character made Uppercase and remind index to lowercase
     newArray.push(uppercase);// [ 'Short', 'And', 'Shout' ]
     const regex = /,/ig;
     // regular expression to remove commas and replace space " "
     newstr = newArray.join().replace(regex," ");
    }
   console.log(newstr);// Output : Short And Stout
}
  titleCase("I'm a little tea pot");
  titleCase("sHoRt AnD sToUt");
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");