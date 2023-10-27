function findFloor(arr, x) {
    let left = 0
    let right = arr.length - 1
    let floor = -1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            // If the middle element is equal to x, it is the floor.
            return arr[mid]
        } else if (arr[mid] < x) {
            // If the middle element is smaller than x, update floor and search in the right half.
            floor = arr[mid]
            left = mid + 1
        } else {
            // If the middle element is larger than x, search in the left half.
            right = mid - 1
        }
    }

    return floor
}

module.exports = findFloor