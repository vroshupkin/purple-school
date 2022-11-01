const root = document.getElementById('root')

let dataModel = [
    '1',
    '2',
    '3'
]

let container = null
/**
 * В начале удаляет старый элемент и создает и рендерит новый
 */
function render(){
    if(container != null){
        container.remove()
    }
    container = document.createElement('div')

    for (let i = 0; i < dataModel.length; i++) {
        const text_div = document.createElement('div')
        text_div.innerHTML =  dataModel[i]
    
        const delete_button = document.createElement('button')
        delete_button.innerText = 'x'


        delete_button.onclick = () => {
            dataModel.splice(i, 1)
            render()
        }
        
        const wrapper_div = document.createElement('div')
        wrapper_div.appendChild(text_div)
        wrapper_div.appendChild(delete_button)
        wrapper_div.style.width = '150px'
        wrapper_div.style.display = 'flex'
        wrapper_div.style.justifyContent = 'space-between'
        
        container.appendChild(wrapper_div)
    }


    container.appendChild(addElement())
    root.appendChild(container)
}


let addInputData = ''
function addElement(){
    const wrapper_div = document.createElement('div')
    wrapper_div.style.width = '150px'
    wrapper_div.style.display = 'flex'

    
    const input = document.createElement('input')
    input.onchange = (e) => {
        addInputData = e.target.value
    }

    const addButton = document.createElement('button')
    addButton.onclick = () => {
        if(typeof addInputData != 'string')
            return
        if(addInputData.length === 0)
            return
        
        dataModel.push(addInputData)
        addInputData = ''
        render()
    }

    addButton.innerHTML = '+'

    wrapper_div.appendChild(input)
    wrapper_div.appendChild(addButton)

    return wrapper_div
}

render()