// Task 6: Find Max Number in Array
// let arr = [10, 40, 25, 80, 15];
// Without using built-in max functions.

let arr = [10, 40, 25, 80, 15];

const max = arr.reduce((acc , curr) => {
    if(acc<curr){
        return curr;
    }
    return acc;
}) //By default value of accumlator arr[0] first element of Array through which reduce is called

console.log(max);

console.log("\n\nReduce without inital Value")
console.log(arr.reduce((acc , curr) => acc));

console.log("\n\nReduce with inital Value")
console.log(arr.reduce((acc , curr) => acc , 0));