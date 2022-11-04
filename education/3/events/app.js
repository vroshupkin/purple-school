
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

myEmitter.on('msg', (data) => console.log(`Получил: ${data}`))
myEmitter.on('msg', (data) => console.log(`Второй слушатель получил: ${data}`))
myEmitter.prependListener('msg', (data) => console.log('Слушатель добавленный первым в список обработчиков!'))

// #3 Срабатывание события с отправкой текста
myEmitter.emit('msg', 'Привет: это эммитер!')

// Все слушатели события msg
console.log(myEmitter.listeners('msg'))
console.log(myEmitter.listenerCount('msg'))

// Название активных событий в эмитере
console.log(myEmitter.eventNames())


// Слушатель ошибки является её обработчиком
myEmitter.on('error', (err) => {
    console.log(`Произошла ошибка: ${err.message}`)
})

myEmitter.emit('error', new Error('Boom!'))


// #Пример с eventTarget
const target = new EventTarget()
const logTarget = () => {
    console.log('Connect with event target')
}

target.addEventListener('connect', logTarget)
target.dispatchEvent(new Event('connect'))





















