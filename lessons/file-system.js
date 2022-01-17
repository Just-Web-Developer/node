const fs = require("fs");
const path = require("path")
const e = require("express");

// console.log('START')
//
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), (err) => {
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log('Created')
// })
//
// console.log('END')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err){
//         throw err
//     }
//     console.log('Created')
// })


// fs.writeFile(path.resolve(__dirname, 'test.json'), JSON.stringify({a:5}),(err) => {
//     if (err){
//         throw err
//     }
//     console.log('Created')
// })

// let data = fs.readFile(path.resolve(__dirname, 'test.json'),(err,data) => {
//     if (err){
//         throw err
//     }
//     console.log(data)
// })
// console.log(data)

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject)=> fs.writeFile(path, data , (err) => {
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject)=> fs.appendFile(path, data , (err) => {
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject)=> fs.rm(path , (err) => {
        if (err){
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject)=> fs.readFile(path, {encoding:'utf-8'} , (err, data) => {
        if (err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

let words = process.env.TEXT || 'dfgdfgd dgfgdfgdfg dfgdfgdfg dfgdfgdfg'
let count = null

writeFileAsync(path.resolve(__dirname, 'test.json'), words)
    .then(() => readFileAsync(path.resolve(__dirname, 'test.json')))
    .then(data => {
        count = data.split(' ').length
    })
    .then(() => writeFileAsync(path.resolve(__dirname, 'test2.json'), count.toString()))
    .then(() => removeFileAsync(path.resolve(__dirname, 'test.json')))
    .catch(err => console.log(err))



// writeFileAsync(path.resolve(__dirname, 'test.json'), JSON.stringify({a:5, b:4}))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test.json'), '123'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test.json'), '123'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'test.json'), '123'))
//     .then(()=> readFileAsync(path.resolve(__dirname, 'test.json')))
//     .then(data => console.log(data))
//     .then(()=> removeFileAsync(path.resolve(__dirname, 'test.json')))
//
//     .catch(err => console.log(err))
