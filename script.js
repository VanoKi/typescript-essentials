// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 200
// }
//
// function carCreator(brand, maxSpeed) { // fabric
//     return {
//         brand,
//         maxSpeed,
//         startEngine: function () {
//             console.log(`Engine is ${this.brand}`);
//         }
//     }
// }
//
// const car2 = carCreator('ford', 150)
// const car3 = carCreator('kia', 150)
//
// console.log(car3)
// car3.startEngine()
// function CarCreator(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
// }
// CarCreator.prototype.start = function(){
//     console.log(`start ${this.brand}`)
// }
// CarCreator.prototype.start = function(){
//     console.log(`stop ${this.brand}`)
// }
// const car1 = new CarCreator('bwn', 100)
// const car2 = new CarCreator('kia', 100)
// const car3 = new CarCreator('ford', 100)
//
// console.log(car1)
// console.log(car2)
// console.log(car3)
//
// car2.start()
// class Car {
//     constructor(car, speed) {
//         this.car = car;
//         this.speed = speed;
//     }
//     start() {
//         console.log(`Starting ${this.car}`);
//     }
//     stop() {
//         console.log(`Stop ${this.car}`)
//     }
// }
//
// car = new Car('bwm', 100);
// console.log(car)
// car.start()
// car.stop()
// car2 = new Car('ford', 100);
// console.log(car)
// car.start()
// car.stop()
//
// console.log(car.stop() === car2.stop())
class Car {
    #brand
    constructor(brand, speed) {
        this.#brand = brand;
        this.speed = speed;
    }
    start() {
        console.log(`Starting ${this.#brand}`);
    }
    stop() {
        console.log(`Stop ${this.#brand}`)
    }
}

const car = new Car('bmw', 150);
console.log(car.start());
class SuperCar extends Car {
    constructor(brand, speed, fly) {
        super(brand, speed)
        this.fly = fly;
    }
    flying () {
        console.log(`Flying ${this.brand}`);
    }
}

const superBMW = new SuperCar('superbmw', 400, true );
console.log(superBMW.fly);
superBMW.flying()