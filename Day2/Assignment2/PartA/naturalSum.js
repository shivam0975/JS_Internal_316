//  Sum of first 10 natural numbers

let sum = 0;
const n = 10;

//Using Loops
let i = n;
while(i>0){
    sum+=i;
    i--;
}

console.log("Sum : " + sum);

// Using Formulae
console.log("Sum : " + (n * (n + 1) / 2));