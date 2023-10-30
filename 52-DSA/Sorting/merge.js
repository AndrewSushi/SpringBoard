function merge(arr1, arr2) {
    let result = []
    let l = 0
    let r = 0
    while(l < arr1.length && r < arr2.length){
        if(arr1[l] < arr2[r]){
            result.push(arr1[l++])
        }else{
            result.push(arr2[r++])
        }
    }
    result.push(...arr1.slice(l))
    result.push(...arr2.slice(r))
    return result
}

function mergeSort(arr) {
    if(arr.length < 2){return arr}
    const mid = Math.floor(arr.length / 2)
    const left = (arr.slice(0, mid))
    const right = (arr.slice(mid))

    return merge(mergeSort(left),  mergeSort(right))
}

module.exports = { merge, mergeSort};