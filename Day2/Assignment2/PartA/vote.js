// Function → Voting eligibility

function canVote(age){
    if(age>=18){
        return "Can Vote!"
    }
    return "Cannot Vote!"
}

console.log(canVote(15));