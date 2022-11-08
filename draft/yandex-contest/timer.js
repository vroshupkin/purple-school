// let this.#current_time = Date.now()

const MS_IN_SECOND = 1000
const MS_IN_MINUTE = 60 * 1000
const MS_IN_HOUR = 60 * 60 * 1000

// let this.#interval = 5000

/**
 * @param {Date} time 
 */
const getWatchTime = (time) => {
    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    
    if(min < 10)
        min = '0' + min

    if(hours < 10)
        hours = '0' + hours

    if(sec < 10)
        sec = '0' + sec

    return `${hours}:${min}:${sec}`
}


class DateTimer{
    #current_time
    #interval
    #callbacks


    /**
     * 
     * @param {number} interval 
     * @param {Function[]} callbacks 
     */
    constructor(interval, callbacks) {
        this.#current_time = Date.now()
        this.#interval = interval

        
        this.#callbacks = callbacks
    }

    #timer_handler(current_time){
        let delta = Date.now() - current_time
        current_time = current_time + this.#interval
        setTimeout(() => {this.#timer_handler(current_time)}, this.#interval - delta)
        
        console.log(getWatchTime(new Date(current_time)))
        console.log(`delta = ${delta}`)
    }

    start(){
        this.#current_time = Date.now()
        setTimeout(() => {
            this.#timer_handler(this.#current_time)
        }, 0)
    }


}


// const dateTimer = new DateTimer(10000)
// dateTimer.start()

const october = [
    {category: 'Кофе', val: 700},
    {category: 'Газ', val: 200},
    {category: 'Овсянка', val: 200},
    {category: 'Чай', val: 500},
    {category: 'Электричество', val: 1200}
]

const november = [
    {category: 'Чай', val: 430},
    {category: 'Овсянка', val: 180},
    {category: 'Газ', val: 170},
    {category: 'Отопление', val: 3200},
    {category: 'Кофе', val: 500},
]

const expected = [
    {category: 'Кофе', val: 1200},
    {category: 'Газ', val: 370},
    {category: 'Овсянка', val: 380},
    {category: 'Чай', val: 930},
    {category: 'Электричество', val: 1200},
    {category: 'Отопление', val: 3200},
]
    

const mergeArrayOfObjects = (arrOfObj1, arrOfObj2, key, val_key) => {
    const keys_1 = arrOfObj1.map((obj) => obj[key])
    const keys_2 = arrOfObj2.map((obj) => obj[key])

    // console.log(keys_1)
    // console.log(keys_2)
    const indexes = keys_1.map((val, ind) => {
        const find_ind = keys_2.indexOf(val)
        
        if(find_ind != -1){
            keys_2[find_ind] = undefined
            return find_ind
        }
        return undefined
    })

    keys_2.forEach((val, ind) => {
        if(val != undefined)
            indexes.push(-ind)
    })
    // console.log(keys_1)
    // console.log(keys_2)
    // console.log(indexes)
    const output = []
    indexes.forEach((ind_2, ind_1) => {
        let obj = null
        if(ind_2 >= 0 ){
            obj = arrOfObj1[ind_1]
            obj[val_key] += arrOfObj2[ind_2][val_key]    
        }
        else if(ind_2 === undefined){
            obj = arrOfObj1[ind_1]
        }
        else if(ind_2 < 0){
            obj = arrOfObj2[-ind_2]
        }
        output.push(obj)
    })

    return output
}

mergeArrayOfObjects(october, november, 'category', 'val')

console.log(mergeArrayOfObjects(october, november, 'category', 'val'))