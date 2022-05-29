// Define variables and DOM objects here
var buttonE1 = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
// Define functions here
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    return;
}

buttonE1.addEventListener("click", createTaskHandler);