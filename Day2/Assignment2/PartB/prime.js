// Write a function to check whether a number is prime or not.

function isPrime(num){
    for(let i=2 ; i*i<=num ; i++){
        if(num%i===0){
            return "Not Prime!";
        }
    }
    return "Prime";
}

console.log(isPrime(31));