function checkCashRegister(price, cash, cid) {
    let change, values;
    
    change = cash - price;
    //console.log(change);
    
    let sumCID = 0;
    
    const currencyUnits = {
                "PENNY":0.01,
                "NICKEL":0.05,
                "DIME":0.1,
                "QUARTER":0.25,
                "ONE":1,
                "FIVE": 5,
                "TEN": 10,
                "TWENTY": 20,
                "ONE HUNDRED": 100
    }
    
    for(values of cid){
     sumCID += values[1];
     }
    
    sumCID = sumCID.toFixed(2);
    
    
    
    let changearray =[];
    if(change > sumCID)
    {
     return { status: "INSUFFICIENT_FUNDS" , change : changearray};
     }
        
     else if(change.toFixed(2) === sumCID) 
     {
      return {status: "CLOSED" , change : cid};
     }

     else{

        cid = cid.reverse();
        console.log(cid)
        

        for(values of cid)
        { 
            let temp = [values[0],0];
            while(change >= currencyUnits[values[0]] && values[1] > 0)
            {
                  temp[1] += currencyUnits[values[0]];
                  values[1] -= currencyUnits[values[0]];
                  change -=currencyUnits[values[0]];
                  change = change.toFixed(2);
             }

             if(temp[1] > 0)
             {
                 changearray.push(temp);
             }
        }
     }

     if(change > 0)
     {
         return {status: "INSUFFICIENT_FUNDS", change: []};
     }

     return {status:"OPEN", change: changearray};
    
    
    
    
    
    
    
}
    
    
   //console.log( checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
    console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    
    //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    
   //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    
    
    //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
