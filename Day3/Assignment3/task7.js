// Task 7: Transform Names Using map()
// Input:
// ["ram","shyam","mohan"]
// Output:
// ["RAM","SHYAM","MOHAN"]

let names = ["ram","shyam","mohan"];

const transformed = names.map(name => name.toUpperCase());

console.log("Transformed Names : ");
console.log(transformed);