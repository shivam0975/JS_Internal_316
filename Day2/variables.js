let a = 23;
const b = "abc";
var c = 78;
d = 88;

console.log("Intital Value Print")
console.log("a : " + a);
console.log("b : " + b);
console.log("c : " + c);
console.log("d : " + d);


console.log("\n\nChanged Values")

a = 55;
console.log("a : " + a);

try{b = 66}
catch(e){
    console.log("Assignment to constant variable. ")
}
c = 98;
console.log("c : " + c);

d = 69;
console.log("d : " + d);


console.log("\n\nRedeclaring Varialbes");
 
//let a = 26;      ##### Syntax Error
//const b = "abc";   #### Syntax Error

var c = 78;
console.log("c : " + c);
d = 88;
console.log("d : " + d);


console.log("\n\nType Checking");

let e = "abc";
let f = "";
let g = null;
let h;
console.log("e : " + e);
console.log("f : " + f);
console.log("g : " + g);
console.log("h : " + h);


console.log( "Type of e : " + typeof(e));
console.log("Type of undefined : " + typeof(undefined));
console.log("Type of null : " + typeof(null));
console.log("Type of e : " + typeof(d));