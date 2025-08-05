function CarCreator(brand, maxSpeed) {
    this.brand = brand
    this.maxSpeed = maxSpeed
    this.startEngine = function () {
        console.log(`${this.brand} is started`)
    }
}

CarCreator.prototype.startEngine = function () {
    console.log(`${this.brand} is started`)
}