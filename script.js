function repeat(text, count) {
    var ans = "";
    for (var i = 0; i < count; i++) {
        ans += text;
        // console.log(i);
    }
    return ans;
}
console.log(repeat('wo', 3));
