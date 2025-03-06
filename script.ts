const sentence = 'table cat table dog dog apple table';
const words = sentence.split( ' ')
const initial: any = {}
const result = words.reduce((acc, word) => {
    acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc
}, initial)

console.log(result)
