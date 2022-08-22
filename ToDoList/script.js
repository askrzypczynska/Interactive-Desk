const addToDoBtn = document.querySelector(".addToDo");
const inputToDo = document.querySelector(".todo-input");
const ul = document.querySelector("ul");
const todoTaskTemp = document.querySelector(".todoTemp")
let taskNumber = 0
let defaultTask = 4

const addNewTask = () => {
    taskNumber++
    const task = todoTaskTemp.content.cloneNode(true);
    if(taskNumber < 11 && taskNumber > defaultTask){
        task.querySelector(".fa-regular").addEventListener("click", checkClick)
        task.querySelector(".fa-times").addEventListener("click", deleteNewTask)
    } else if(taskNumber <= defaultTask){
        task.querySelector(".fa-regular").addEventListener("click", checkClick)
    }
    
    if(taskNumber === 11){
        //full list
        inputToDo.placeholder = "Task list is Full"
        inputToDo.disabled = true;
    }

    if(taskNumber <= defaultTask){
        if(taskNumber===1) {
            task.querySelector(".taskInfo").textContent = "Calculate how much shark's liver weighs."
        }else if(taskNumber===2){
            task.querySelector(".taskInfo").textContent = "Play Hangman."
        }else if(taskNumber===3){
            task.querySelector(".taskInfo").textContent = "Draw Something"
        }else if(taskNumber===4){
            task.querySelector(".taskInfo").textContent = "Check the weather in Athens."
        }else if(taskNumber===5){
            task.querySelector(".taskInfo").textContent = "zadanie 5"
        }
        ul.appendChild(task)
        inputToDo.value = ""
    }else {
        if(inputToDo.value!==""){
            task.querySelector(".taskInfo").textContent = inputToDo.value
            ul.appendChild(task)
            inputToDo.value = ""
        }
    }
}

const checkClick = e => {

    e.target.classList.toggle("fa-square")
    e.target.classList.toggle("fa-square-check")
    e.target.closest("li").querySelector(".taskInfo").classList.toggle("completed-todo")

}

const deleteNewTask = e => {
    e.target.closest('li').remove()
    taskNumber--
    inputToDo.disabled = false;
    inputToDo.placeholder = "Enter the task text"
}


addToDoBtn.addEventListener('click', addNewTask)
for(let i=0; i<defaultTask; i++){
    addNewTask()
}