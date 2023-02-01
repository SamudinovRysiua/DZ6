const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

function createTodo () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        text.innerText = input.value
        deleteButton.innerText = 'delete'
        editButton.innerText = 'edit'

        todoList.append(div)
        buttonsDiv.append(deleteButton, editButton)
        div.append(text, buttonsDiv)

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            let editText = prompt(`Edit: ${text.innerText}`).trim()
            editText === '' ? text.innerText : text.innerText = editText
        }
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)