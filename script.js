const input_task = document.getElementById("input_task");
const list_container = document.getElementById("list_container");
function addTask(){
    if(input_task.value == ''){
        alert("The Task Field is Empty!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_task.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_task.value = "";
    saveData();
}

list_container.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}
function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}
showTask();