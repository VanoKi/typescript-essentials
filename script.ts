function repeat(text: string, count: number) {
    let ans: string = ""
    for (let i = 0; i < count; i++) {
        ans += text
        // console.log(i);
    }
    return ans
}

console.log(repeat('wo', 3));
