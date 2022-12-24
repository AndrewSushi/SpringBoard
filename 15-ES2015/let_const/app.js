function greet(){
    var hello = "Hello World!";
    console.log(hello);
    var hello = "Hello World Again!";
    console.log(hello);
}

let mood = "Fantastic";
function getMood(num){
    let mood = "Meh";
    if(num < 3){
        let mood = "Bad";
        console.log(mood);
    }
    console.log(mood);
}
getMood(2);

const pi = 3.14;
function changePi(){
    const pi = 4.14;
    console.log(pi);
}
console.log(pi);