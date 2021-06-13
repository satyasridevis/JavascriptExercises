let A4 = "aaaaah";
let A2 = "aah";
let multipleA = /a{3,3}h/;
multipleA.test(A4);
multipleA.test(A2);
let result = A4.match(multipleA);
let results = A2.match(multipleA);
console.log(result,results);