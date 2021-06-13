//"use strict";
//x = 10;

/*function timesFive(a)
{
    return a * 5;
}
var b = timesFive(5);
console.log(b); */


//Understanding Undefined Value returned from a Function
var sum = 0;
function addSum(num) {
  sum += num;

}
addSum(3);
console.log(sum);



function trueOrFalse(wasThatTrue)
{
    if (wasThatTrue)
    {
        return "Yes, that was true";

    }
       return "No, that was false";
}

trueOrFalse();