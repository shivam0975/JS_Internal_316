// Create a function that checks if a number is Armstrong number or not.

const num = 153;
const num1 = 136;

function isArmstrong(num){
    const len=num.toString().length;
    let getNum = num ;
    let d;
    let sum=0;
    while(getNum>0){
        d=getNum%10;
        getNum= Math.floor(getNum/10);
        sum+=(Math.pow(d,len));
    }

    if(sum===num){
        return "Its Armstrong!"
    }
    return "Its not Armstrong!";

}

console.log(isArmstrong(num));
console.log(isArmstrong(num1))