function filterAnagrams(word: string, items: string[]) {
    // let set = new Set(word);
    // return set;
    for (let index = 0; index < items.length; index++) {
        console.log(items[index]);
    }
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

