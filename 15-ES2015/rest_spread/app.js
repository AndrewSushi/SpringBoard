const max = function(){
    const args = Array.from(arguments);
    return args.reduce((max, next)=>{
        return next > max ? next : max;
    })
}

function sum(...nums){
    return nums.reduce((s, next)=>{
        return s + next;
    })
}

const personData = (firstName, lastName, ...additionalInfo) => {
    if(!additionalInfo.length){
        console.log("No additional info");
        return;
    }
    return {firstName, lastName, additionalInfo};
}

function makeFamily(parent1, parent2, ...kids){
    // console.log(parent1, parent2);
    // console.log(kids);
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    };
}

const filterByType = (type, ...args) => {
    return args.filter((i) => {
        return type === typeof i;
    })
}

function printNames(one, two, three, four){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}

const names = ["Sophie", "Andrew", "Sophie Again", "Andrew Again"];

// printNames(...names);

const nums = [41, 345 ,7, 8, 23, 67, 357, 8, 97, 9, 3, 8, 0, 3, 5, 8, 5];

const numsCopy = [...nums]

const words = "This is a sentence thast serves a purpose for education";
const wordsArr = [...words];
const wordsArr2 = words.split(" ");

const tea = {
    type : "Oolong",
    name : 'Winter sprout',
    origin : "Taiwan"
};

const tea2 = {...tea};

const teaTin = {...tea, price: 15.99};
const newTea = {name: "Golden Frost", ...tea};

function createObj(name, quantity, price){
    return {
        name: name,
        quantity: quantity,
        price: price
    }
}

const shoppingCart = [
    createObj("Eggs", 2, 10),
    createObj("Milk", 2, 8),
    createObj("Beef", 3, 20)
]

const cartCopy = [...shoppingCart]

// shoppingCart === cartCopy
// false
// shoppingCart[1] === cartCopy[1]
// true

// cartCopy[0].quantity = 1293012390
// cartCopy:
// {name: 'Eggs', quantity: 1293012390, price: 10}
// {name: 'Milk', quantity: 2, price: 8}
// {name: 'Beef', quantity: 3, price: 20}

// shoppingCart:
// {name: 'Eggs', quantity: 1293012390, price: 10}
// {name: 'Milk', quantity: 2, price: 8}
// {name: 'Beef', quantity: 3, price: 20}