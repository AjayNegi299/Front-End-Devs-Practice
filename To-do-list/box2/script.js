const todoList = []
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
const TodoRenderElement = document.querySelector('div')

function renderTodoList(){
    let todoListStore = ''
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `
        <p>
        ${todo}
        <button class = 'delete-button'>Delete</button>
        </p>
        `
        

        todoListStore += html
    }
    TodoRenderElement.innerHTML = `${todoListStore}`
    console.log(todoListStore);
}



function addTodo(){
    const taskName = inputElement.value
    todoList.push(taskName)
    console.log(todoList);
    inputElement.value = ''
    renderTodoList()
}

buttonElement.addEventListener('click',addTodo)