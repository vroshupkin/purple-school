
import { fork } from 'node:child_process';
import exp from 'node:constants';



const test_arr = [
    ['oneone', 'onezerozero'],
    ['zero', 'zero'],
    ['onezero', 'oneone'],
    ['oneonezerozero', 'onezeroonezero'],
    ['one', 'zero'],
    ['one', 'one']
]

const expect = [
    '<',
    '=',
    '<',
    '>',
    '>',
    '=',
]

const child = fork('./draft/yandex-contest/1.js')

for (const input of test_arr) {
    child.send(input[0])
    child.send(input[1])    
}

const expectIterator = expect[Symbol.iterator]()

child.on('message', (msg) => {
    console.log(msg === expectIterator.next().value)
})


// child.on("message", (msg) => {
//     child.send('asd')
//     child.send('vasd')

// })


// child.stdout.on('data', (a) => {
//     console.log(msg)
// })




// process.send();
// process.send();



// for (let i = 0; i < test_arr.length; i++) {
//     const result = taskSolution(test_arr[i]) === expect[i] 
//     console.log(result) 
// }


