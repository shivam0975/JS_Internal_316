// Print the Fibonacci series up to n terms.

const n = 12;

let a = 1;
let b=1;
let result = "1 ,";
for(let i=2 ; i<=n ; i++){
    let tmp = b;
    b = a+b;
    a=tmp;
    result+=`${a} ,`
}

console.log("Fibonacci Series : " + result);