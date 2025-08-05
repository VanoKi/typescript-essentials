function createCar(brand, maxSpeed) {
    const car = {
        brand: brand,
        maxSpeed: maxSpeed,
        startEngine() {
            console.log(`${this.brand} engine is started`)
        },
    }
    return car
}

const bmw = createCar('bmw', 200)
const kia = createCar('kia', 220)

bmw.startEngine() // bmw engine is started
kia.startEngine() // kia engine is started