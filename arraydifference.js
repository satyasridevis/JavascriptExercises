function arraydifference(a,b)
{
    let i,j,elem;
    let newarr;
    
    for(j=0;j<b.length;j++)
    {
        //console.log(b[j]);
        elem = b[j];
    }

    for(i=0;i<a.length;i++)
    {
        //console.log(a[i]);
        if(a[i] === elem)
        {
     
            newarr = a[i];
            console.log(newarr);
            newarr.indexOf(elem);
        }
    }
  
}
arraydifference([1,1,2],[1]);
