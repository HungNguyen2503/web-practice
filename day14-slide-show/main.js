const listImg = document.querySelectorAll(".list-img img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentImg = document.querySelector(".img-wrap img");

let currentIndex = 0;

listImg.forEach((img, index) => {
    img.addEventListener('click', (e)=>{
        listImg[currentIndex].parentElement.classList.remove("border-select");
        currentIndex = index;
        currentImg.src = e.target.src;
        img.parentElement.classList.add("border-select");

    });
});

prev.addEventListener('click', ()=>{
    listImg[currentIndex].parentElement.classList.remove("border-select");
    if(currentIndex==0){
        currentIndex = listImg.length - 1;
    }else{
        currentIndex--;
    }
    currentImg.src = listImg[currentIndex].src;
    listImg[currentIndex].parentElement.classList.add("border-select");
});

next.addEventListener('click', ()=>{
    listImg[currentIndex].parentElement.classList.remove("border-select");
    if(currentIndex==listImg.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    currentImg.src = listImg[currentIndex].src;
    listImg[currentIndex].parentElement.classList.add("border-select");
});