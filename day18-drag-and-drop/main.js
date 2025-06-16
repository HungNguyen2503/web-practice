
const boxs = document.querySelectorAll(".box");
const img = document.querySelector(".box img");
let isDragging = false;
let offsetX, offsetY;

function changeBox(){
    boxs.forEach(box => {
        box.addEventListener('mousemove', () => {
            if(isDragging){
                box.appendChild(img);
            }
        })
    });
}
changeBox();

img.addEventListener('mousedown', (e)=>{
    console.log('down')
    isDragging = true;
});

img.addEventListener('mousemove', (e)=>{

});

document.addEventListener('mouseup', ()=>{
    console.log('up')
    isDragging = false;
});

