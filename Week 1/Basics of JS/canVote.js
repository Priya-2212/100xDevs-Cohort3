function canVote(age) {
    if(age > 18){
        return true;
    } else{
        return false;
    }
}

let ans = canVote(7);
console.log(ans);

let ans2 = canVote(27);
console.log(ans2);