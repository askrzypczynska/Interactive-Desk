// <i class="fa-regular fa-square-check"></i> kwadrat z ptaszkiem do zamiany 

const addToDoBtn = document.querySelector(".addToDo");
const inputToDo = document.querySelector(".todo-input");
const checkboxToDoBtn = document.querySelector(".checkbox-todo");
const ul = document.querySelector("ul");
const deleteToDoBtn = document.querySelector(".delete-todo");
const todoTaskTemp = document.querySelector(".todoTemp")
let num=1

const addNewTask = () => {
    if(inputToDo.value!==""){
    const task = todoTaskTemp.content.cloneNode(true);
    task.querySelector(".taskInfo").textContent = inputToDo.value

    task.querySelector(".fa-regular").addEventListener("click", checkClick)

    ul.appendChild(task)

    inputToDo.value = ""
    }else {
        alert("Enter the task text!")    
    }
}

const checkClick = e => {

    e.target.classList.toggle("fa-square")
    e.target.classList.toggle("fa-square-check")
    e.target.closest("li").querySelector(".taskInfo").classList.toggle("completed-todo")

    console.log(e.target.closest("li").querySelector(".taskInfo"));
    
}


addToDoBtn.addEventListener('click', addNewTask)
//checkboxToDoBtn.addEventListener('click', completeTask)
//ul.addEventListener('click', checkClick)
