    var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

console.log(contacts.length);

function lookUpProfile(name, prop)
{
// Only change code below this line

for(var i = 0; i < contacts.length; i++)
{
  
   
  if(contacts[i].firstName === name)    
  {  
      if(prop in contacts[i])
      {
       console.log(contacts[i][prop]);
      }
      else
     {
     console.log("no such property");
     }

}
}
console.log("no such contacts");
}

lookUpProfile("Akira", "likes");