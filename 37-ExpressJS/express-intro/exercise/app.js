const express = require('express')

const app = express()

function validateArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
        let val = Number(numsAsStrings[i])
        if (Number.isNaN(val)) {
            return new Error(
            `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            )
        }
    
        result.push(val)
    }
    return result;
}

app.get('/mean', (req, res) => {
    if(!req.query.nums){
        throw "The query has to be a list of numbers"
    }
    let numsAsStrings = req.query.nums.split(',')
    let nums = validateArray(numsAsStrings)
    if (nums instanceof Error) {
        throw "Error"
    }
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    let result = {
        operation: "mean",
        result: sum/nums.length
    }
    return res.send(result)
})

app.get('/median', (req, res) => {
    if(!req.query.nums){
        throw "The query has to be a list of numbers"
    }
    let numsAsStrings = req.query.nums.split(',')
    let nums = validateArray(numsAsStrings)
    if (nums instanceof Error) {
        throw "Error"
    }
    nums.sort((a, b) => a - b)
    let median;
    let mid = Math.floor(nums.length / 2)
    if(nums.lenth % 2 == 0){
        median = (nums[mid] + nums[mid-1]) / 2
    }else{
        median = (nums[mid])
    }
    result = {
        operation: "median",
        result: median
    }
    return res.send(result)
})

app.get('/mode', (req, res) => {
    if(!req.query.nums){
        throw "The query has to be a list of numbers"
    }
    let numsAsStrings = req.query.nums.split(',')
    let nums = validateArray(numsAsStrings)
    if (nums instanceof Error) {
        throw "Error"
    }
    let hash = {}
    let mode = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]]++
        }else{
            hash[nums[i]] = 1
        }
    }
    for(let num in hash){
        if(hash[num] > max){
            mode = num
            max = hash[num]
        }
    }
    result = {
        operation: "mode",
        result: mode
    }
    return res.send(result)
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})