import chalk from "chalk";

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

export { printError, printSuccess, printHelp, printStackError }