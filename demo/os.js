const os = require('os')

console.log('Система: ', os.platform())
console.log('Архитектура процессора: ', os.arch())
console.log('Информация по процессорам: ', os.cpus())
console.log('Свободная память: ', os.freemem())
console.log('Всего памяти: ', os.totalmem())
console.log('Включен: ', os.uptime())