function bubbleSort(arr) {
    let notSorted = 1
    while(notSorted){
        notSorted = 0
        for(let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                notSorted = 1
            }
        }
    }
    return arr
}

module.exports = bubbleSort;
