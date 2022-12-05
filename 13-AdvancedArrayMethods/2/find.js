const nums = [0, 0, 0, 1, 2, 5, 7, 8, 9, 12, 13, 15, 37, 40]

const GTTen = nums.find(function(num){
    return num > 10;
})

const GTTenIndex = nums.findIndex(function(num){
    return num > 10;
})

function createArray(num){
    const nums = [];
    for(let i = 0; i < num; i++){
        nums.push(Math.floor(Math.random() * 101));
    }
    return nums.sort(function(a, b){
        return a - b;
    });
}

let scores = createArray(80);

function partition(arr, pivot){
    const pivotIdx = arr.findIndex(function(num){
        return num > pivot;
    })
    const left = arr.slice(0, pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left, right]
}

let partitioned = partition(scores, 70)

function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i];
        }
    }
}

function myFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}

const scoreGT = myFind(scores, function(score){
    return score > 90;
})

const scoreGTIdx = myFindIndex(scores, function(score){
    return score > 90;
})