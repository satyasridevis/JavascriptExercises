function reverseString(str) {
 let i;
 let array = [];
 for(i=str.length-1;i>=0;i--)
 {
   array.push(str[i]);
   
 }
 
 //console.log(array);
 let regex = /,/gi;
 let newstr = array.join().replace(regex,"");

  console.log(newstr);
 

}

reverseString("hello");
reverseString("Howdy");
reverseString("Grettings from Earth");


