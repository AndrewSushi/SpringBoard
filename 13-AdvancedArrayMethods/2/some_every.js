const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.some(function(num){
    return num > 4;
})

nums.every(function(num){
    return num > 0;
})

const submit = document.querySelector("button");
const buttons = Array.from(document.querySelectorAll("input[type='checkbox']"));

buttons.pop();

const lastBox = document.getElementById("all");
lastBox.addEventListener('click', function(e){
    if(e.checked){
        buttons.forEach(function(box){
        box.checked = false;
        })
    }else{
        buttons.forEach(function(box){
        box.checked = true;
        })
    }
})

submit.addEventListener('click', function(e){
    const allChecked = buttons.every(function(box){
        return box.checked;
    })
    console.log(allChecked && lastBox.checked)
})

function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true
        }
    }
    return false
}

const someTest = mySome([1, 2, 3, 4, 5, 6, 7, 8], function(n){
    return n > 4;
})

function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) === false){
            return false
        }
    }
    return true;
}

const everyTest = myEvery([1, 2, 3, 4, 5, 6, 7, 8], function(n){
    return n > 0;
})