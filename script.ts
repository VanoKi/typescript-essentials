// const sentence = 'table cat table dog dog apple table';
// const words = sentence.split( ' ')
// const initial: any = {}
// const result = words.reduce((acc, word) => {
//     acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
//     return acc
// }, initial)
//
// console.log(result)

const getParams = (str: string) => {
    const initial: any = {}
    const params = str.split('&').map(items => items.split('='))
    params.map(item => initial[item[0]] = item[1])
    return initial
}

console.log(getParams('name=hexlet&count=3&order=asc'))
// { name: 'hexlet', count: '3', order: 'asc' }