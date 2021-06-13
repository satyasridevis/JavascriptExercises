function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
for(let i =0; i<arr.length;i++)
{
     let avgalt = arr[i].avgAlt;
 // console.log(avgalt);
  rdistance = avgalt + earthRadius;

  
  //console.log(rdistance);
    
  rcube = Math.pow(rdistance,3);
  
  //console.log(rcube);
  beforesqrt = rcube /GM;
  
  //console.log(beforesqrt);
 sqrt = Math.sqrt(beforesqrt);
 //console.log(sqrt);

 let final = 2 * Math.PI * sqrt;
 final  = Math.round(final)


 delete arr[i].avgAlt;
 arr[i].orbitalPeriod = final;
 

}
console.log(arr);


}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])