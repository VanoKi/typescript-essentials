const runtime = process?.release?.name || 'unknown'

if (runtime === 'bun') {
    console.log("\x1b[32m%s\x1b[0m", "✅ Сейчас используется Bun!")
} else if (runtime === 'node') {
    console.log("\x1b[33m%s\x1b[0m", "⚠ Сейчас используется Node.js, а не Bun.")
} esle {
    console.log("\x1b[31m%s\x1b[0m", "❌ Не удалось определить среду выполнения.")
}