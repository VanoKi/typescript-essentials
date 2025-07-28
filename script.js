const car1 = {
    brand: 'bmw',
    maxSpeed: 200
}

function carCreator(brand, maxSpeed) { // fabric
    return {
        brand,
        maxSpeed,
        startEngine: function () {
            console.log(`Engine is ${this.brand}`);
        }
    }
}

const car2 = carCreator('ford', 150)
const car3 = carCreator('kia', 150)

console.log(car3)
car3.startEngine()