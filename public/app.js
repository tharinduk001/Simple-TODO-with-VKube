// Get references to DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// In-memory storage for todos
const todos = [];

// Render the list of todos
const renderTodos = () => {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
};

// Add a new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        todos.push(text); // Add to in-memory storage
        todoInput.value = ''; // Clear input
        renderTodos(); // Re-render todos
    }
});

// Delete a todo
const deleteTodo = (index) => {
    todos.splice(index, 1); // Remove from in-memory storage
    renderTodos(); // Re-render todos
};

// Initial render
renderTodos();
