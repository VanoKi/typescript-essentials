function satHI() {
    let name = 'Ivan'
    return function () {
        console.log('Hi ' + name)
    }
}

const hi = satHI()
hi()