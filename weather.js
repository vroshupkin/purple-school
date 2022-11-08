#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"; 
import { getCity, getWeather } from "./services/api.service.js";
import { printError, printHelp, printStackError, printSuccess } from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/storage.service.js";
import chalk from "chalk";
import path from 'node:path'

export const PATH_USER_DATA = path.resolve('./user_data.json') 


const saveCity = async (city) => {
    if(!city.length){
        printError('Не передан город')
        return 
    }
    
    try{
        try{
            await getWeather(city)
        }
        
        catch(e){
            printError(`Status code: ${e.response.data.cod}`)
            const oldCity = await getKeyValue('city')

            console.log(`Не удалось сохранить город: ${chalk.bgCyanBright(city)}`)
            console.log(`Оставлен старый город: ${chalk.bgCyanBright(oldCity)}`)
            
            console.log(e.response.data.message)
            printStackError(e)
            
            return
        }
        await saveKeyValue('city', city)
        printSuccess(`Город ${chalk.bgCyanBright(city)} сохранен`)
        
    }
    catch(e){
        printError(e.message)
    }
}

const saveToken = async (token) => {
    if(!token.length){
        printError('Не передан токен')
        return 
    }
        
    try{
        await saveKeyValue('token', token)
        printSuccess('Токен сохранен')
    }
    catch(e){
        printError(e.message)
    }
    
}

const getForcast = async () => {
    const city = await getKeyValue('city')
    let weather = null
    try{
        weather = await getWeather(city)
        
    } catch(e) {
        const error_status = e?.response?.status
        const message = e?.response?.data?.message

        if(error_status == 404 && message === 'city not found'){    
            printError(`Город ${chalk.bgGray(city)} не найден`)
            console.log(e)
        }
        else if(error_status == 401){
            printError('Неверно указан токен')
        }
        else if(error_status == 400 && message === 'Nothing to geocode'){
            printError('Не указан город в env')
        }
        else{
            console.log(e)
        }
        
        return
    }

    console.log(weather)
    
}


const initCLI = async () => {
    
    const args = getArgs(process.argv) 

    let hasArgv = false
    if(args.h){
        printHelp()
        hasArgv = true
    }
    if(args.s){
        saveCity(args.s)
        hasArgv = true
    }
    if(args.t){
        saveToken(args.t)
        hasArgv = true
    }

    if(hasArgv){
        
        return
    }
        

    // Вывести погоду
    await getForcast()

    
    // console.log(getForcast())

    // let obj = Object(process.env)
    // console.log(Object.entries(obj))
    // let i = 0
    // for (const [key, val] of Object.entries(obj)) {
        
    //     if(key.match(/[Tt][Ee][Rr]/g)){
    //         console.log(key, val)
    //     }
            
    // }
    // console.log(i)
    
   

    
    // console.log(complete.reduce((a, b) => a + b) / [10, 12, 16, 20].reduce((a, b) => a + b))

    // await getCity('Старый Оскол')

    

    // console.log(await getWeather('Старый Оскол'))
    // const time_9 = [2, 9, 4, 10, 9, 5, 9].reduce((a, b) => a + b)
    
    // console.log(time_8/60)
    // console.log(time_9/60)
};


  



const helperProgress = (task, complete) => {
    const taskSum = task.reduce((a, b) => a + b, 0)
    const completeSum = complete.reduce((a, b) => a + b, 0)
    
    let percent = 0
    if(completeSum !== 0)
        percent = completeSum / taskSum

    percent += '%'
    const count = ` ${completeSum}/${taskSum}` 
    return  count + ' ' +  percent
        
}

// const time_8 = [18, 10, 12, 16, 20, 6, 7, 14, 5, 4].reduce((a, b) => a + b)
// const task_1 = [10, 12, 16, 20]
// const complete_1 = [10, 12, 16, 20]

const task_2 = [6, 7, 14, 5, 4] 
const complete_2 = [6, 7]
console.log(helperProgress(task_2, complete_2))


initCLI()

