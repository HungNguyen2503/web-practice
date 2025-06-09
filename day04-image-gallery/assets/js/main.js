const innerWrapper = document.querySelector('.inner__wrapper');
const template = document.querySelector('#image-template');

const prev = document.querySelector('.gallery .prev');
const next = document.querySelector('.gallery .next');
const close = document.querySelector('.gallery .close');
let currentIndex = 0;

/**Upload img */
for(let i = 1; i <9; i++) {
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('img').src = `assets/image/img${i}.jpeg`;
    clone.querySelector('img').alt = `Image ${i}`;
    innerWrapper.appendChild(clone);
}
/**End upload */


/**show gallery */
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.inner__wrapper .inner__img img');

function showGalleryImage(image, index) {
	index == images.length - 1
		? next.style.display = 'none'
		: next.style.display = 'block';

	index == 0 ? prev.style.display = 'none' : prev.style.display = 'block';

    gallery.style.opacity = '1';
    gallery.style["z-index"] = '10';
    gallery.style.transform = 'scale(1)';
    gallery.querySelector('img').src = image.src;
    gallery.querySelector('img').alt = image.alt;
}

images.forEach((image, index) => {
    image.addEventListener('click', ()=>{
        currentIndex = index;
        showGalleryImage(image, index)
    });
});

/**Close gallery */
close.addEventListener('click', () => {
    gallery.style.opacity = '0';
    gallery.style["z-index"] = '-1';
    gallery.style.transform = 'scale(0.8)';
});
gallery.addEventListener('click', (e) => {
    if (e.target == e.currentTarget){
        gallery.style.opacity = '0';
        gallery.style["z-index"] = '-1';
        gallery.style.transform = 'scale(0.8)';
    }
});


/**Previous img */
prev.addEventListener('click', () => {
    currentIndex--;
    showGalleryImage(images[currentIndex], currentIndex);
});

/**Next img */
next.addEventListener('click', () => {
    currentIndex++;
    showGalleryImage(images[currentIndex], currentIndex);
});



