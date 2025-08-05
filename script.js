class Car {
    #brand
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`${this.brand} is started`)
    }
}

const bmw = new Car('bwm', 5)
console.log(bmw.brand)