// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let map = {}
    for(let elementIdx in arr1){
        map[arr1[elementIdx]] = arr2[elementIdx] || null
    }
    return map
}

module.exports = twoArrayObject