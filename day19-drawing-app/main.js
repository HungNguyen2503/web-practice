const colorEl = document.querySelector(".nav__color");
const eraserEl = document.querySelector(".nav__eraser");
const decreaseEl = document.querySelector(".nav__decrease");
const increaseEl = document.querySelector(".nav__increase");
const drawingboardEl = document.querySelector(".container__drawing");
const saveEl = document.querySelector(".nav__save")
const clearEl = document.querySelector(".nav__clear")
const sizeEl = document.querySelector(".nav__value-size");

const context = drawingboardEl.getContext('2d');
drawBgWhite();
let isDrawing = false;
let color = colorEl.value;
let size = sizeEl.innerHTML;
let colorEraser = "#fff";
let mouse = {
    x : 0,
    y: 0
};


function drawBgWhite(){
    context.fillStyle = 'white';
    context.fillRect(0, 0, drawingboardEl.width, drawingboardEl.height);
}
colorEl.addEventListener('change', ()=>{
    color = colorEl.value;
});
decreaseEl.addEventListener('click',()=>{
    size--;
    sizeEl.innerHTML = size;
});
increaseEl.addEventListener('click',()=>{
    size++;
    sizeEl.innerHTML = size;
});
eraserEl.addEventListener('click', ()=>{
    if(colorEraser == "#fff"){
        colorEraser = color;
        color = "#fff";
    }else{
        color = colorEraser;
        colorEraser = "#fff";
    }
});
clearEl.addEventListener('click', () =>{
	context.clearRect(0, 0, drawingboardEl.width, drawingboardEl.height);
    drawBgWhite();
});
saveEl.addEventListener('click', (e) => {
	const imageURI = drawingboardEl.toDataURL('image/png');
	e.currentTarget.href = imageURI;
});



let getMouse = (e)=>{
    mouse.x = e.clientX - drawingboardEl.getBoundingClientRect().left;
    mouse.y = e.clientY - drawingboardEl.getBoundingClientRect().top;
}
drawingboardEl.addEventListener('mousedown', (e)=>{ 
    isDrawing = true;
    getMouse(e);
    // draw(mouse.x, mouse.y);
});
drawingboardEl.addEventListener('mouseup', (e)=>{ 
    isDrawing = false;
});
drawingboardEl.addEventListener('mouseleave', (e)=>{ 
    isDrawing = false;
});
drawingboardEl.addEventListener('mousemove', (e)=>{
    if(isDrawing){
        // getMouse(e);
        draw(mouse.x, mouse.y);

        const x2 = e.offsetX
		const y2 = e.offsetY
        console.log(mouse.x, e.offsetX);
        

		drawLine(mouse.x, mouse.y, x2, y2)

		mouse.x = x2;
		mouse.y = y2
    }
});

let draw = (x, y)=>{
    context.beginPath()
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
    // context.strokeStyle = "#f5f82f";
    // context.stroke();
}
function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeStyle = color;
	context.lineWidth = size*2;
	context.stroke();
}