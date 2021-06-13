var num1 = 3;
var num2  = 5;
console.log(num1+num2);

var compare = num1 > num2;
console.log(typeof compare);


var listingPrice = 799;
var sellingPrice = 199;

var discount = ((listingPrice - sellingPrice)/listingPrice) * 100;
console.log("discount Percentage is :", discount );

displayDiscountPercent = Math.round(discount);
console.log(displayDiscountPercent +"% off");

var today = new Date();
var day = today.getDay();
var dayList = ["sunday", "monday","tuesday","wednesday","thursday", "friday","saturday"];   
console.log("Today is " + dayList[day] + ".");
