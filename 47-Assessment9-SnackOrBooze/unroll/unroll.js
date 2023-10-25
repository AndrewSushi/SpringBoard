function unroll(squareArray) {
    const unrolled = []
    while(squareArray.length > 0){
        unrolled.push(...squareArray.shift()) // Puts the first row into the unrolled array

        for(let i = 0; i < squareArray.length; i++){ // Adds the last element in each row to the unrolled array
            unrolled.push(squareArray[i].pop())
        }

        if(squareArray.length > 0){ // Adds the last row and reverses it
            unrolled.push(...squareArray.pop().reverse())
        }

        for(let i = squareArray.length - 1; i >= 0; i--){ // Adds the first element of each row
            unrolled.push(squareArray[i].shift())
        }
    }
    return unrolled
}

module.exports = unroll;
