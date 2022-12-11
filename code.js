let button = document.querySelector("#button");
let element = document.getElementById("list");

function addTask(answer) {
	let tag = document.createElement("li");
	let text = document.createTextNode(answer);
	tag.appendChild(text);
	element.appendChild(tag);
}


button.addEventListener('click', ()=>{
	let answer = prompt("write new task");
	addTask(answer);
});

