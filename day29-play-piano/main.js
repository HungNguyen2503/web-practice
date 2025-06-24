const keys = document.querySelectorAll(".wrapper button");

const audioMap = {};
['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].forEach(note => {
    const audio = new Audio(`./cMajorScale/${note}.mp3`);
    audioMap[note] = audio;
});

const playSound = (key) => {
    const audio = audioMap[key];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

keys.forEach(key => {
    key.addEventListener('mousedown', e=>{
        playSound(e.target.innerText);
        e.target.classList.add('press');
    });
    
    key.addEventListener('mouseup', e=>{
        e.target.classList.remove('press');
    });

    key.addEventListener('mouseleave', e=>{
        e.target.classList.remove('press');
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    const btn = document.querySelector(`.${key}`);
    if (btn && !e.repeat) {
        btn.classList.add('press');
        playSound(key);
    }
});

document.addEventListener('keyup', (e) => {
    const btn = document.querySelector(`.${e.key.toUpperCase()}`);
    btn && btn.classList.remove('press');
});

