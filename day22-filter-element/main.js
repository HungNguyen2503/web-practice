const nav = document.querySelectorAll('.nav__item');
const menu = document.querySelectorAll(".menu__item");

nav.forEach(item=>{
    item.addEventListener('click', (e)=>{
        const type = e.target.getAttribute('type-food');
        document.querySelector('.nav__item--active').classList.remove('nav__item--active');
        e.target.classList.add('nav__item--active');
        menu.forEach(menuItem=>{
            if(type == 'all' || type == menuItem.getAttribute('type-food')){
                menuItem.classList.remove('hide');
            }
            else{
                menuItem.classList.add('hide');
            }
        });
    });
});