function getHiddenCard(card: string, last = 4): string {
    // let arr = Array.from(card)
    return "*".repeat(last) + card.slice(card.length - 4)
}

console.log(getHiddenCard('1234123412344321', 2));
