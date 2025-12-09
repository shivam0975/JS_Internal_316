// Write a function that returns minimum and maximum from an array.

const arr = [3, 7, 2, 8, 5];

// function minimax(arr){
//     return [Math.max(...arr) , Math.min(...arr)];
// }


function minimax(arr){
    let max = arr[0]; 
    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max , min];
}

console.log(`Max : ${minimax(arr)[0]} \nMin : ${minimax(arr)[1]}`)

