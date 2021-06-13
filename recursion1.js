function multiply(arr,n)
{
    var product = 1;
    for(var i = 0; i < n; i++)
    {
        product *= arr[i];
        console.log(product );
    }
    return product;
}
multiply([1,2,3,4,5],3);