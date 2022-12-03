const numbers = [3, 6, 345, 7, -346, 589];
const negatives = numbers.map(function(num){
    return num * -1;
})

const doubles  = numbers.map(function(num){
    console.log(num * 2);
})

const todos = [
    {
        id: 1,
        text: "Walk the dog",
        priority: "high"
    },
    {
        id: 2,
        text: "Eat breakfast",
        priority: "high"
    },
    {
        id: 3,
        text: "Shower",
        priority: "high"
    },
    {
        id: 4,
        text: "Go to class",
        priority: "medium"
    },
]

const todoText = todos.map(function(todo){
    return todo.text;
})

const links = Array.from(document.querySelectorAll("a"));
const urls = links.map(function(a){
    return a.href;
})

function myMap(arr, callback){
    const mapped = [];
    for(let i = 0; i < arr.length; i++){
        mapped.push(callback(arr[i], i, arr));
    }
    return mapped;
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})

const repeated = myMap(['a', 'b', 'c', 'd', 'e', 'f'], function(str, idx){
    return str.repeat(idx)
})