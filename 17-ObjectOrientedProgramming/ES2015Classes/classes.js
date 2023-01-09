class Triangle{
    constructor(x, y, z){
        console.log("INSIDE TRIANGLE CONSTRUCTOR");
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
    getArea(){
        const {x, y, z} = this;
        const s = (x + y + z) / 2;
        return Math.sqrt(s * (s - x) * (s - y) * (s - z));
    }
    isBig(){
        return this.getArea() > 50;
    }
    printSide(s){
        return `Side ${s}`;
    }
}

class RightTriangle extends Triangle{
    constructor(x, y, z){
        if(x * x + y * y !== z * z){
            throw new Error("Invalid hypotenuese size")
        }
        console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR");
        super(x, y, z);
        this.hyp = z;
    }
    isRightTriangle(){
        return true
    }
    display(){
        return `Right ${super.display()}`
    }
    
}

const t1 = new Triangle(3, 4, 5);
// t1.x = 3;
// t1.y = 4;
// const t2 = new Triangle(9, 12, 15);
const rt1 = new RightTriangle(3, 4, 5);
// t2.x = 9;
// t2.y = 12;