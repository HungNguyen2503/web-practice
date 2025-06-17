const welcome = document.querySelector("#welcome");
const boxs = document.querySelectorAll(".box");
const img = document.querySelector(".box img");

img.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData("text", e.target.id);
});

welcome.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData("text", e.target.id);
});


boxs.forEach(box => {
    box.addEventListener('dragover', (e)=>{
        e.preventDefault();
    });

    box.addEventListener('drop', (e)=>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        
        if(document.getElementById(data).tagName == 'IMG')
            box.appendChild(document.getElementById(data));
    });
});



