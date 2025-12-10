// Task 5: User Profile JSON
// Convert object to JSON → Store in variable → Convert back to object.
// Example:
// let user = {name:"Aman", age:21, course:"JS"};

let user = {name:"Aman", age:21, course:"JS"};

const jsonString = JSON.stringify(user);
console.log(jsonString);

const obj = JSON.parse(jsonString);
console.log(obj);