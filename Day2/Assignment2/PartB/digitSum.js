// Write a program to print sum of digits of a number. (e.g., 123 → 6)

const num = 996;

let t = num;
let d;
let sum =0;
while(t>0){
    d = t%10;
    t = Math.floor(t/10);
    sum+=d;
}

console.log("Sum of Digits : " + sum);