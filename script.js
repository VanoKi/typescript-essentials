function filterAnagrams(word, items) {
    const sorted = (letters) => [...letters].sort().join('')
    let mainWord = sorted(word)
    let ans = []
    for (var index = 0; index < items.length; index++) {
       if(mainWord === sorted(items[index])) ans.push(items[index])
    }
    return ans
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
