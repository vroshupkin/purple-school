
/* 
    Измерение производительности с помощью observer
    mark: для измерения куска кода
    perf_hooks.performance.timerify: для измерения функции целиком
*/

const perf_hooks = require('perf_hooks')

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries())
    const entry = items.getEntriesByName('slow').pop()
    console.log(`${entry.name}: ${entry.duration}`)
    observer.disconnect();

})
// Что отлслеживает
performanceObserver.observe({entryTypes: ['measure', 'function']})


function slow(){
    performance.mark('start')
    const arr = []
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i)
    }
    performance.mark('end')
    performance.measure('slow', 'start', 'end')
    // console.log(performance.getEntriesByName('slow'))
}

slow()


function test(){
    let arr = []
    for (let i = 0; i < 10000000; i++) {
        arr.push(i * i)
    }
}

// Оборачиванние функции в отслеживаемую
test = perf_hooks.performance.timerify(test)