class Triangle{
    constructor(x, y, z){
        for(let side of [x, y, z]){
            if(!Number.isFinite(side) || side <= 0){
                throw new Error("Sides must be positive number!")
            }
        }
        // if(!Number.isFinite(x) || x <= 0){
        //     throw new Error("Sides must be positive number!")
        // }
        // if(!Number.isFinite(y) || y <= 0){
        //     throw new Error("Sides must be positive number!")
        // }
        // if(!Number.isFinite(z) || z <= 0){
        //     throw new Error("Sides must be positive number!")
        // }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    greet(){
        console.log("Hello World!")
    }
    display(){
        console.log(`Triange with the sides ${this.x}, ${this.y} and ${this.z}`)
    }
}

const t1 = new Triangle(3, 4, 15);
// t1.x = 3;
// t1.y = 4;
const t2 = new Triangle(9, 12, 30);
// t2.x = 9;
// t2.y = 12;