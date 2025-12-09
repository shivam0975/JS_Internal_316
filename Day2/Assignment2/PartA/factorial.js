// Function → Factorial

function Fact(num){
    if(num===1 || num===0){
        return 1;
    }

    return num*Fact(num-1);
}

console.log(Fact(12));