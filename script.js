let json = '{ "age": 30 }';
try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError('no name')
    }
    console.log(user.name)
} catch (e) {
    console.log(e.name)
    console.log(e.message)
}
