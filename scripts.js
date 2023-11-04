document.addEventListener("DOMContentLoaded", function () {
  // Retrieve tasks from local storage or initialize an empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render tasks on page load
  renderTasks();

  // Function to render tasks
  function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
      const li = document.createElement("li");
      li.innerHTML = `<span>${task}</span><button onclick="editTask(${index})">Edit</button><button onclick="deleteTask(${index})">Delete</button>`;
      taskList.appendChild(li);
    });

    // Save tasks to local storage
    saveTasks();
  }

  // Function to add a new task
  window.addTask = function () {
    const newTaskInput = document.getElementById("new-task");
    const newTask = newTaskInput.value.trim();

    if (newTask !== "") {
      tasks.push(newTask);
      renderTasks();
      newTaskInput.value = "";
    }
  };

  // Function to edit a task
  window.editTask = function (index) {
    const updatedTask = prompt("Edit task:", tasks[index]);
    if (updatedTask !== null) {
      tasks[index] = updatedTask.trim();
      renderTasks();
    }
  };

  // Function to delete a task
  window.deleteTask = function (index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      tasks.splice(index, 1);
      renderTasks();
    }
  };

  // Function to save tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
