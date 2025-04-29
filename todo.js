const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add task
addBtn.addEventListener('click', function() {
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Click to toggle completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Right-click to delete
        li.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            li.remove();
        });

        todoList.appendChild(li);
        input.value = ""; // Clear input
    }
});

// Allow Enter key to add task
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
