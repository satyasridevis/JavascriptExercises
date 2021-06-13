function onetohun(n)
{
    if(n <= 0)
    {
        return [];
    }
    else{
        let array = onetohun(n - 1);
        array.push(n);
        return array;
        
    }

}
console.log(onetohun(100));
