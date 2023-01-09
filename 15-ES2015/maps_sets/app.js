const myMap = new Map();
myMap.set(7, "seven");
myMap.set('7', "seven string");
const empty = [];
myMap.set(empty, "Empty array");

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(sub, 1);
funcCalls.set(mult, 5);

const bandData = [['H', "Hana"],
['R', "Ryu5150"],
['C', "Undead Corporation"],
['M', "Unlucky Morpheus"]]

const bandMap = new Map(bandData);
const spreadMap = [...bandMap]

bandMap.set('F', "Fhana").set('P', "Pekora");
bandMap.has('H') // True
// bandMap.delete('H') // True
// bandMap.has('H') // False'
const keys = [...bandMap.keys()]
const values = [...bandMap.values()]
// bandMap.clear()

// bandMap.forEach((val, key) => {
//     console.log(`${key} => ${val}`)
// })

for(let [key, val] of bandMap){
    console.log(`${key} = ${val}`)
}

const annoying = ["nofilter", "justsaying", "winning", "yolo"];
const mySet = new Set(annoying);

mySet.add("bestlife").add("selfie");
mySet.add("yolo");
mySet.has("winning") // True
mySet.has("tbt") // False
mySet.delete("winning")
mySet.has("winning") // False
// mySet.clear()

function filterHashTags(tags){
    const bannedHashTags = new Set(annoying);
    return tags.filter((tag) => bannedHashTags.has(tag))
}

const sophieTags = ["livelaughlove", "bestlife", "tbt", "nofilter", "yousuck", "yolo"]

const scores = [1, 5, 45, 7, 8, 3, 4, 78, 56, 89, 4, 6, 4, 78, 98, 53, 2, 56, 7, 90, 0, 54, 2, 56, 5, 2, 6, 5, 74, 4, 5, 15];
const uniqueScores = [...new Set(scores)];

// const myObj = {
//     x: 20,
//     y: 30,
//     add: (x, y) => {return x + y},
//     sub: (x, y) => {return x - y},
//     mult: (x, y) => {return x * y}
// }