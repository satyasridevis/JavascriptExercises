function multiply(arr,n)
{
    if(n<=0)
    {
        return 1;
    }
    else{
        console.log(multiply(arr,n-1) * arr[n-1]);
    }
}

multiply([1,2,3,4,5],2);