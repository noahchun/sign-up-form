window.addEventListener('load', function() {
    const imgContainer = document.querySelector('.imgContainer');
    const textHeader = document.querySelector('.textHeader');
    const formContainer = document.querySelector('.formContainer');
    const signUp = document.querySelector('.signUp');
    const bottom = document.querySelector('.bottom');
    imgContainer.classList.add('animation');
    textHeader.classList.add('dropAnimation');
    formContainer.classList.add('animation');
    signUp.classList.add('animation');
    bottom.classList.add('animation');
});

document.addEventListener('DOMContentLoaded', function() {
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.addEventListener("change", validatePassword);
  confirm_password.addEventListener("keyup", validatePassword);
});

const svg1 = document.getElementById('svg_1');
svg1.addEventListener("mouseenter", function() {
  svg1.classList.add('hovered');
});

svg1.addEventListener("mouseleave", function() {
  svg1.classList.remove('hovered');
});

var audioPlaying = true;
const audio = document.querySelector("#audio");
audio.volume = 0.7;
svg1.addEventListener("click", function() {
  if (audioPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  audioPlaying = !audioPlaying;
});

