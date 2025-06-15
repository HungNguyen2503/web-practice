let range = document.querySelector(".range-bar-hover");

range.addEventListener('mousemove', (e)=>{
    range.querySelector("span").style.width = ((e.offsetX + 1) / 5).toFixed() + "%";
    range.querySelector("span").innerHTML = `${((e.offsetX + 1) / 5).toFixed()}%`;
    range.style.cursor = "e-resize";
    document.querySelector("body").style.backgroundColor = `rgba(0, 0, 0, ${(e.offsetX + 1) / 500})`;

});

/**////////////////////////////////////////////////////////////////////////////////////////////////////// */
let rangeSelect = document.querySelector(".range-bar-select");
let isActice = false;

rangeSelect.addEventListener('mousedown', (e)=>{
    isActice = true;
    rangeSelect.querySelector("span").style.width = ((e.offsetX + 1) / 5).toFixed() + "%";
    rangeSelect.querySelector("span").innerHTML = `${((e.offsetX + 1) / 5).toFixed()}%`;
    document.querySelector("body").style.backgroundColor = `rgba(0, 0, 0, ${(e.offsetX + 1) / 500})`;
    rangeSelect.style.cursor = "e-resize";
})

rangeSelect.addEventListener('mousemove', (e)=>{
    if(isActice){
        rangeSelect.querySelector("span").style.width = ((e.offsetX + 1) / 5).toFixed() + "%";
        rangeSelect.querySelector("span").innerHTML = `${((e.offsetX + 1) / 5).toFixed()}%`;
        document.querySelector("body").style.backgroundColor = `rgba(0, 0, 0, ${(e.offsetX + 1) / 500})`;
    }
});

rangeSelect.addEventListener('mouseup', ()=>{
    isActice = false;
    rangeSelect.style.cursor = "default";
});