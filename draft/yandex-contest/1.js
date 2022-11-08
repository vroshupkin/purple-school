import { readFile } from 'node:fs'
import readline from 'node:readline'

// const readline = require('node:readline')

const taskSolution = (input) => {
    const getNum = (str) => {
        let i = 0
        let num = '0b'
        while (i < str.length) {
            if (str[i] === 'o') {
                i += 3
                num += '1'
            } else if (str[i] === 'z') {
                i += 4
                num += '0'
            } else {
                break
            }
        }
        return Number(num)
    }

    const [num_1, num_2] = [getNum(input[0]), getNum(input[1])]

    if (num_1 > num_2) return '>'
    else if (num_1 < num_2) {
        return '<'
    } else {
        return '='
    }
}

// let inputText = ''
// readFile('./draft/yandex-contest/input.txt', (err, data) => {
//     inputText = data + ''

//     const res = taskSolution(inputText.split('\r\n'))
//     console.log(res)

// })

let inputText = process.stdin.on()

console.log(inputText)

// const rl = readline.createInterface({
//     input: process.stdin
// });

// let input = []
// let i = 0
// rl.on('line', (data) => {
//     i++
//     input.push(data)
//     if(i === 2)
//         rl.close()
// })

// rl.on('close', () => {
//     process.stdout.write(taskSolution(input));
// })

// let i = 0
// let inputData = []
// process.on("message", (msg) => {
//     i++
//     inputData.push(msg + '')
//     if (i === 2) {
//         process.send(taskSolution(inputData))
//         i = 0
//         inputData = []
//     }
// })


// console.log(`Current gid: ${process.pid}`)
