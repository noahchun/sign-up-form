window.addEventListener('load', function() {
    const imgContainer = document.querySelector('.imgContainer');
    const textHeader = document.querySelector('.textHeader');
    const formContainer = document.querySelector('.formContainer');
    imgContainer.classList.add('animation');
    textHeader.classList.add('dropAnimation');
    formContainer.classList.add('animation');
});

var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
