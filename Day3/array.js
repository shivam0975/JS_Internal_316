function fun(num){
    return num*2;
}

let ch = fun(72);

let array = [1 , 2, 3 , 4, "apple" , "banana" , ch];
console.log(array);

const fruits = ["Apple" , "Banana" , "Mango" , "Guava" , "Grapes"];

for( const fruit of fruits ){
    console.log(fruit);
}


fruits.push("Papaya")
console.log(fruits);
fruits.pop();
console.log(fruits)

fruits.unshift("Kiwi");
console.log(fruits)

fruits.shift();
console.log(fruits)



console.log(fruits.includes("Mango"))
console.log(fruits.indexOf("Banana"));


// Higher Oreder Function

// map()
const nums = [2 , 4, 6 , 8];
const doubled = nums.map(num => num*2);
console.log(doubled)

// filter()
const nums1 = [10 , 25 , 30 , 5 , 60];
const result = nums1.filter(n => n>20);
console.log(result);

//reduce 
// array.reduce((accumulator , currentValue) => {operations} , intialValue)
const nums2 = [ 1, 2 , 3, 4, 5];
const sum = nums2.reduce((acc , curr) => acc+curr , 0);
console.log(sum);

let student = {
    name : "Ram",
    rollNo : 23
}
let jsonString = JSON.stringify(student);
let obj = JSON.parse(jsonString);
console.log(jsonString);
console.log(obj)

