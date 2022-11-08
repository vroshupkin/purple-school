import { promises } from 'fs'
import { homedir } from 'os'
import { basename, dirname, join, extname, relative, resolve, sep } from 'path'
import { PATH_USER_DATA } from '../weather.js'
import { printError } from './log.service.js'

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




// const PATH_USER_DATA = join(homedir(), '../weather-data.json') 

/**
 * Сохранение ключа
 */
const saveKeyValue = async (key, value) => {
    let data = {}

    console.log(await isExist('./asds'))
    const fileIsExist = await isExist(PATH_USER_DATA)
    if(!fileIsExist){
        try{
            new Function("throw new Error()")();
        }
        catch(e){
            printError(`Файлf ${PATH_USER_DATA} не существует`)
            console.log(e.stack);
        }
        return
    }

    const file  = await promises.readFile(PATH_USER_DATA)
    data = JSON.parse(file)
    data[key] = value

    await promises.writeFile(PATH_USER_DATA, JSON.stringify(data))

}

/**
 * Забирает ключ с файла
 * @param {string} key 
 * @returns 
 */
const getKeyValue = async (key) => {
    const fileIsExist = await isExist(PATH_USER_DATA)
    if(!fileIsExist)
        return undefined

    const file = await promises.readFile(PATH_USER_DATA)
    const data = JSON.parse(file)
    return data[key]

    
    
}

/**
 * Проверяет есть ли файл по заданному пути
 * @param {} path 
 * @returns 
 */
const isExist = async (path) => {
    try{
        await promises.stat(path)
        return true
    }
    catch(e){
        return false
    }
    
}



export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }
