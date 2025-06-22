const video = document.querySelector('.player__video');

const play = document.querySelector('.player__play');

const controls = document.querySelector('.player__control');

const currentTime = document.querySelector('.player__currentTime')
const duration = document.querySelector('.player__duration');
const progress = document.querySelector('.player__progress');
const completed = document.querySelector('.player__completed');
let lastTime = -1;

const prev = document.querySelector('.player__prev');
const next = document.querySelector('.player__next');
const mute = document.querySelector('.player__volume i');
const volume = document.querySelector('.player__volume input');

function formatTime(length){
    let time = {
        hh : '',
        mm: '',
        ss: '',
    }
    time.hh = Math.floor(length/3600).toString().padStart(2, '0');
    time.mm = Math.floor((length%3600)/60).toString().padStart(2, '0');
    time.ss = Math.floor(length%60).toString().padStart(2, '0');

    return `${time.hh}:${time.mm}:${time.ss}`;
}

function toggleMuted(){
    if(!video.muted){
        video.muted = false;
        mute.className ='fa-solid fa-volume-low';
    }else{
        video.muted = true;
        mute.className ='fa-solid fa-volume-xmark';
    }
}

function togglePlay(){
    if(!video.paused){
        video.pause();
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    }else{
        video.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }   
}

video.addEventListener('loadedmetadata', ()=>{
    video.paused = video.autoplay ? false : true;
    toggleMuted();
    video.volume = volume.value / 100;
    duration.innerHTML = formatTime(Math.floor(video.duration));
});

video.addEventListener('play', ()=>{
     play.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

video.addEventListener('pause', ()=>{
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
});

video.addEventListener('ended', ()=>{
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
    //Phát lại sau 10s
    setTimeout(()=>{
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
        video.play();
    }, 10000);
});

video.addEventListener('timeupdate', ()=>{
    const current = Math.floor(video.currentTime);
    if(current!==lastTime){
        lastTime = current;
        currentTime.innerHTML = formatTime(current);
        completed.style.width = `${(current/video.duration * 100).toFixed(0)}%`;
    }
});

play.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay)

progress.addEventListener('click', e =>{
    let skipTo = (e.offsetX / progress.getBoundingClientRect().width);
    completed.style.width = e.offsetX;
    video.currentTime = Math.floor(skipTo*video.duration);
    currentTime.innerHTML = formatTime(Math.floor(skipTo*video.duration));
});

prev.addEventListener('click', ()=>{
    video.currentTime -= 5;
});

next.addEventListener('click', ()=>{
    video.currentTime += 5;
});

mute.addEventListener('click', ()=>{
    video.muted = !video.muted;
    toggleMuted();
});

volume.addEventListener('change', e=>{
    video.volume = e.target.value / 100;
});

