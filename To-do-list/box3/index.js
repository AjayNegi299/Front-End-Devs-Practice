const buttonElement = document.querySelector('button')
const renderDisplay = document.querySelector('div')
const inputElement = document.querySelector('input')
const  dateInputElement = document.querySelector('.js-date-input')



const TodoList = []
function renderTodoDisplay() {
    let appendElement = '';

    TodoList.forEach((todo, index) => {
        const { name, dueDate } = todo;

        appendElement += `
            <div class="todo-grid" data-index="${index}">
                <span>${name}</span>
                <span>${dueDate}</span>
                <button class="todo-delete-button">Delete</button>
            </div>
        `;
    });

    renderDisplay.innerHTML = appendElement;
}


function addTodo() {
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

     if (!name || !dueDate) return; // Prevent empty todos
    TodoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoDisplay();
}

renderDisplay.addEventListener('click',function(event){
    if(event.target.classList.contains('todo-delete-button')){
        const index = event.target.parentElement.getAttribute('data-index')
        TodoList.splice(index,1)
        renderTodoDisplay()
    }
})

buttonElement.addEventListener('click',addTodo)
