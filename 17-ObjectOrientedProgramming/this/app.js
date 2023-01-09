const cat = {
    name: "Blue",
    breed: "Scottish Fold",
    dance: function(dance){
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`)
        }
    },
    greet: function(){
        alert(`${this.name} says hello`)
    }
};

const rocket = {
    name: "Rocket",
    breed: "Himalayan"
}

const bDance = cat.dance;
const boundDance = bDance.bind(cat);

const rocketDance = cat.dance.bind(rocket)

const dog = {
    breed: "Black Lab",
    name: "Elton",
    dance: rocketDance
}

const blueDisco = cat.dance.bind(cat, "disco")
const bluePlay = cat.play.bind(cat, "left foot", "right foot")

function applySalesTax(taxRate, price){
    return price + price * taxRate;
}

const applyCATax = applySalesTax.bind(null, 0.0725);
const applyTATax = applySalesTax.bind(null, 0.0625);

const myMembership = {
    name: "Andrew",
    total: 250,
}

const sophieMembership = {
    name: "Sophie",
    total: 150
}

function collectMonthlyFee(fee){
    const remaining = this.total - fee;
    this.total = remaining;
    return `${this.name} remaining balance: ${this.total}`
}

const collectMyFee = collectMonthlyFee.bind(myMembership, 25)
const collectSophieFee = collectMonthlyFee.bind(sophieMembership, 25)

document.querySelector("#btn-1").addEventListener('click', cat.greet.bind(cat));

const btnA = document.querySelector("#a")
const btnB = document.querySelector("#b")
const btnC = document.querySelector("#c")

function popUp(msg){
    alert(`Secret message is ${msg}`);
}

// btnA.addEventListener('click', function(){
//     popUp("Button A says hello")
// })
// btnB.addEventListener('click', function(){
//     popUp("Button B says hello")
// })
// btnC.addEventListener('click', function(){
//     popUp("Button C says hello")
// })

btnA.addEventListener('click', popUp.bind(null, "Button A says hello"))
btnB.addEventListener('click', popUp.bind(null, "Button B says hello"))
btnC.addEventListener('click', popUp.bind(null, "Button C says hello"))

// cat.play.call(dog, "Bone", "Other dog", "Deez")

// class Cat{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
//     dance(danceType){
//         console.log(`Meow, I am ${this.breed} and I like to ${danceType}`);
//     }
// }

// const rocket = new Cat("Rocket", "Large idk lol")
// rocket.dance("Tango")

// const blueDance = cat.dance;
// blueDance.call(cat, "jitterbug")


// blueDance.call(dog, "Hip hop")

const greeter = {
    msg: "I like chicken",
    sayHi: () => {
        alert(this.msg)
    },
    waitAndGreet: function(delay){
        // let callback = function(){
        //     alert(this.msg)
        // }
        // setTimeout(callback.bind(this), delay);
        
        // setTimeout(function(){
        //     alert(this.msg)
        // }.bind(this), delay)
        
        setTimeout(() => {
            alert(this.msg)
        }, delay)
    }
}