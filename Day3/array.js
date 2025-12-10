function fun(num){
    return num*2;
}

let ch = fun(72);

let array = [1 , 2, 3 , 4, "apple" , "banana" , ch];
console.log(array);


// 1. Create an array of 5 fruits and print each fruit using for loop.
// 2. Add "Papaya" at the end using push() and remove last element using pop().
// 3. Add "Kiwi" at the beginning using unshift() and remove first using shift().
// 4. Check if "Mango" exists in array using includes().
// 5. Find index of "Banana" using indexOf().

const fruits = ["Apple" , "Banana" , "Mango" , "Guava" , "Grapes"];

console.log("\n\nTask 1")
for( const fruit of fruits ){
    console.log(fruit);
}

console.log("\n\nTask 2")
fruits.push("Papaya")
console.log(fruits);
fruits.pop();
console.log(fruits)

console.log("\n\nTask 3")
fruits.unshift("Kiwi");
console.log(fruits)

fruits.shift();
console.log(fruits)


console.log("\n\nTask 4")
console.log(fruits.includes("Mango"))

console.log("\n\nTask 5")
console.log(fruits.indexOf("Banana"));


// Higher Oreder Function

// 6. Create an array of numbers [2, 4, 6, 8] and return a new array with each value doubled using map().
// 7. From numbers [10, 25, 30, 5, 60] filter values greater than 20.
// 8. Find sum of numbers [1,2,3,4,5] using reduce().

// map()
console.log("\n\nTask 6")
const nums = [2 , 4, 6 , 8];
const doubled = nums.map(num => num*2);
console.log(doubled)

// filter()
console.log("\n\nTask 7")
const nums1 = [10 , 25 , 30 , 5 , 60];
const result = nums1.filter(n => n>20);
console.log(result);

//reduce 
// array.reduce((accumulator , currentValue) => {operations} , intialValue)
console.log("\n\nTask 8")
const nums2 = [ 1, 2 , 3, 4, 5];
const sum = nums2.reduce((acc , curr) => acc+curr , 0);
console.log(sum);


// Objects

// 9. Create an object student with name, age & course properties. Print them.
// 10. Add a new property city in the object.
// 11. Remove age property using delete.
// 12. Loop the object using for…in and print key-value pairs.

console.log("\n\nTask 9")
let student = {
    name : "Ram",
    age : 23,
    course : "CSE"
}

console.log("Name : " + student.name);
console.log("Age : " + student.age);
console.log("Course : " + student['course']); // Object.[] is used for dynamic acess


console.log("\n\nTask 10")
student.city = "Prayagraj";
console.log(student);

console.log("\n\nTask 11")
delete student.age;
console.log(student);


console.log("\n\nTask 12")
for(key in student){
    console.log(`Key : ${key} , Value : ${student[key]}`) //Dynamic Accessing
}


//Nested Object


// 13. Create an object person with nested address {city, country}. Print city.
// 14. Change the city to "Mumbai" inside nested object.

console.log("\n\nTask 13")
const person = {
    name : "Shayam",
    address : {city : "Prayagraj" , country : "India"}
}
console.log(person.address.city)


console.log("\n\nTask 14")
person.address.city = "Mumbai";
console.log(person.address.city);

// JSON and Objects

// 15. Convert an object into JSON string using JSON.stringify().
// 16. Convert a JSON string back to object using JSON.parse().

console.log("\n\nTask 15")
let jsonString = JSON.stringify(student);
console.log(jsonString);

console.log("\n\nTask 16")
let obj = JSON.parse(jsonString);
console.log(obj)

