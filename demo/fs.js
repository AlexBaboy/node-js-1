// File System
const fs = require('fs')
const path = require('path')

// создать папку !
/*
fs.mkdir(path.join(__dirname, 'test'), (err)=> {
    if(err) {
        throw err
    }
    console.log('папка создана')
})*/

// создать файл !!!

const filePath = path.join(__dirname, 'test', 'text.txt')
/*fs.writeFile(filePath, 'Hello Node JS in text file!', err => {
    if(err) throw err
    console.log('Файл создан!')

    fs.appendFile(filePath, '\nHello again!!', err => {
        if(err) throw err
        console.log('Файл создан!')
    })
})*/

// читать файл !!!
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) throw err

    /*const data = Buffer.from(content)
    console.log('Content: ', data.toString())*/

    console.log('Content: ', content)
})