let nums = [5, 10, 15, 20, 25, 30]

nums.reduce(function(acc, num){
    return acc + num;
})

const words = ['hello', 'my', 'name', 'is', 'andrew'];
const result = words.reduce(function(acc, nextWord){
    console.log(acc, nextWord);
    return acc + nextWord;
})

const finalsGrades = [45, 87, 58, 97, 15, 74, 78, 98, 1];
const finals2 = [95, 27, 59, 95, 75, 34, 75, 26, 59, 90, 12, 13, 51, 2]

const minFinal = finalsGrades.reduce(function(min, nextScore){
    // if(nextScore < min){
    //     return nextScore;
    // }else{
    //     return min;
    // }
    return nextScore < min ? nextScore : min;
})

const maxFinal = finalsGrades.reduce(function(max, nextScore){
    // if(nextScore > max){
    //     return nextScore;
    // }else{
    //     return max;
    // }
    return nextScore > max ? nextScore : max;
})

const minFinalsAll = finals2.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
}, minFinal)