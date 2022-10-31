

function moduleVariable(){

    console.log(__dirname) 
    console.log(__filename)

    
    
}



function globalVariable(){

    console.log(global)
    
    const variables = [
        setTimeout,
        setInterval,
        setImmediate,
        clearTimeout,
        clearInterval,
        clearImmediate
    ]    
}

/*  Модульные переменные
    __dirname
    __filename
    exports
    module
    require

*/
// globalVariable()
// moduleVariable()

// console.log(module)
console.log(require)
