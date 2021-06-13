function mutation(array)
{
let i,j;
let arr1 =[];
let arr2 =[];
let elementone, elementtwo;
arr1.push(array[0]);
arr2.push(array[1]);
//console.log(arr1,arr2);
for(i=0;i<arr1.length;i++)
{
    
    
    for(j=0;j<arr1[i].length;j++)
    {
        elementone = arr1[i][j];
        //console.log(elementone);
       // console.log(arr1[i][j]);
    }
    
}

for(i=0;i<arr2.length;i++)
{
    
    
    for(j=0;j<arr2[i].length;j++)
    {
        elementtwo = arr2[i][j];
       // console.log(arr2[i][j]);
       //console.log(elementtwo);
    }
    
}


if(elementone == elementtwo)
{
    console.log("true");

}
else
{
    console.log("false");
}
}


mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"])
mutation(["hello", "neo"])
mutation(["voodoo", "no"])
mutation(["ate", "date"])
mutation(["Tiger", "Zebra"])
mutation(["Noel", "Ole"])











