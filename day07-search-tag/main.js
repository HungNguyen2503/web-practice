const searchList = document.querySelector('.search__list');
const inp = document.querySelector('.search__input');
const btnRemove = document.querySelector('.button--remove');

// let tags = ['nodejs', 'javascript'];
let tags = Array.from({ length: 10 }, (_, i) => `Tag ${i + 1}`);

function addTag(tag) {
    const newTag = document.createElement('li');
    newTag.classList.add('search__list--active', 'button');
    newTag.innerHTML = tag + '<i class="fa-solid fa-xmark"></i>';
    newTag.querySelector('i').addEventListener('click', function() {
        newTag.remove();
        /**Cach 1*/
        tags.splice(tags.indexOf(tag), 1);
        /**Cach 2*/
        // tags = tags.filter(t => t !== tag);
        /**Cach 3*/
    });
    searchList.insertBefore(newTag, searchList.firstChild);
}

function removeAll() {
  searchList.querySelectorAll('li').forEach(li => {
    li.remove();
  });
  tags = [];
  inp.focus();
}


tags.forEach(tag => {
    addTag(tag);
});

// searchList.querySelectorAll('li i').forEach(i => {
//     i.addEventListener('click', function() {
//         i.parentElement.remove();
//         tags.remove(i.parentElement.textContent.trim());
//     });
// });

btnRemove.addEventListener('click', removeAll);

inp.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && inp.value.trim() !== '') {
        const tag = inp.value.trim();
        if (!tags.includes(tag)) {
            tags.push(tag);
            addTag(tag);
            inp.value = '';
            inp.focus();
        } else {
            alert('Tag already exists!');
        }
    }
});





