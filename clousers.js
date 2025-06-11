function createGreeting(name) {
    return function () {
        console.log('Hi ' + name)
    }
}

const greetJohn = createGreeting("John");
greetJohn(); // Привет, John!
const greetIVan = createGreeting('Ivan')
greetIVan()

function createCounter() {
    let state = 0
    function incVal() {
        console.log(state++)
    }
    return incVal
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

function makeFuncs() {
    let result = [];
    for (var i = 0; i < 3; i++) {
        result.push(function() {
            console.log(i);
        });
    }
    return result;
}

const funcs = makeFuncs();
funcs[0](); // ?
funcs[1](); // ?
funcs[2](); // ?

const sayOnce = once(() => console.log("Сработало!"));

sayOnce(); // Сработало!
sayOnce(); // ничего
sayOnce(); // ничего