const path = require('path')

console.log('Название файла: ', path.basename(__filename))
console.log('Имя директории: ', path.dirname(__filename))
console.log('Расширение файла: ', path.extname(__filename))
console.log('Parse: ', path.parse(__filename))
console.log('Parse: ', path.parse(__filename).dir)
console.log('Parse: ', path.parse(__filename).base)
console.log('Parse: ', path.parse(__filename).ext)
console.log('Parse: ', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))