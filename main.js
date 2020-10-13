var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function cancelCookies(){

  document.getElementById('cookies').style.display='none';
}

function allowFunction(){

  document.getElementById('cookies').style.display = 'none';

}
function closeLogin(){
  
  document.getElementById('loginContainer').style.display='none';
  document.getElementById('signupContainer').style.display='none';
  document.getElementById('containerOfAll').style.opacity = '1';



}

function showLogin(){

  document.getElementById('loginContainer').style.display='block';
  document.getElementById('containerOfAll').style.opacity='0.3';
  document.getElementById('signupContainer').style.display='none';
 
var modal = document.getElementById('loginContainer');

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
}

