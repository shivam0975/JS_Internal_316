// Write a function to reverse a string without using reverse().

const str = "SHIVAM";

let reversed = "";
for(let i=str.length -1 ; i>=0 ; i-- ){
    reversed+=str.charAt(i);
}

// for(const ch of str){
//     reversed=ch + reversed;
// }

console.log("Reversed String : " + reversed);