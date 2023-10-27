function logUpTo(n) { // O(n)
    for (let i = 1; i <= n; i++) { // n
        console.log(i);
    }
}

function logAtLeast10(n) { // O(n)
    for (let i = 1; i <= Math.max(n, 10); i++) { // n
        console.log(i);
    }
}

function logAtMost10(n) { // O(1)
    for (let i = 1; i <= Math.min(n, 10); i++) { // 1
        console.log(i);
    }
}

function onlyElementsAtEvenIndex(array) { // O(n)
    let newArray = [];
    for (let i = 0; i < array.length; i++) { // n
        if (i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function subtotals(array) { // O(n^2)
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) { // n
        let subtotal = 0;
        for (let j = 0; j <= i; j++) { // n/2 which is <= n
            subtotal += array[j];
        }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}

function vowelCount(str) { // O(n)
    let vowelCount = {};
    const vowels = "aeiouAEIOU";

    for (let char of str) { // n
        if(vowels.includes(char)) {
            if(char in vowelCount) {
                vowelCount[char] += 1;
            } else {
                vowelCount[char] = 1;
            }
        }
    }

    return vowelCount;
}