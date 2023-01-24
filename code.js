let addButton = document.querySelector("#submit");
let listEl = document.querySelector("#task-list");

function addTask()
{
    let inputText = document.querySelector("#user-input"); 
    if(inputText.value != "")
    {
        let item = document.createElement("li");
        let pEl = document.createElement("p");
        let delButton = document.createElement("button");
        pEl.innerHTML = inputText.value;
        item.appendChild(pEl);
        item.appendChild(delButton);
        listEl.appendChild(item);
        inputText.value = "";
        delButton.addEventListener('click', (event)=>{
            delTask(event);
        });
        pEl.addEventListener('click', (event)=>{
            editTask(event);
        });
    } else {
        alert("A tarefa esta vazia! Digite uma tarefa.");
    }
}

function editTask(event){
    let pEl = event.target;
    pEl.contentEditable = true;
    pEl.focus();
}

function delTask(event){
    let delButton = event.target;
    delButton.parentNode.remove();
}

addButton.addEventListener('click', addTask);