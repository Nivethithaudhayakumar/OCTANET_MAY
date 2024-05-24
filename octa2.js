document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="complete">Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);

            // Add event listeners for the new buttons
            listItem.querySelector('.complete').addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });
            listItem.querySelector('.delete').addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            taskInput.value = '';
        }
    }

    // Optional: Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
