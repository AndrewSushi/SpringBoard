function sortedFrequency(arr, num) {
    let first = findOccurrence(arr, num, 1);
    let last = findOccurrence(arr, num, 0);
    if (first == -1) {
        return -1;
    }
    return last - first + 1;
}

function findOccurrence(arr, num, isFirst){
    let low = 0
    let high = arr.length - 1
    let firstOccurrence = -1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (arr[mid] === num) {
            firstOccurrence = mid
            if(isFirst){
                high = mid - 1
            }else{
                low = mid + 1
            }
        } else if (arr[mid] < num) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return firstOccurrence
}

module.exports = sortedFrequency