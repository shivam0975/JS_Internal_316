// Write a function to count vowels in a string.

const vowel = ['a' , 'e' , 'i' , 'o' , 'u'];
const str = "Envolope";

let count =0;
for(const ch of str){
    if(vowel.includes(ch.toLowerCase())){
        count++;
    }
}

console.log("Vowel Count : " + count);