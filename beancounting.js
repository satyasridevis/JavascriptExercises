// Eloquent javascript exercises
/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.*/
function countBs(string)
{
    let n = string.length;
    
    for(let i = 0; i < n; i++)
    {
        
        let char ="B";
        if(string[i] === char)
        {
            
             console.log(string[i])
        }
        else
        {
            return 0;
        }
    }
}

countBs("BBBBC");
