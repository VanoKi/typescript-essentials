function makeCounter(start) {
    let count = start;

    return function () {
        count++;
        console.log(count);
    }
}

const counter1 = makeCounter(0);
const counter2 = makeCounter(100);

counter1(); // 1
counter1(); // 2

counter2(); // 101
