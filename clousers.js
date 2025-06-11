const outherFunc = () => {
    let x = 10
    const innerFunc = () => {
        console.log(x)
    }
    return innerFunc
}

const muFunc = outherFunc()
muFunc()

