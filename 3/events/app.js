
/* 
    События можно создавать 
    К событию можно добавить обработчик .addListener(eventName, cb)
    Можно выключить определенный обработчик события .off(eventName, cb)
*/

const EventEmmiter = require('events')

const myEmitter = new EventEmmiter()
const connectedHandler = () => {
    console.log('db connected')
}

// #1 Прикрепление слушателя, проверка. Открепление слушателя 
myEmitter.addListener('connected', connectedHandler)
myEmitter.emit('connected')
myEmitter.off('connected', connectedHandler)


// #2 Пример one-shot слушателя. При срабатывании слушатель открепляется
myEmitter.once('off', () => {
    console.log('Подключение к бд отключено')
})

myEmitter.emit('off')

// по-умолчанию 10 максимальных слушателей на событие
console.log(myEmitter.getMaxListeners())

myEmitter.on('msg', (data) => {
    console.log(`Получил: ${data}`)
})

myEmitter.on('msg', (data) => {
    console.log(`Второй слушатель получил: ${data}`)
})

// #3 Срабатывание события с отправкой текста
myEmitter.emit('msg', 'Привет: это эммитер!')


console.log(myEmitter.listenerCount('msg'))























