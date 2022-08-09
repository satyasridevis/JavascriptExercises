let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];
let passStudents = [];
for (let marks of scores) {
  if (marks >= 70) passStudents.push(marks);
}
console.log(passStudents);
console.log(passStudents.length);
