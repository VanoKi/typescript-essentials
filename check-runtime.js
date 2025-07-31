// const runtime = process?.release?.name || 'unknown'

if (typeof Bun !== 'undefined') {
    console.log("\x1b[32m%s\x1b[0m", "✅ Сейчас используется Bun!")
} else if ( process?.release?.name === 'node') {
    console.log("\x1b[33m%s\x1b[0m", "⚠ Сейчас используется Node.js, а не Bun.")
} else {
    console.log("\x1b[31m%s\x1b[0m", "❌ Не удалось определить среду выполнения.")
}
console.log("runtime:", Bun.version ? `Bun ${Bun.version}` : process.version);