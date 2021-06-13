function startsWith(string,checkstring)
{
    if(string.substr(0,checkstring.length) === checkstring)
    {
       console.log("true");
    }
    else
    {
        console.log("false");
    }
}

startsWith("hello world", "l");
