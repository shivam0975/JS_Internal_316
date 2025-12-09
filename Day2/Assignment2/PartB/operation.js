// Create a function which takes *two numbers & an operator (+, -, , /) and performs operation.

function operation(num1 , num2 , op){
    switch (op){
        case '+' : return num1 + num2;
        case '-' : return num1 - num2;
        case '*' : return num1 * num2;
        case '/' : return Math.floor(num1 / num2);
        default : return "Invalid Input!"
    }
}

console.log(operation(20 , 40 , '*'));