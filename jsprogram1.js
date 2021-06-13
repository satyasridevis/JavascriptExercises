function checkTwoNumber(a,b)
{
    var c = a + b;
    if((a === 100 || b === 100) || (c === 100))
    {
        console.log("true");
    }
    else 
    {
        console.log("false");
    }
}

checkTwoNumber(100,100);