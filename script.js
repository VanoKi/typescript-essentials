var sentence = 'table cat table dog dog apple table';
var words = sentence.split(' ');
var initial = {};
var result = words.reduce(function (acc, word) {
    acc[word] = Object.prototype.hasOwn(acc, word) ? acc[word] + 1 : 1;
    return acc;
}, initial);
console.log(result);
