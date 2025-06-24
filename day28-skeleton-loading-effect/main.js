const wrapper__img = document.querySelector('.wrapper__img');
const wrapper__title = document.querySelector('.wrapper__title');
const wrapper__desc = document.querySelector('.wrapper__desc');
const wrapper__action = document.querySelector('.wrapper__action');


setTimeout(()=>{
    // remove loading
    document.querySelectorAll('.loading').forEach(item => {
        item.classList.remove('loading')
    })

    const img = document.createElement('img');
    img.src = 'https://res.cloudinary.com/dz1jl8z32/image/upload/v1750722875/photo_1_2025-06-10_21-00-33_ms12gb.jpg';
    wrapper__img.appendChild(img);
    
    wrapper__title.innerHTML = 'Timeless Beauty';
    wrapper__title.style.height = 'unset';

    wrapper__desc.innerHTML = '"Like a delicate flower in the morning dew, her beauty whispers softly in the wind, with eyes that dance like the stars and a smile that seems to make time stand still."';
    wrapper__title.style.height = 'unset';
    
    wrapper__action.innerHTML = 'Whisper';
    wrapper__title.style.height = 'unset';

}, 5000);