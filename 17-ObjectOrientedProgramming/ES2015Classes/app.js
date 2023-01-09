let obj1 = {};
obj1.x = 10;
obj1.y = 20;
obj1.add = function(x, y){
    return x + y;
};

obj1.speak = function(){
    console.log("Hello World!");
}

obj1["color"] = "red";
obj1[12] = 12;

// for(let [k, v] of Object.entries(obj1)){
//     console.log(k, v)
// }

const add = (x, y) => {return x + y}
const sub = (x, y) => {return x - y}
const mult = (x, y) => {return x * y}
const sqr = (x) => {return x * x}
const power = (x, y) => {return x ** y}

const myMath = {}
myMath.add = add
myMath.sub = sub 
myMath.mult = mult
myMath.sqr = sqr
myMath.power = power

function getHyp(a, b){
    return Math.sqrt(a ** 2 + b ** 2);
}

function getArea(a, b){
    return a * b / 2;
}

// let s1 = 4;
// let s2 = 3;
// let s3 = getHyp(s1, s2);

// const area = getArea(s1, s2);
// s1 = 9;
// s2 = 12;
// s3 = getHyp(s1, s2)

// let triange1 = {
//     a: 3,
//     b: 4,
//     getHyp: function(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     },
//     getArea: function(){
//         return (this.a + this.b) / 2;
//     },
//     printObj: function(){
//         console.log(this)
//     }
// }

function Triangle(a, b){
    this.a = a;
    this.b = b;
    this.hyp = this.getHyp();
    this.area = this.getArea();
}

Triangle.prototype.getArea = function(){
    return (this.a + this.b) / 2;
}
Triangle.prototype.getHyp = function(){
    return Math.sqrt(this.a ** 2 + this.b ** 2);
}

const t1 = new Triangle(3, 4);