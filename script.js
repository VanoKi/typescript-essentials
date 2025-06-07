let json = "{ некорректный JSON }";
try {
    let user = JSON.parse(json)
    console.log(user.age)
} catch (e) {
    console.log(e.name)
    console.log(e.message)
}
