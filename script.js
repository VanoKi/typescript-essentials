function filterAnagrams(word, items) {
    let mainWord = dict(word)
    for (var index = 0; index < items.length; index++) {
        // console.log(dict(word), dict(items[index]))

        }
    }

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

function dict(word) {
    let ans = {}
    for (let i = 0; i < word.length; i++) {
        if (word[i] in ans) ans[word[i]] += 1
        else ans[word[i]] = 1
    }
    return ans
}

// console.log(dict('abba'))