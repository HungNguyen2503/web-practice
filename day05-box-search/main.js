let btnSearch = document.querySelector('#btn-search');

btnSearch.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    setTimeout(() => {
        this.previousElementSibling.focus();
    }, 300);
});

