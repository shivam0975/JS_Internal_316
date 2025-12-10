// Task 2: Filter Even Numbers
// let numbers = [1,2,3,4,5,6,7,8,9];
// Use filter() to return even numbers only.

let numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter( number => number%2===0);

console.log("Filtered Array : " + evenNumbers);
console.log(evenNumbers); // see changes when printed with + on string