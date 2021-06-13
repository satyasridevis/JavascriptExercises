function largestOfFour(arr) {
    let maxnum = Number.NEGATIVE_INFINITY;
    let i,j;
    let newArr = [];
    
    for(i of arr)
    {
      console.log(i);
      for(j of i)
      {
        console.log(j);
        if(j > maxnum)
        {
          maxnum = j;
         
        }
      }
      console.log(maxnum);
      newArr.push(maxnum);
      console.log(newArr);
      
    }
    
      
    
  }
     
  
largestOfFour([[4, 5, 1, 9],[4, 5, 1, 39]]);
