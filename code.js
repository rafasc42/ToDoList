let addButton = document.querySelector("#submit");
let delAll = document.querySelector("#deleteAll");
let listEl = document.querySelector("#task-list");

window.onload = function(){
    for (let i = 0; i < localStorage.length; i++) {
        let item = document.createElement("li");
        let pEl = document.createElement("p");
        let delButton = document.createElement("button");
        delButton.textContent = "x";
        let key = localStorage.key(i);
        let inputText = localStorage.getItem(key);
        pEl.textContent = inputText;
        item.setAttribute("data-key", key);
        item.appendChild(pEl);
        item.appendChild(delButton);
        listEl.appendChild(item);
        delButton.addEventListener('click', (event)=>{
            delTask(event);
        });
        pEl.addEventListener('click', (event)=>{
            editTask(event);
        });
    }
};

function addTask()
{
    let inputText = document.querySelector("#user-input"); 
    if(inputText.value != "")
    {
        let item = document.createElement("li");
        let pEl = document.createElement("p");
        let delButton = document.createElement("button");
        delButton.textContent = "x";
        let key = Date.now().toString();
        localStorage.setItem(key, inputText.value);
        item.setAttribute("data-key", key);
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
    // let delButton = event.target;
    // delButton.parentNode.remove();
}

function deleteAll(){
    localStorage.clear();
    location.reload();
}

addButton.addEventListener('click', addTask);
delAll.addEventListener('click', deleteAll)