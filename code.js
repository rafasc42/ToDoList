let addButton = document.querySelector("#submit");
let delAll = document.querySelector("#deleteAll");
let listEl = document.querySelector("#task-list");

window.onload = function(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let inputText = localStorage.getItem(key);
        createListItem(inputText, key);
    }
};

function createListItem(input, key){

    let item = document.createElement("li");
    item.setAttribute("data-key", key);

    let pEl = document.createElement("p");
    pEl.textContent = input.value;
    pEl.addEventListener('click', (event)=>{
        editTask(event);
    });

    let delButton = document.createElement("button");
    delButton.textContent = "x";
    delButton.addEventListener('click', (event)=>{
        delTask(event);
    });
    
    

    item.appendChild(pEl);
    item.appendChild(delButton);
    listEl.appendChild(item);
}

function addTask()
{
    let inputText = document.querySelector("#user-input"); 
    if(inputText.value != "")
    {
        let key = Date.now().toString();
        createListItem(inputText, key);
        localStorage.setItem(key, inputText.value);
        inputText.value = "";
    } else {
        alert("A tarefa esta vazia! Digite uma tarefa.");
    }
}

function editTask(event){
    let pEl = event.target;
    pEl.contentEditable = true;
    pEl.addEventListener("blur", ()=>{
    let key = pEl.parentElement.getAttribute("data-key");
    let newText = pEl.textContent;

    localStorage.setItem(key, newText);
    pEl.contentEditable = false;

    });
}

function delTask(event){
    let parent = event.target.parentElement;
    let key = parent.getAttribute("data-key");

    localStorage.removeItem(key);
    parent.remove();
}

function deleteAll(){
    localStorage.clear();
    location.reload();
}

addButton.addEventListener('click', addTask);
delAll.addEventListener('click', deleteAll);