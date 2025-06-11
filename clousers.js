import ic from 'node-icecream'

function counter() {
    let state = 0

    function increase() {
        state++
    }

    function decrease() {
        state--
    }

    function valueOf() {
        ic(state)
    }

    return {
        increase,
        decrease,
        valueOf
    }
}
