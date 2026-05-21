
//selecting input field, add button and task list
const inputText = document.getElementById("addbox");
const addBtn = document.getElementById("addBtn");
let innerContainer = document.querySelector(".innerContainer");

//save function that saves paragraph text, checked state, color value for checked state
function saveTasks(){

    let allTasks = [];

    document.querySelectorAll('.task').forEach(function(task){

        let text = task.querySelector('p').innerText;

        let completed = task.querySelector('input').checked;

        allTasks.push({
            text: text,
            completed: completed,
            color: task.style.backgroundColor
        });

    });

    localStorage.setItem('tasks', JSON.stringify(allTasks));
}
//this function is called on add btn click if not empty
let createtask = function(
    //patameter list for passing in load function
    taskValue = inputText.value,
    completed = false,
    color = null
){
  if (taskValue.trim() === "") {
    return;
}
    //create task div set color to default
  let  task = document.createElement("div");
  task.setAttribute("class", "task");
  task.style.backgroundColor = color;

  //Inner elements in a task div
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  let toDoText = document.createElement("p");
  toDoText.innerText = taskValue.trim();
  inputText.value = "";

  let edit = document.createElement("button");
  edit.setAttribute("class", "edit");
  edit.textContent = "Edit";
  //edit function
  edit.addEventListener("click", function () {
    let newText = prompt("Enter your edit");
    if (newText !== null && newText !== "") {
      toDoText.innerText = newText.toString();
      saveTasks();
    }
  });

  let del = document.createElement("button");
  del.setAttribute("class", "delete");
  del.textContent = "Delete";
  //delete funciton 
  del.addEventListener("click", function () {
    del.parentElement.remove();
    saveTasks();
  });

  //add all the inner html element to task div
  task.appendChild(checkbox);
  task.appendChild(toDoText);
  task.appendChild(edit);
  task.appendChild(del);

  //for checkbox state
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      checkbox.parentElement.style.backgroundColor = "green";
      saveTasks();
    } else {
      checkbox.parentElement.style.backgroundColor = null;
      saveTasks();
    }
  });

  innerContainer.appendChild(task);
  saveTasks();

  return task;
};

//function to load values of html element
function loadTasks(){

    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(function(item){

        createtask(item.text, item.completed, item.color);

    });
}


//add button event listener
addBtn.addEventListener('click', function(){
    createtask();
});

loadTasks(); // reloads the value