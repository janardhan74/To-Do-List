let input = document.querySelector("input");
let listContainer = document.querySelector("ul");

showData()

function addTask(){
    if(input.value == ''){
        alert("write something")
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML = input.value;
        let wrong = document.createElement("span");
        wrong.innerHTML = "\u00d7";
        newTask.appendChild(wrong);
        listContainer.appendChild(newTask);
        input.value = "";
        saveData();
    }
}


listContainer.addEventListener("click" , function(e) {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("todo-data" , listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("todo-data");
}

