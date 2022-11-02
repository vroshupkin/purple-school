// timer
const start = performance.now()
console.log(start)

setTimeout(() => {
    console.log('Прошла секунда')
    console.log(performance.now() - start)
}, 1000)

function myFunc(arg){
    console.log(`Аргумент ${arg}`)
}

// // Вызов с аргументами
// setTimeout(myFunc, 1500, 'ABCDEF')


/*
    // Пример выключения таймера
    // Можно использовать для ожидания запроса. Если за 30 секунд сервер не ответил, то отменяет запрос

    const timerId = setTimeout(() => {
        console.log('BOOM!')
    }, 5000)

    setTimeout(() => {
        clearTimeout(timerId)
    }, 1000)

*/

// const intervalId = setInterval(() => {
//     console.log(performance.now())
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalId)
//     console.log('Очищено')
// }, 5000)


// console.log('Перед')

// // Срабатывает после того, как стек пуст
// setImmediate(() => {
//     console.log('После всего')
// })

// console.log('После')


const timerId = setTimeout(() => {
    console.log('BOOOM!')
}, 5000)

// отвязывает таймер от работы
timerId.unref()

// связывает таймер на работу
setTimeout(() => {
    timerId.ref()
}, 1000)
