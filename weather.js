#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"; 
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    try{
        await saveKeyValue('token', token)
        printSuccess('Токен сохранен')
    }
    catch(e){
        printError(e.message)
    }
    
}

const initCLI = () => {
    
    const args = getArgs(process.argv) 

    if(args.h){
        printHelp()
    }
    if(args.s){
        // Сохраняеи город
        
    }
    if(args.t){
        saveToken(args.t)
    }

    // Вывести погоду

    const time_8 = [18, 10, 12, 16, 20, 6, 7, 14, 5, 4].reduce((a, b) => a + b)
    const complete = [10, 12, 16]
    console.log(complete.reduce((a, b) => a + b) / [10, 12, 16, 20].reduce((a, b) => a + b))

    // const time_9 = [2, 9, 4, 10, 9, 5, 9].reduce((a, b) => a + b)
    
    // console.log(time_8/60)
    // console.log(time_9/60)
};


initCLI()

