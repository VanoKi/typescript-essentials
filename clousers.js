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
        console.log(state)
    }

    return {
        increase,
        decrease,
        valueOf
    }
}

const TikTok = counter()
TikTok.increase()
TikTok.decrease()
TikTok.valueOf()

