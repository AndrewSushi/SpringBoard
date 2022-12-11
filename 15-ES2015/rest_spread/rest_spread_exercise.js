function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

/* Write an ES2015 Version */
function filterOutOdds(...nums) {
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

const findMin = (...nums) => {
    return nums.reduce((min, next) => {
        return next < min ? next : min;
    })
}

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr, ...nums.map(num => {
        return num << 1;
    })]
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let randIdx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randIdx), ...items.slice(randIdx+1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let tempObj = {...obj}
    delete tempObj[key];
    return tempObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val};
}