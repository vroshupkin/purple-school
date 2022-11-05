
/**
 * 
 */
export const getArgs = (args) => {
    const res = {}
    const [executer, file, ...rest] = args
    rest.forEach((val, ind, array) => {
        if(val.charAt(0) === '-'){
            if(ind === array.length - 1){
                res[val.slice(1)] = true
            }
            else if(array[ind + 1].charAt(0) != '-'){
                res[val.slice(1)] = array[ind + 1]
            } else{
                res[val.slice(1)] = true
            }
        }
    });

    return res;

}