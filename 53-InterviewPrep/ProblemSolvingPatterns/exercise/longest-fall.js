// add whatever parameters you deem necessary
function longestFall(arr) {
    if(!arr.length)return 0
    
    let fall = 1
    let longest = 1
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            fall++
        }else{
            longest = Math.max(longest, fall)
            fall = 1
        }
    }
    return Math.max(longest, fall)
}

module.exports = longestFall