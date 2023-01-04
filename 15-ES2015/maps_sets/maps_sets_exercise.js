// 1.
new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

// 2.
const set1 = [...new Set("referee")].join("") // ref

// 3.
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// { [1, 2, 3] => true, [1, 2, 3] => false}

// 4.

function hasDuplicate(arr){
    return new Set(arr).size !== arr.length;
}

// 5.

function vowelCount(str){
    const vowels = "aeiou";
    const vowelMap = new Map();
    for(let char of str){
        let lowerChar = char.toLowerCase();
        if(vowels.includes(lowerChar)){
            if(vowelMap.has(lowerChar)){
                vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
            }else{
                vowelMap.set(lowerChar, 1);
            }
        }
    }
    return vowelMap;
}