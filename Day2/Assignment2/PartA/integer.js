// Positive/Negative/Zero

const num = -54.45;


//Using Conditional Statement
num>0 ? console.log("Positive") : (num===0 ? console.log("Zero") : console.log("Negative"));

//Using Math.sign()
const sign = Math.sign(num);
if (sign === 1) {
    console.log("Positive");
} else if (sign === -1) {
    console.log("Negative");
} else if (sign === 0) {
    console.log("Zero");
} else {
    console.log("Invalid input (NaN).");
}

// JavaScript implements the IEEE 754 standard for floating-point numbers, 
// which includes both positive zero (+0 or 0) and negative zero (-0). 
// While +0 === -0 and +0 == -0 both evaluate to true, 
// Object.is() can distinguish between them