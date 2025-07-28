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
function CarCreator(brand, maxSpeed) {
    this.brand = brand
    this.maxSpeed = maxSpeed
}
CarCreator.prototype.start = function(){
    console.log(`start ${this.brand}`)
}
const car1 = new CarCreator('bwn', 100)
const car2 = new CarCreator('kia', 100)
const car3 = new CarCreator('ford', 100)

console.log(car1)
console.log(car2)
console.log(car3)

car2.start()