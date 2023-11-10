// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let frequency1 = {}
    let frequency2 = {}

    while(int1){
        frequency1[int1 % 10] = (frequency1[int1 % 10] || 0) + 1
        int1 = Math.floor(int1 / 10)
    }
    while(int2){
        frequency2[int2 % 10] = (frequency2[int2 % 10] || 0) + 1
        int2 = Math.floor(int2 / 10)
    }
    for(let key in frequency1){
        if(frequency1[key] !== frequency2[key]){
            return false
        }
    }
    return true
}

module.exports = sameFrequency