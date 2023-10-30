function insertionSort(arr) {
    let notSorted = 1
    while(notSorted){
        notSorted = 0
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < arr[i-1]){
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
                notSorted = 1
            }
        }
    }
    return arr
}

module.exports = insertionSort;