function toggleMenu() {
    const menu = document.querySelector('.menu');
    // Toggle the 'open' class to show or hide the menu
    menu.classList.toggle('open');
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

function validateForm() {
    const name = document.forms["contact-me-form"]["name"].value;
    const email = document.forms["contact-me-form"]["email"].value;
    const inputs = document.querySelectorAll('.required-input');

    if (name == '' || email == '') {
        inputs.forEach(function(input) {
            input.classList.add("form-input-warning");
        })
        const warning = document.getElementById("form-warning");
        warning.textContent = "Name and Email cannot be Empty";
    return false;
    }
}

function formWarning (){
    const form = document.getElementById("contact-me-form");
    const warning = document.getElementById("form-warning");

    warning.textContent = "BOBO";
}