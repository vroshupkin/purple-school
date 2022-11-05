import { promises } from 'fs'
import { homedir } from 'os'
import { basename, dirname, join, extname, relative, resolve, sep } from 'path'

//  let pathTest = join(homedir(), '../weather-data.json') 
//  console.log(pathTest)                              
//  console.log(basename(pathTest))                    // Конечная точка в пути pathTest
//  console.log(dirname(pathTest))                     // Путь до конечной точки
//  console.log(extname(pathTest))                     // Расширение         
//  console.log(relative(pathTest, homedir()))         // Путь от одной точки к другой
//  console.log(resolve('..'))                         // Путь при действии от 
//  console.log(sep)                                   // Разделить путей в файлых в ОС. Windows = \, Linux = /

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
}



const filePath = join(homedir(), '../weather-data.json') 
/**
 * Сохранение ключа
 */
const saveKeyValue = async (key, value) => {
    let data = {}

    if(await isExist(filePath)){
        const file  = await promises.readFile(filePath)
        data = JSON.parse(file)
    }

    data[key] = value

    await promises.writeFile(filePath, JSON.stringify(data))

}

const getKeyValue = async (key) => {
    if(await isExist(filePath)){
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
    
}


const isExist = async (path) => {
    try{
        await promises.stat()
        return true
    }
    catch(e){
        return false
    }

    
}



export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }
