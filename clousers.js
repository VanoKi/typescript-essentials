function outer() {
    let a = 42;

    return function inner() {
        console.log(a); // inner «носит» переменную a в рюкзаке
    }
}

let bag = outer()
bag()
