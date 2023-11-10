// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let map = {}
    let sums = 0
    for(let element of arr){
        if(map[num - element]){
            sums++
        }
        map[element] = 1
    }
    return sums
}

module.exports = countPairs