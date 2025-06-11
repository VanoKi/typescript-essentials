function makeCounter() {
    let count = 0;

    return function() {
        return count++; // есть доступ к внешней переменной "count"
    };
}

let counter = makeCounter();

console.log(counter())
console.log(counter())
console.log(counter())

