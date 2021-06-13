var myGlobal = 10;

function fun1()
{
    oopsGlobal = 5;
}

function fun2()
{
    var output = "hello";
    if (typeof myGlobal != "undefined") 
    {
        output += +myGlobal;
    }
    if (typeof oopsGlobal != "undefined") 
    {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2();