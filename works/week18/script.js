document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const noTasksMessage = document.getElementById('noTasksMessage');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
  
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => addTaskToList(task.text, task.completed));
      updateUI();
    };
  
    const saveTasks = () => {
      const tasks = Array.from(taskList.children).map(taskItem => ({
        text: taskItem.querySelector('span').textContent,
        completed: taskItem.querySelector('input[type="checkbox"]').checked
      }));
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    const addTaskToList = (taskText, completed = false) => {
      const taskItem = document.createElement('li');
      const taskCheckbox = document.createElement('input');
      const taskSpan = document.createElement('span');
      
      taskCheckbox.type = 'checkbox';
      taskCheckbox.checked = completed;
      taskCheckbox.addEventListener('change', saveTasks);
  
      taskSpan.textContent = taskText;
  
      taskItem.appendChild(taskCheckbox);
      taskItem.appendChild(taskSpan);
      taskList.appendChild(taskItem);
    };
  
    const updateUI = () => {
      const hasTasks = taskList.children.length > 0;
      noTasksMessage.style.display = hasTasks ? 'none' : 'block';
      clearTasksBtn.disabled = !hasTasks;
    };
  
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTaskToList(taskText);
        taskInput.value = '';
        saveTasks();
        updateUI();
      }
    });
  
    clearTasksBtn.addEventListener('click', () => {
      taskList.innerHTML = '';
      saveTasks();
      updateUI();
    });
  
    loadTasks();
  });
  