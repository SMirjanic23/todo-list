let addTodoItem = document.getElementById('add-item__btn');
let todoList = document.getElementById('todo-list');
let inputField = document.getElementById('add-item');
let removeTodoBtn = document.getElementById('remove-item__btn');

let mode = document.getElementById('mode');

function addItemHandler() {
  let inputValue = inputField.value;
  if (inputValue) {
    const newTodoItem = document.createElement('div');
    newTodoItem.textContent = inputValue.toUpperCase();
    newTodoItem.className = 'todo-item';
    todoList.appendChild(newTodoItem);

    newTodoItem.innerHTML += `<button id="remove-item__btn" onclick="removeItemHandler(this)"><i class="fa-solid fa-xmark fa-lg"></i></button>`;

    inputField.value = '';
  }
}
function removeItemHandler(elementId) {
  elementId.parentElement.remove();
}

addTodoItem.addEventListener('click', addItemHandler);

mode.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

localStorage.setItem('theme-save');
