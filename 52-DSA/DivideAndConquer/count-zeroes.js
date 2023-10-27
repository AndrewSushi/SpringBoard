function countZeroes(arr) { // Binary Search for the first location of 0, then subtract with the total length
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === 1) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return arr.length - low
}

module.exports = countZeroes