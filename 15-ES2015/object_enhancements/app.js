function makePerson(firstName, lastName, age){
    return {
        firstName, lastName, age, isAlive: true
    }
}

const mathStuff = {
    x: 200,
    add(a, b){
        return a + b;
    },
    square(x){
        return x * x;
    }
}

function makeColor(name, hex){
    return {
        [name] : hex,
        [hex] : name
    }
}