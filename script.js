const XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest()
xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts')
// xhr.onload =() => {
//     if (xhr.status === 200) {
//         console.log(xhr.response)
//     } else {
//         console.log(xhr.status)
//     }
// }
xhr.send()

xhr.onprogress = (e) => {
    console.log(e)
}
