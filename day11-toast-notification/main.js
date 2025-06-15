let control = document.querySelectorAll(".control li");
let htmlToasts = document.querySelector(".toasts");

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
        bg: '#008000'
    },
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
        bg: '#ff0000'
    },
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
        bg:'#d2d200'
	},
}

control.forEach(button => {
    button.addEventListener('click', e =>{
        let toast = document.createElement("div");
        let msg = document.createElement("p");
        let countdown = document.createElement("span")
        
        msg.innerHTML = `${toasts[e.target.className].msg}`;
        countdown.style.backgroundColor = `${toasts[e.target.className].bg}`;
        
        
        toast.classList.add('toast');
        toast.innerHTML = `${toasts[e.target.className].icon}`;
        toast.appendChild(msg);
        toast.appendChild(countdown);

        toast.style.backgroundColor = `${toasts[e.target.className].bg}66`;
        toast.style.borderColor = `${toasts[e.target.className].bg}`;

        htmlToasts.appendChild(toast);


        // toast.addEventListener('animationend',()=> toast.remove());
        setTimeout(()=>{
            toast.remove();
        }, 5000);

    });
});