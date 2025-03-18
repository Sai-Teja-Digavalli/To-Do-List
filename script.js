document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
