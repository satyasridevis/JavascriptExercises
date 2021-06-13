function translatePigLatin(str) {

    let newword;
    let regexone = /[aeiou]/g;
    
    let result = str.match(regexone);
    for(let i=0; i<str.length;i++)
    {
        if(str[0] === result[i])
        {
          newword = str.concat("way")
        }
    }
    console.log(newword);
    
    
    
    }
    
    translatePigLatin("algorithm");
    translatePigLatin("eight")