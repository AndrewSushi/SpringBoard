// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let sum = 0
    for(let num of arr){
        sum += num
    }

    let leftSum = 0
    for(let i = 0; i < arr.length; i++){
        if(leftSum === sum - leftSum - arr[i]){
            return i
        }
        leftSum += arr[i]
    }
    return -1
}

module.exports = pivotIndex