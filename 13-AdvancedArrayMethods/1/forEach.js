const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(val, i, arr){
    console.log(val * 10);
});

const prices = [30.99, 123.99, 14.50, 495.10];
let total = 0;
prices.forEach(function(price){
    total += price;
});

console.log(total);

function myForEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

myForEach(prices, function(price, i){
    console.log(`${price} at index of ${i}`);
})