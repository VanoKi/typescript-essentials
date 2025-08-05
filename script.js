const car1 = {
    brand: 'bmw',
    maxSpeed: 200,
    startEngine() {
        console.log(`${this.brand} engine is started`)
    },
}

const car2 = {
    brand: 'audi',
    maxSpeed: 220,
    startEngine() {
        console.log(`${this.brand} engine is started`)
    },
}

console.log(car1)
console.log(car2)