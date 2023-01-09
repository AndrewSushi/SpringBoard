let letters = ['a', 'b', 'c', 'd', 'e', 'f']

let bs = letters.filter(function(value, i , arr){
    return value == 'b';
})

const words = ["Guayabera", "Aniseikonia", "Ginglymus", "Eleemosynary", "Hagiographer", "Rajpramukh", "Connoisseur", "Ferruginous", "Tsktsk", "crypts"];

const longWords = words.filter(function(word){
    return word.length > 9;
})

const start = words.filter(function(w){
    return w[0] === 'G' || w[0] === 'R';
})

const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1;
}

const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)){
            return true;
        }
    }
    return false;
}

const noVowel = words.filter(function(word){
    return !containsVowel(word);
})

// const checked = allChecks.filter(function(box){
//     return box.checked;
// })

// const checkedText = checked.map(function(checkbox){
//     return checkbox.parentElement.innerText;
// })

function extractedCompletedTodos(){
    const allChecks = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    return allChecks.filter(function(box){
        return box.checked;
    }).map(function(checkbox){
        return checkbox.parentElement.innerText;
    })
}

function myFilter(arr, callback){
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const longs = myFilter(words, function(word){
    return word.length > 9;
})