

/* 
 Фазы
    Инициализация    

    - таймеры
    - pending callbacks
    - idle, prepare
    - poll
    - check
    - close callback

    - проверка на окончание
 
 Между каждой фазой и инициализацией исполняется очередь микротасков (включая промисы)
*/

const fs = require('fs')


console.log('init')

setTimeout(() => {
    console.log('timer 0')
}, 0)

// В check стадии
setImmediate(() => {
    console.log('Immediate')
})

fs.readFile(__filename, () => {
    console.log('read file complete')
    Promise.resolve().then(() => {
        console.log('after read file')
    })
})

Promise.resolve().then(() => {
    console.log('promise resolve')
})

console.log('final')


