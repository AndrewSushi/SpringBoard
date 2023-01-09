const eggOrder = {
    variety: "white",
    price: 5.99,
    quantity: 2,
    country: "America",
    count: 12,
    cookTime: 180
}

// const price = eggOrder.price;
// const quantity = eggOrder.quantity;
// const variety = eggOrder.variety;

const {price, quantity, variety, ...others} = eggOrder;
const {cookTime = 120} = eggOrder;

function checkout(tea){
    const{quantity = 1, price} = tea;
    return quantity * price;
}

checkout(eggOrder);

const people = [
    {name: "Andrew", gender: "Male"},
    {name: "Sophie", gender: "Female"},
    {name: "Josh", gender: "Female"},
    {name: "Jack", gender: "Male"},
]

const [Andrew, Sophie, Josh, Jack] = people;

function getTotal({quantity = 1, price}){
    return quantity * price;
}

let good = "Blue Cheese";
let bad = "Steak";

// const both = [good, bad];
// [bad, good] = both;
[bad, good] = [good, bad];