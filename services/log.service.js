import chalk from "chalk";
import { getIcon } from "./api.service.js";
import { getKeyValue } from "./storage.service.js";

const BLACK_GREEN = [1, 87, 12]

const printError = (error_message) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error_message)
}

const printSuccess = (message) => {
    console.log(chalk.bgRgb(...BLACK_GREEN)(' SUCCESS ') + ' ' + message)
}

const printStackError = (error) => {
    if(error.stack)
        console.log(error.stack)
}

const printHelp = () => {
    const header = chalk.bgCyan(' HELP ')
    const commands = [
        'Без параметров - вывод погоды',
        `-s [CITY] для установки города`,
        `-h для вывода помощи `,
        `-t [API_KEY] для сохранения токена`
    ]

    console.log(header)
    for (const command of commands) {
        console.log(command)
    }
    
}

const printWeather = async (res) => {
    // const header = chalk.bgCyan(' HELP ')
    let description = res.weather[0].description
    description = description[0].toUpperCase() + description.slice(1)
    const icon = getIcon(res.weather[0].icon)

    


    const temperatureToString = (val) => {
        if (Math.abs(val) > 10)
            val = (val + '').slice(0, 4)
        else
            val = (val + '').slice(0, 3)

        return val
    } 
    
    const temperature = temperatureToString(Number(res.main.temp))
    const feel_like_temperature = temperatureToString(Number(res.main.feels_like))

    const commands = [
        
        chalk.bgYellow('Погода') + ` ${await getKeyValue('city')}`,
        `${icon}  ${description}`,
        `Температура:   ${temperature}`,
        `Ощущается как: ${feel_like_temperature}`,
        `Влажность ${res.main.humidity}%`,
        `Скорость ветра: ${res.wind.speed}`
    ]

    console.log()
    
    
    
    for (const command of commands) {
        console.log(command)
    }

     
}


export { printError, printSuccess, printHelp, printStackError, printWeather }