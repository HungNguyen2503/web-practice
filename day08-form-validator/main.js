const errorUser = document.querySelector(".error-user");
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorRepassword = document.querySelector(".error-repassword");

const btnRegister = document.querySelector("#btn-res");

document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form reload trang

  const username = this.username.value.trim();
  const email = this.email.value.trim();
  const password = this.password.value.trim();
  const  repassword = this.repassword.value.trim();

  const checkAll = [validateUsername(username), validateEmail(email), validatePassword(password, repassword)];

  if(checkAll.every(check => check==true)){
    console.log("Successfully registered.");
  }
});

function checkLength(value, min, max){
    if(value.length < min || value.length > max){
        return `Must be between ${min} and ${max} characters.`;
    }
    return "";
}

function validateUsername(username){
    errorUser.innerHTML = "";
    if (!username) {
        errorUser.innerHTML = "Please enter your email address.";
        return;
    }

    errorUser.innerHTML = checkLength(username, 3, 20);

    const pattern = /^[a-zA-Z0-9_]+$/;
    if (!pattern.test(username)) {
        errorUser.innerHTML =
        "Username can only contain letters, numbers, and _.";
        return;
    }
    return true;
}


function validateEmail(email){
    errorEmail.innerHTML = "";
    
    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email){
        errorEmail.innerHTML = "Please enter your email address.";
        return;
    }
    if (email.length > 254) {
        errorEmail.innerHTML = "Email is too long (maximum 254 characters).";
        return;
    }
    if (!re.test(email)) {
        errorEmail.innerHTML = "Invalid email format.";
        return;
    }
    return true;
}

function validatePassword(password, repassword){
    errorPassword.innerHTML = "";
    errorRepassword.innerHTML = "";

    if (!password) {
        errorPassword.innerHTML = "Password cannot be empty.";
        if (!repassword) {
            errorRepassword.innerHTML = "Confirm password cannot be empty.";
        }
        return;
    }
    if (!repassword) {
        errorRepassword.innerHTML = "Confirm password cannot be empty.";
        return;
    }

    checkLength(password, 8, 32);

    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
    if (!strongPattern.test(password)) {
        errorPassword.innerHTML = "Password must include uppercase, lowercase, numbers, and symbols.";
        return;
    }

    if (repassword && password !== repassword) {
        errorPassword.innerHTML = "Confirmation password does not match.";
        errorRepassword.innerHTML = "Confirmation password does not match.";
        return;
    }
    return true;
}