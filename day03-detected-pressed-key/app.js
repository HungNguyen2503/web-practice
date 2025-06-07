let boxHide = document.querySelector(".box-hide");
let container = document.querySelector(".container");

let result = document.querySelector(".result");
let eKey = document.querySelector(".key p:last-child");
let eLocation = document.querySelector(".location p:last-child");
let eWhich = document.querySelector(".which p:last-child");
let eCode = document.querySelector(".code p:last-child");


document.addEventListener("keydown", (e)=>{
    let keyName = e.keyCode === 32 ? "Space" : e.key;
    result.innerHTML = e.which;
    eKey.innerHTML = keyName;
	eLocation.innerHTML = e.location;
	eWhich.innerHTML = e.which;
	eCode.innerHTML = e.code;

    boxHide.style.display = "none"
    container.style.display = "block";
})