function getHiddenCard(card: string, last = 4): string {
    // let arr = Array.from(card)
    return "*".repeat(card.length - last) + card.slice(card.length - last)
}

console.log(getHiddenCard('2034399002125581'));
