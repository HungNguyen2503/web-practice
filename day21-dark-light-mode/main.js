const mode = document.querySelector('.header__mode input');

mode.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});