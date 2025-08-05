class Car {
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
        // this.state = {}
    }
    startEngine() {
        console.log(`${this.brand} is started`)
    }
    stopEngine = () => {
        console.log(`${this.brand} is stoped`)
    }
}


const car1 = new Car('bmw', 200)
const car2 = new Car('bmw', 200)

// console.log(car1 === car2)
// console.log(car1.brand === car2.brand)
// console.log(car1.startEngine === car2.startEngine)
// console.log(car1.stopEngine === car2.stopEngine)

// console.log(car1.__proto__ === Car.prototype)

// const str = new String('ello')
// console.log(str.__proto__ === String.prototype)
//
// const str2 = "hello"
// console.log(Object(str2))
//
// const a = 5
// console.log(a.__proto__ === Number.prototype)

// const obj = {}
// console.log(obj.__proto__ === Object.prototype)

// const foo = () => {}
// function foo2() {
//
// }
// const foo3 = function () {}
//
// console.log(foo.__proto__ === Function.prototype)
// console.log(foo2.__proto__ === Function.prototype)
// console.log(foo3.__proto__ === Function.prototype)

console.log(Car.prototype.__proto__ === Object.prototype)
console.log(Car.__proto__ === Function.prototype)

