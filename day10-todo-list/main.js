document.querySelector(".entry").addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(this);
    const todo = data.get("todo");
    if(!todo.trim()){
        alert("Enter your todo");
        return;
    }
    addTodo(todo);
});

document.querySelectorAll(".todos li i").forEach(item => {
    item.addEventListener('click', deleteTodo);
});

document.querySelectorAll(".todos li").forEach(item => {
    item.addEventListener('click', markCompletedTodo);
});


function addTodo(todo){
    const clone = document.querySelector("#template-todo").content.cloneNode(true);
    clone.querySelector("p").innerHTML = todo;

    clone.querySelector("i").addEventListener('click', deleteTodo);
        
    clone.querySelector(".todos__item").addEventListener('click', markCompletedTodo);
    
    
    const htmlTodos = document.querySelector(".todos");
    htmlTodos.insertBefore(clone, htmlTodos.firstChild);
    document.querySelector("#todo").value = "";
}

function deleteTodo(){
    this.parentElement.remove();
}

function markCompletedTodo(){
    this.querySelector("p").classList.toggle("todos__item--completed");
}