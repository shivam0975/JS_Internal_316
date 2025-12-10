// Task 1: Student Marks
// Create an array of marks → calculate average using reduce().
// let marks = [80, 90, 70, 85, 95];


let marks = [80, 90, 70, 85, 95];

const sum = marks.reduce((acc , curr) => acc+curr , 0);
const average = sum/marks.length;

console.log("Average Mark : " + average)