

const obj = {
    store: [],

    get a(){
        this.store.push('a')
        console.log('a')
        // return this

        return function(){
            // console.log('a')
            // return this
            // this.store.push('a')
            
            
            // return obj
        }.bind(this)
    },

    get b(){
        console.log('b')
        // return this
        return function(){
            // this.store.push('b')
            // console.log('b')
        }.bind(this)
    },

    get(){
        console.log('sd')
    }


}

function abcde(...args){
    
    if(args.length === 0){
        this.a = 10
    }
    else{
        console.log('asd')
        return 'a'
    }
    

    
}


Object.setPrototypeOf(abcde.prototype, {[[prototype]]: 20})
abcde('asd')
console.log(new abcde)

// console.log(obj.c)

// const builder = () => {
//     console.log(this)
// }

// Object.defineProperty(builder.prototype, 'store', []) 
// // Object.defineProperty(builder.prototype, 'a', {
// //     get: () => { builder.store.push('a') }
// // })



// const builder_inst = new builder()

// builder_inst.a.b

// // obj.a()

// // console.log(obj.a.b)
// obj.b.a
// console.log(obj.b())



