// node ./app.mjs

// #1.1 default + deconstruction import
import hello, {helloDeconstructionImport} from "./packet.mjs"
import fs from 'fs'


hello()
helloDeconstructionImport()

const data = fs.readFileSync('./data.txt')
console.log(data.toString())



async function main(){
    // #1.2 Динамический import с помощью await
    try{
        const {convolutionOfArray, default: meanOfArray} = await import('./async.mjs')
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
        console.log(meanOfArray(arr))
        console.log(convolutionOfArray(arr, 5))
    }
    catch(e){
        console.log('Ошибка')
    }
}

main()





















