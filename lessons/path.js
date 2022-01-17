const path = require('path')

console.log(path.join((__dirname, __filename)))
console.log(path.resolve())
console.log(path.parse(path.resolve()))