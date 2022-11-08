import https from 'https'
import { promises } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import axios from 'axios'

const filePath = join(homedir(), '..', 'weather-data.json')


const getCity = async (city_name) => {
    const token = await readToken()

    // const url = 
    //     `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${token}`

    if(!token){
        throw new Error('Не задан ключ API')
    }

    const url = new URL('https://api.openweathermap.org/geo/1.0/direct')
    url.searchParams.append('q', city_name)
    url.searchParams.append('limit', '5')
    url.searchParams.append('appid', token)
    
    

    https.get(url, (response) => {
        console.log(response)
        let res = ''
        response.on('data', (chunk) => {
            res += chunk
        })

        response.on('end', () => {
            console.log(res)
        })
    })
    // console.log(url)
    

}

const readToken = async () => {
    let data = await promises.readFile('./tokens.json')
    data = JSON.parse(data)

    return data.token
}

const getWeather = async (city) => {
    // const API_token = await readToken()
    const API_token = process.env.TOKEN
    
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
            q: city,
            appid: API_token,
            lang: 'ru',
            units: 'metric'
        }
    })
    
    return data
    // const url = new URL(`https://api.openweathermap.org/data/2.5/weather?`)
    // url.searchParams.append('appid', API_token)
    // url.searchParams.append('q', city)
    // url.searchParams.append('lang', 'ru')
    // url.searchParams.append('units', 'metric')
    
    // https.get(url, (response) => {
    //     let result = ''
    //     response.on('data', (chunk) => {
    //         result += chunk
    //     })

    //     response.on('end', () => {
    //         console.log(JSON.parse(result))
            
    //     })
    // })
}

export { getWeather, getCity }
