const prompt = require("prompt-sync")();

const number = prompt("enter the number: ");
const result = Math.sqrt(number);
console.log(`the square root of ${number} is ${result}`);
