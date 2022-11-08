

function randomPassword(length) {
    const str = 'QWERTYUIOPASDFGHJKLZXCVBNM' + 'QWERTYUIOPASDFGHJKLZXCVBNM'.toLocaleLowerCase() + '0123456789'
    let res = ''

    let find = 0
    while(true){

        for (let i = 0; i < length; i++){
            const rand = Math.floor(Math.random() * str.length)
            res += str[rand]
            
            if(rand < 26)
                find |= 0b001
            else if(rand >= 26 && rand < 52)
                find |= 0b010
            else
                find |= 0b100
        }
        
        if(find === 0b111)
            return res
        
        find = 0b000
        res = ''
    }
}

randomPassword(8)


// # recursive
function multiply(a, b) {
    let res = 0
    if(a > 0){
        res += b
        res += multiply(--a, b)
    }
    return res
}


console.log(multiply(5, 4))
console.log(200 || 20)
