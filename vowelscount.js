const getCount = (str) => {
  let vowelsCount = 0;
  str = str.split("");
  console.log(str)
  let vowels = ["a","e","i","o","u"];
  for(let i=0;i<str.length;i++)
    {
      let findvowels = vowels.indexOf(str[i])
      
      if(findvowels !== -1)
      {
          console.log(str[i])
          vowelsCount++;
        
      }
    }
    
console.log(vowelsCount)
    
    
  
  
}


    


getCount("abracadabra");

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }