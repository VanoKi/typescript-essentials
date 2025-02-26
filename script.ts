function filterAnagrams(word: string, items: string[]) {
    const sorted = (letter: string) => [...letter].sort().join()
    const mainWord = sorted(word)
    const ans = []
    for (let index = 0; index < items.length; index++) {
        if (mainWord === sorted(items[index])) ans.push(items[index])
    }
    return ans
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

