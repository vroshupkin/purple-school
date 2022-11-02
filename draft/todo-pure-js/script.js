const root = document.getElementById('root')

const todoData = {
    text: [
        '1', '2', '3'
    ],
    input: '',
    container: null
}

const todoElementGenerator = (text, i) => {
    let html = `
        <div style="display: flex; width: 150px; justify-content: space-between">
            <p1>${text}</p1>
            <button>x</button>
        </div>
    `.trim()

    const el = document.createElement('div')
    el.innerHTML = html
    
    const div = el.children[0]
    const button = div.children[1]
    button.onclick = () => {
        todoData.text.splice(i, 1)
        render()
    }

    return el.children[0]
}


function newToDoGenerator(){
    const html = `
        <div style={width: 150px; display: flex}>
            <input></input>
            <button>+</button>
        </div>
    `.trim()

    const wrapper = document.createElement('div')
    wrapper.innerHTML = html

    const div = wrapper.children[0]
    const input = div.children[0]
    const button = div.children[1]
    input.onchange = (e) => {
        todoData.input = e.target.value
    }
    button.onclick = () => {
        if (todoData.input.length === 0) return

        todoData.text.push(todoData.input)
        todoData.input = ''
        render()
    }

    return div
}


function render(){
    if(todoData.container != null){
        todoData.container.remove()
    }
    todoData.container = document.createElement('div')

    todoData.text.forEach((str, i) => {
        const todo = todoElementGenerator(str, i)
        todoData.container.appendChild(todo)
    }) 

    todoData.container.appendChild(newToDoGenerator())
    root.appendChild(todoData.container)
}

render()

