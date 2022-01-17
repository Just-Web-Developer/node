const fs = require('fs')
const path = require('path')
const http = require("http");

// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
//     if (err){
//         throw err
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))
//
// stream.on("data", (chunk)=>{
//     console.log(chunk)
// })
//
// stream.on("end", ()=>{
//     console.log('end')
// })
//
// stream.on("error", (e)=>{
//     console.log(e)
// })
//
// const stream2 = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))
// for (let i = 0; i < 20; i++){
//     stream2.write(i + '\n')
// }
// stream2.end()


http.createServer(() => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
    // stream.on("data", chunk => res.write(chunk))
    // stream.on("end", chunk => res.end())
    stream.pipe(res)
})