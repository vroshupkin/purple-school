
export default function meanOfArray(arr){
    let val = 0
    for (const v of arr)
        val += Number(v)
    
    return val / arr.length
}

export function convolutionOfArray(arr, size){
    let output = []
    for (let i = 0; i < arr.length - size; i++) {
        const mean = meanOfArray(arr.slice(i, i + size))
        output.push(mean)
    }

    return output
}

