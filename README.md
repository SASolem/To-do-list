# To-Do List Project

![Todo List](/images/TodoListCover.jpg)
[Visit My Project on Netlify](https://nenorvalls-to-do-list.netlify.app/)

## Project Overview

This project is a simple To-Do List application developed using HTML, CSS, and JavaScript. Users can manage tasks seamlessly by adding, editing, and deleting them, with task data persistently stored in the browser's local storage.

## Checklist

### HTML Structure

- Includes a container (`div.todo-container`) for the entire To-Do List.
- Incorporates an `h1` element for the title ("To-Do List").
- Utilizes an unordered list (`ul#task-list`) to display the list of tasks.
- Provides an input field (`input#new-task`) for adding new tasks.
- Integrates a button for adding tasks (`button` inside `.add-task` div).

### CSS Styling

- Employs an external stylesheet linked (`styles.css`).
- Applies basic styling for the To-Do List container and input elements.

### JavaScript Functionality

- Utilizes the `DOMContentLoaded` event to ensure the DOM is fully loaded before executing scripts.
- Retrieves tasks from local storage or initializes an empty array.
- Defines a `renderTasks` function to dynamically display tasks on the page.
- Renders tasks on page load.
- Implements the `addTask` function to seamlessly add a new task to the list.
- Includes the `editTask` function to modify an existing task.
- Utilizes the `deleteTask` function to remove a task, complete with a confirmation prompt.
- Implements the `saveTasks` function to persistently store tasks in local storage.

## Usage

1. Open `index.html` in a web browser.
2. Add tasks using the input field and the "Add" button.
3. Edit tasks using the "Edit" button.
4. Delete tasks using the "Delete" button with a confirmation prompt.
