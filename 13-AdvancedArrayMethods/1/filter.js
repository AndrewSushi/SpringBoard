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