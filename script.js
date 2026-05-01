const notes = document.querySelector(".notes");
const btn = document.querySelector(".btn");

function showNotes(){
    notes.innerHTML = localStorage.getItem("notes");
};

showNotes();

function update(){
    localStorage.setItem("notes", notes.innerHTML);
};

btn.addEventListener("click", () => {
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "input-box";
    p.setAttribute("contenteditable", "true");
    p.innerHTML = "<br>";
    img.src = "images/delete.png";
    notes.appendChild(p).appendChild(img);
});

notes.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }
});

notes.addEventListener("keyup", function(e){
    if(e.target.classList.contains("input-box")){
        update();
    }
});

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});