const nums = [2, 3, 4, 5, 14, 36, 58, 6, 3, 89, 3, 67, 9, 0, 3]

let highest = nums.reduce((max, next)=>{
    return Math.max(max, next)
})

const rainTotals = [[1.2, 0.35, 2.2], [0.2, 5.1, 6.4], [1.7, 2.3, 6.2]]

const sumRain = rainTotals.map((rain) => {
    return rain.reduce((acc, nextRain) => {
        return acc + nextRain;
    })
})

const sumRainShort = rainTotals.map((rain) => rain.reduce((acc, nextRain) => acc + nextRain))

const makeMath = (num) => {
    return {
        square: num * num,
        double: num * 2
    };
}

const makeMathShort = (num) => ({
    square: num * num,
    double: num * 2
})

const cat = {
    name: "Meower",
    eat: function(){
        return `${this.name} eats!`
    },
    meow: () => {
        return `${this.name} says MEOW!`
    }
}