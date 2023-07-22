let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    
    let taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;
    taskItem.appendChild(taskLabel);
    
    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-div";
    
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "btn btn-success mr-2";
    doneBtn.addEventListener("click", function() {
      taskLabel.classList.toggle("done-task");
    });
    buttonsDiv.appendChild(doneBtn);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });
    buttonsDiv.appendChild(deleteBtn);
    
    taskItem.appendChild(buttonsDiv);
    
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function clearAllTasks() {
  taskList.innerHTML = "";
}
