function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    console.log("changedue value is " + changeDue)
    let values;
    let newarray =[];
    let pennies,nickels,dimes,quarters,dollars,fives,tens,twenties,hundreds;
    /*const currencyUnits = {
                "PENNY":0.01,
                "NICKEL":0.05,
                "DIME":0.1,
                "QUARTER":0.25,
                "DOLLER":1,
                "FIVE": 5,
                "TEN": 10,
                "TWENTY": 20,
                "ONE HUNDRED": 100
    }*/
    let penny = 0.01,nickel = 0.05,dime = 0.1,quarter = 0.25,dollar = 1,five = 5,ten = 10,twenty = 20,oneHundred =100;
    
    
    
    for(values of cid){
      for(let comparevalues of values){
        if(typeof comparevalues === 'number'){
          //console.log(comparevalues)
          newarray.push(comparevalues);
          }
      }
    }
    console.log(newarray)
    
    for(let i =0;i<newarray.length;i++)
    {
       sum += newarray[i];
       
    }
    console.log(sum)
    
    console.log(pennies,nickels,dimes,quarters,dollars,fives,tens,twenties,hundreds);
     
    
    }
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    
    
    