function hello(){
    console.log("Hello");
}

const whisper = function(){
    console.log("Psst, I have a secret");
}

function add(x, y){
    return x + y;
}

function sub(x, y){
    return x - y;
}

function mult(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function power(x, y){
    return x ** y;
}

const mathFuncts = [add, sub, mult, divide, power];

function doMath(a, b, mathFunct){
    return mathFunct(a, b);
}

// doMath(30, 5, function(a, b){
//     console.log(a ** b);
// })

function doAllMath(x, y, mathFunc){
    for(let i = 0; i < mathFunc.length; i++){
        console.log(mathFunc[i](x, y));
    }
}

