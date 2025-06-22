const container = document.querySelector('.container');

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let colorCode = '#' 
    for(let i=0; i<6; i++){
        colorCode += letters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

// const changeColor = () =>{
//     const colorBox = 
//     document.documentElement.style.setProperty('--bg-box', colorBox);
// }

for(let i=0; i<200; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', ()=>{
        const color = randomColor();
        // box.style.zIndex = 10;
        box.style.background = color;
        box.style.boxShadow = `${color} 0px 0px 10px, ${color} 0px 0px 100px`;
    });
    box.addEventListener('mouseout', ()=>{
        // box.style.zIndex = 1;
        box.style.background = '#1d1d1d';
        box.style.boxShadow = `#1d1d1d 0px 0px 2px`;
    });
    container.appendChild(box);
}

