

const crypto = require('crypto')
const start = performance.now()
const https = require('https')

// Для windows нужно использовать cmd: set UV_THREADPOOL_SIZE=16 & node ./worker_thread.js
// process.env.UV_THREADPOOL_SIZE = 16

// for (let i = 0; i < 50; i++) {
//     // Получение хеша пароля
//     crypto.pbkdf2('test', 'salt', 1000000, 64, 'sha512', () => {
//         console.log(performance.now() - start)
//     })
// }

for (let i = 0; i < 50; i++) {
    // работает на системных вызывах
    https.get('https://yandex.ru', (res) => {
        res.on('data', (data) => {
            console.log(data)
         })

        res.on('end', () => { 
            console.log(performance.now() - start)
        })
          
    })
}