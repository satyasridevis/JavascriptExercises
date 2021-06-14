const toCamelCase = (str) =>
{
    str = str.replace(/[_-]/g, " ");
    str = str.split(" ");
    let newarray = [];
    let words,fullsentence;

    for(let i=0; i<str.length;i++){
    let firstletter = str[0].charAt(0);
    let firstletterupperCase = str[0].charAt(0).toUpperCase();
    // comparing first letter of first word is uppercase or not 
    if(firstletter !== firstletterupperCase){
        let lastword = str[str.length -1].charAt(0).toUpperCase() + str[str.length - 1].slice(1);  
        let middleword = str[str.length -2].charAt(0).toUpperCase() +str[str.length-2].slice(1);
        return str[0] + middleword + lastword
    }
    else{
        words = str[i].charAt(0).toUpperCase() + str[i].slice(1) 
        newarray.push(words);
    }
    
}
newarray = newarray.join("");
return newarray
}

console.log(toCamelCase("the_stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("A-B-C"));




    

   
   // element = element.charAt(0).toUpperCase() + element.slice(1);
    
    //newarray.push(element)


//str = newarray.join("");
//console.log(str);

