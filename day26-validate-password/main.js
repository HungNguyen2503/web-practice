const eye  = document.querySelector('.validate__input i');
const input = document.querySelector('.validate__input input');

const lowercase = document.querySelector('.lowercase').classList
const uppercase = document.querySelector('.uppercase').classList
const number = document.querySelector('.number').classList
const symbol = document.querySelector('.symbol').classList
const characters = document.querySelector('.characters').classList
let hide = true;

function toggleHide(){
    if(hide){
        input.setAttribute('type', 'password');
        eye.className = 'fa-solid fa-eye-low-vision';
    }else{
        input.setAttribute('type', 'text');
        eye.className = 'fa-solid fa-eye';
    }
    hide = !hide;
}

function validate(e){
    let data = e.target.value;
    	// validator
	data.search(/[a-z]/) >= 0
		? lowercase.add('validate--completed')
		: lowercase.remove('validate--completed')

	data.search(/[A-Z]/) >= 0
		? uppercase.add('validate--completed')
		: uppercase.remove('validate--completed')

	data.search(/[0-9]/) >= 0 
        ? number.add('validate--completed') 
        : number.remove('validate--completed')

    data.search(/\W/) >= 0 
        ? symbol.add('validate--completed')
        : symbol.remove('validate--completed')

	data.length >= 8 
        ? characters.add('validate--completed') 
        : characters.remove('validate--completed')
    
}

eye.addEventListener('click', toggleHide);

input.addEventListener('input', (e)=>{
    validate(e);
});