#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"; 
import { getCity, getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";
import chalk from "chalk";

export const PATH_USER_DATA = join('./user_data.json') 

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
    const city = 'Старый Оскол'

    try{
        const weather = await getWeather(process.env.CITY)
        console.log(weather)
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
        // console.log(message)
        // console.log(e)
        // console.log(error_status == 400)
    }
    
}


const initCLI = async () => {
    
    const args = getArgs(process.argv) 

    if(args.h){
        printHelp()
        return
    }
    if(args.s){
        // Сохраняеи город
        
    }
    if(args.t){
        saveToken(args.t)
        return
    }

    // Вывести погоду
    // console.log(await getWeather('Старый Оскол'))

    
    console.log(getForcast())
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

