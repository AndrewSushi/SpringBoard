// function createMap(str) {
//     const map = {}
//     for (let char of str) {
//         map[char] = (map[char] + 1) || 1
//     }
//     return map
// }

// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false
//     const str1Map = createMap(str1)
//     const str2Map = createMap(str2)
    
//     for (let key in str1Map) {
//         if (!str2Map[key]) return false
//         if (str1Map[key] !== str2Map[key]) return false
//     }
//     return true
// }

function createMap(str) {
    const map = new Map()
    for (let char of str) {
        let charCount = map.get(char) || 0
        map.set(char, charCount + 1)
    }
    return map
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    const str1Map = createMap(str1)
    const str2Map = createMap(str2)
    
    for (let letter of str1Map.keys()) {
        if (str2Map.get(letter) !== str1Map.get(letter)) return false
    }
    return true
}

module.exports =  validAnagram
