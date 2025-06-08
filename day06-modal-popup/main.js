let btnOpen = document.querySelector(".open-modal button");
let iconClose = document.querySelector(".modal__header span");
let btnClose = document.querySelector(".modal__footer button");

let openModal = document.querySelector(".open-modal");
let modal = document.querySelector(".modal");

function toggleModal() {
	modal.classList.toggle('hide');
	openModal.classList.toggle('hide');
}

btnOpen.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);

modal.addEventListener('click', (e) => {
    console.log(e);
	if (e.target == e.currentTarget) toggleModal()
});