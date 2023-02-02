let arrayElements = [false, 1, 0, 1, 2, 0, 1, 0, 0, 3, 'a'];
let count = 0;

for (element of arrayElements) {
    if (element === 0) {
        count += 1;


    }






}
console.log(count)

let stringArrays = arrayElements.join(",")

let modifiedString = stringArrays.replace(/0/g, "")

console.log(stringArrays)
console.log(modifiedString)

console.log(modifiedString.split(" "))


