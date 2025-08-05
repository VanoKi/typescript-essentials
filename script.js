class Car {
    #brand
    constructor(brand, maxSpeed) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }
    startEngine() {
        console.log(`${this.brand} is started`)
    }
    get brand() {
        return this.#brand
    }
    set brand(newbrand) {
        this.#brand = newbrand
    }
    static compareCars(car1, car2) {
        car1.maxSpeed === car2.maxSpeed
        ? console.log('cars have same speed')
            : car1.maxSpeed > car2.maxSpeed
        ? console.log(`${car1.brand} is faster`)
        : console.log(`${car2.brand} is faster`)
    }
}



