function addTogether() {
  
    if(arguments.length === 2)
    {
      let first = arguments[0];
      let second = arguments[1];
      if(typeof first === "number" && typeof second === "number")
      {
           return first + second;
      }
      else
      {
        return undefined;
      }
    }
    else if(arguments.length === 1)
    {
        let first = arguments[0];
      if(typeof first === "number")
      {
        function secondone(second)
        {
          if(typeof second === "number")
          {
            return first + second;
          }
          else
          {
            return undefined;
          }
        }
        return secondone;
      }    
      else
      {
        return undefined;
      }
    }
    else
    {
      return undefined;
    }
  }
  
  console.log(addTogether(2,3));
  console.log(addTogether(5)(7))
  console.log(addTogether("http://bit.ly/IqT6zt"));
  console.log(addTogether(2, "3"))
  console.log(addTogether(2)([3]))
  console.log(addTogether(3,4));