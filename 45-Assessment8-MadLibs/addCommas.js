function addCommas(num) {
    let strNum = num.toString();
    let seperate = strNum.split('.');
    let intSide = seperate[0];
    let decimalSide = seperate[1] || 0;

    let newInt = '';
    let count = 0
    for(let i = intSide.length - 1; i >= 0; i--){
        count++;
        newInt = intSide[i] + newInt;
        if(count % 3 == 0 && i > 0){
            newInt = ',' + newInt;
        }
    }
    if(decimalSide){
        return newInt + '.' + decimalSide;
    }
    return newInt;
}

module.exports = addCommas;