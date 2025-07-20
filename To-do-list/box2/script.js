const todoList = []

renderTodo()
function renderTodo(){
    let TodoHTML = ''
for (let i = 0; i < todoList.length; i++) {
    const Todo = todoList[i];
    const html = `<p>${Todo}</p>`
    TodoHTML += html
}
 document.querySelector('div').innerHTML = `${TodoHTML}`

}


const ButtonElement = document.querySelector('button')
const inputElement = document.querySelector('input');
function addTodo(){
    const names = inputElement.value;
    todoList.push(names)
    inputElement.value = ''
    renderTodo()
    
}
ButtonElement.addEventListener('click',addTodo)
